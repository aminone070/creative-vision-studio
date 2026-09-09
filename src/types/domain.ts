export const DELIVERY_STATUSES = [
  "DRAFT",
  "PENDING",
  "SEARCHING_CAPTAIN",
  "ASSIGNED",
  "CAPTAIN_EN_ROUTE_TO_PICKUP",
  "ARRIVED_AT_PICKUP",
  "PICKED_UP",
  "IN_TRANSIT",
  "ARRIVED_AT_DESTINATION",
  "DELIVERED",
  "FAILED",
  "CANCELLED",
  "EXPIRED",
] as const;

export type DeliveryStatus = (typeof DELIVERY_STATUSES)[number];

export const PACKAGE_TYPES = [
  "FOOD",
  "GROCERY",
  "CLOTHING",
  "ELECTRONICS",
  "DOCUMENTS",
  "PHARMACY",
  "SMALL_PARCEL",
  "OTHER",
] as const;
export type PackageType = (typeof PACKAGE_TYPES)[number];

export const PACKAGE_SIZES = ["SMALL", "MEDIUM", "LARGE"] as const;
export type PackageSize = (typeof PACKAGE_SIZES)[number];

export const PRIORITIES = ["STANDARD", "EXPRESS"] as const;
export type Priority = (typeof PRIORITIES)[number];

export type Role =
  | "CUSTOMER"
  | "MERCHANT"
  | "CAPTAIN"
  | "ADMIN"
  | "OPERATIONS"
  | "SUPPORT";

export interface Address {
  governorate: string;
  city: string;
  area: string;
  street: string;
  building?: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  instructions?: string;
  lat: number;
  lng: number;
}

export interface ServiceZone {
  id: string;
  name: string;
  nameEn: string;
  city: string;
  active: boolean;
  radiusKm: number;
  baseFee: number;
  perKmFee: number;
  maxWeightKg: number;
  maxDimensionCm: number;
  operatingHours: string;
}

export interface Merchant {
  id: string;
  businessName: string;
  owner: string;
  phone: string;
  email: string;
  category: string;
  zoneId: string;
  status: "PENDING" | "APPROVED" | "SUSPENDED";
  createdAt: string;
  branches: number;
}

export interface Captain {
  id: string;
  name: string;
  phone: string;
  status: "AVAILABLE" | "BUSY" | "OFFLINE" | "PENDING" | "SUSPENDED";
  rating: number;
  totalDeliveries: number;
  acceptanceRate: number;
  completionRate: number;
  avgDeliveryMinutes: number;
  zoneId: string;
  vehicle: string;
  vehicleStatus: "ACTIVE" | "MAINTENANCE";
  lat: number;
  lng: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
}

export interface PricingConfig {
  baseFee: number;
  perKmFee: number;
  minFee: number;
  maxFee: number;
  largePackageSurcharge: number;
  mediumPackageSurcharge: number;
  prioritySurcharge: number;
  waitingFeePerMinute: number;
  commissionRate: number;
}

export interface PriceBreakdownLine {
  key: string;
  amount: number;
}

export interface PriceBreakdown {
  lines: PriceBreakdownLine[];
  total: number;
}

export interface TimelineEvent {
  status: DeliveryStatus;
  at: string;
  actor: string;
}

export interface Delivery {
  id: string;
  merchantId: string;
  customerName: string;
  customerPhone: string;
  captainId: string | null;
  pickup: Address;
  destination: Address;
  zoneId: string;
  packageType: PackageType;
  packageSize: PackageSize;
  packageWeightKg: number;
  packageDescription: string;
  instructions?: string;
  codRequired: boolean;
  codAmount: number;
  priority: Priority;
  distanceKm: number;
  etaMinutes: number;
  price: number;
  breakdown: PriceBreakdown;
  commission: number;
  captainEarning: number;
  status: DeliveryStatus;
  createdAt: string;
  updatedAt: string;
  timeline: TimelineEvent[];
  rating?: number;
}

export interface AppNotification {
  id: string;
  type: string;
  titleAr: string;
  titleEn: string;
  at: string;
  read: boolean;
}

export interface AuditLogEntry {
  id: string;
  actor: string;
  action: string;
  entity: string;
  at: string;
}

export const SUPPORT_STATUSES = [
  "OPEN",
  "IN_PROGRESS",
  "WAITING_FOR_USER",
  "RESOLVED",
  "CLOSED",
] as const;
export type SupportStatus = (typeof SUPPORT_STATUSES)[number];

export interface SupportTicket {
  id: string;
  category: string;
  subject: string;
  status: SupportStatus;
  createdAt: string;
  messages: { from: string; body: string; at: string }[];
}
