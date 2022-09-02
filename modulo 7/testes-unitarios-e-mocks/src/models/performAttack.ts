import { validateCharacter } from "../types/validateCharacter";
import { Character } from "./character";

// export const performAttack = (attacker: Character, defender: Character) => {
//   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//     throw new Error("Invalid character");
//   }

//   if (attacker.strength > defender.defense) {
//     defender.life -= attacker.strength - defender.defense;
//   }
// };

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

// a segunda implementação é mais flexível, pois permite que o usuário passe uma função de validação como parâmetro. Isso permite que ele passe uma função de validação diferente daquela que está no arquivo validateCharacter.ts. Isso é útil, por exemplo, se quisermos testar a função performAttack com uma função de validação diferente daquela que está no arquivo validateCharacter.ts.

