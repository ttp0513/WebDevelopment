// Simulated customer tier input
const customerTier = "Gold"; 

let serviceResponse;

switch (customerTier) {
  case "Bronze":
    serviceResponse = "Route to standard support queue. Offer 5% discount.";
    break;
  case "Silver":
    serviceResponse = "Route to priority support. Offer 10% discount.";
    break;
  case "Gold":
    serviceResponse = "Route to dedicated account manager. Offer 15% discount.";
    break;
  case "Platinum":
    serviceResponse = "Route to VIP concierge team. Offer 25% discount and free shipping.";
    break;
  default:
    serviceResponse = "Tier not recognized. Please verify customer status.";
}

console.log(`Customer Tier: ${customerTier}`);
console.log(`Action: ${serviceResponse}`);

