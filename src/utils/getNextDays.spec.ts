import { getNextDays } from "./getNextDays";

describe("Tests to validate the getNextDays function", () => {
test("should return the next 5 days", () => {
  const days = getNextDays();

  expect(days).toHaveLength(5);
});

test("should not return an empty array", () => {
  const days = getNextDays();

  expect(days).not.toHaveLength(0);
 
});
});

