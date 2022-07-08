import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);

    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    Halfling.count += 1;
    return Halfling.count;
  }
}