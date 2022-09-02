import { Character } from "../src/models/character";
import { validateCharacter } from "../src/types/validateCharacter";

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

test("Should return false for life equals 0", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life:  0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

test("Should return false for strength equals 0", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

test("Should return false for defense equals 0", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

test("Should return false for negative life", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: -1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

test("Should return false for negative strength", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1500,
      strength: -300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

test("Should return false for negative defense", () => {
    const result = validateCharacter({
      name: "Bananinha",
      life: 1500,
      strength: 300,
      defense: -500,
    });

    expect(result).toBe(false);
  }
);

test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

