import type {
  PackageSize,
  PriceBreakdown,
  PricingConfig,
  Priority,
  ServiceZone,
} from "@/types/domain";

export const DEFAULT_PRICING: PricingConfig = {
  baseFee: 25,
  perKmFee: 4,
  minFee: 25,
  maxFee: 250,
  mediumPackageSurcharge: 5,
  largePackageSurcharge: 12,
  prioritySurcharge: 15,
  waitingFeePerMinute: 1,
  commissionRate: 0.2,
};

export interface PriceInput {
  distanceKm: number;
  size: PackageSize;
  priority: Priority;
  waitingMinutes?: number;
  zone?: ServiceZone | undefined;
}

export function calculatePrice(
  input: PriceInput,
  config: PricingConfig = DEFAULT_PRICING,
): PriceBreakdown {
  const baseFee = input.zone?.baseFee ?? config.baseFee;
  const perKm = input.zone?.perKmFee ?? config.perKmFee;

  const distanceFee = Math.round(input.distanceKm * perKm);
  const sizeFee =
    input.size === "LARGE"
      ? config.largePackageSurcharge
      : input.size === "MEDIUM"
        ? config.mediumPackageSurcharge
        : 0;
  const priorityFee = input.priority === "EXPRESS" ? config.prioritySurcharge : 0;
  const waitingFee = Math.round(
    (input.waitingMinutes ?? 0) * config.waitingFeePerMinute,
  );

  const lines = [
    { key: "pricing.base", amount: baseFee },
    { key: "pricing.distance", amount: distanceFee },
    { key: "pricing.handling", amount: sizeFee },
    { key: "pricing.priority", amount: priorityFee },
    { key: "pricing.waiting", amount: waitingFee },
  ].filter((l) => l.amount > 0);

  const raw = lines.reduce((s, l) => s + l.amount, 0);
  const total = Math.min(Math.max(raw, config.minFee), config.maxFee);

  return { lines, total };
}

export function commissionFor(total: number, config: PricingConfig = DEFAULT_PRICING) {
  return Math.round(total * config.commissionRate);
}

export function captainEarningFor(total: number, config: PricingConfig = DEFAULT_PRICING) {
  return total - commissionFor(total, config);
}

/** Straight-line distance between two mock coordinates, in km. */
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return Math.round(2 * R * Math.asin(Math.sqrt(h)) * 10) / 10;
}

export function etaMinutes(km: number, priority: Priority) {
  const speed = priority === "EXPRESS" ? 22 : 17;
  return Math.max(8, Math.round((km / speed) * 60) + 8);
}
