import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private readonly _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
  }
  
  static createdArchetypeInstances(): number {
    Ranger.count += 1;
    return Ranger.count;
  }

  get energyType(): EnergyType {
    return this.energyType;
  }
}