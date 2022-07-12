import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _player0: Fighter, private _player1: Fighter) {
    super(_player0);
  }

  override fight(): number {
    this._player0.attack(this._player1); 
    this._player1.attack(this._player0);

    return super.fight();
  }
}