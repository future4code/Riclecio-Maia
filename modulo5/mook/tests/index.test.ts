import { validateCharacter } from "../src/Character";

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "Rick",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  }); 
  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });