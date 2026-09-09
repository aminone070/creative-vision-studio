import type { DeliveryStatus } from "@/types/domain";

const TRANSITIONS: Record<DeliveryStatus, DeliveryStatus[]> = {
  DRAFT: ["PENDING", "CANCELLED"],
  PENDING: ["SEARCHING_CAPTAIN", "CANCELLED", "EXPIRED"],
  SEARCHING_CAPTAIN: ["ASSIGNED", "CANCELLED", "EXPIRED"],
  ASSIGNED: ["CAPTAIN_EN_ROUTE_TO_PICKUP", "CANCELLED", "FAILED"],
  CAPTAIN_EN_ROUTE_TO_PICKUP: ["ARRIVED_AT_PICKUP", "CANCELLED", "FAILED"],
  ARRIVED_AT_PICKUP: ["PICKED_UP", "FAILED", "CANCELLED"],
  PICKED_UP: ["IN_TRANSIT", "FAILED"],
  IN_TRANSIT: ["ARRIVED_AT_DESTINATION", "FAILED"],
  ARRIVED_AT_DESTINATION: ["DELIVERED", "FAILED"],
  DELIVERED: [],
  FAILED: [],
  CANCELLED: [],
  EXPIRED: [],
};

export function canTransition(from: DeliveryStatus, to: DeliveryStatus) {
  return TRANSITIONS[from].includes(to);
}

export function nextStatuses(from: DeliveryStatus) {
  return TRANSITIONS[from];
}

export function isTerminal(status: DeliveryStatus) {
  return TRANSITIONS[status].length === 0;
}

/** The happy-path progression used by captain action buttons. */
export const HAPPY_PATH: DeliveryStatus[] = [
  "PENDING",
  "SEARCHING_CAPTAIN",
  "ASSIGNED",
  "CAPTAIN_EN_ROUTE_TO_PICKUP",
  "ARRIVED_AT_PICKUP",
  "PICKED_UP",
  "IN_TRANSIT",
  "ARRIVED_AT_DESTINATION",
  "DELIVERED",
];

export function nextHappyStatus(from: DeliveryStatus): DeliveryStatus | null {
  const i = HAPPY_PATH.indexOf(from);
  if (i === -1 || i === HAPPY_PATH.length - 1) return null;
  return HAPPY_PATH[i + 1] ?? null;
}

export function progressIndex(status: DeliveryStatus) {
  return HAPPY_PATH.indexOf(status);
}
