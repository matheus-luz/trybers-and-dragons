import Energy from '../Energy';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
}

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter | Fighter): void;
  receiveDamage(attackPoints: number): void;
}