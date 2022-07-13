// import Fighter, { SimpleFighter } from '../Fighter/index';
// import Battle from './Battle';

// export default class PVE extends Battle {
//   private _player: Fighter;
//   private _monsters: SimpleFighter[];
  
//   constructor(player: Fighter, monsters: SimpleFighter[]) {
//     super(player);

//     this._player = player;
//     this._monsters = monsters;
//   }

//   override fight(): number {
//     this._monsters.forEach((monster) => {
//       monster.attack(this._player);
//       this._player.attack(monster);
//     });
//     return this._player.lifePoints;
//   }
// }