import { calculatePrice } from "./price-calculator";

test("returns correct value", () => {
  const input = "2";
  const result = calculatePrice(input);

  expect(result).toBe("£0.01");
});
