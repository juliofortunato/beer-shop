export default function formatCurrency(valueInCents: number): string {
  const valueInDollars = valueInCents / 100;
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(valueInDollars);

  return formattedValue;
}
