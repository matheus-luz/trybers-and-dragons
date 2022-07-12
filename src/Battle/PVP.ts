import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _player0: Fighter, private _player1: Fighter) {
    super(_player0);
  }

  override fight(): number {
    this._player0.lifePoints -= this._player1.lifePoints;
    this._player0.strength -= this._player1.strength;
    this._player0.defense -= this._player1.defense;
    return this._player0.lifePoints && this._player1.lifePoints;
  }
}