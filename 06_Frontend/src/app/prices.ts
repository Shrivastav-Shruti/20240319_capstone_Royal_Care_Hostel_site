export interface Prices {
    id: string; // Identifier for the prices (optional)
    standard: number; // Price for a standard room
    deluxe: number; // Price for a deluxe room
    superDeluxe: number; // Price for a super deluxe room
    foodPackage: number; // Price for a food package (e.g., includes breakfast, lunch, dinner)
    electricityBillPerUnit: number; // Price per unit of electricity consumed
    securityDeposit: number; // Security deposit amount
}
