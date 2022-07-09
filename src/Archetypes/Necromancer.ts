import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private readonly _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
  }
    
  static createdArchetypeInstances(): number {
    Necromancer.count += 1;
    return Necromancer.count;
  }

  get energyType(): EnergyType {
    return this.energyType;
  }
}