import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private readonly _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
  }
  
  static createdArchetypeInstances(): number {
    Warrior.count += 1;
    return Warrior.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}