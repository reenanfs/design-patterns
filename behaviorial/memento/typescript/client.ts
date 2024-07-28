import { SaveHistory } from './caretaker';
import { Game } from './originator';

const game = new Game(1, 100);

const saveHistory = new SaveHistory();

const savedState = game.save();
saveHistory.save(savedState);

game.level = 2;
game.health = 80;
console.log(`Current game state: ${game.display()}`);

const restoredState = saveHistory.restore(0);
if (restoredState) {
	game.restore(restoredState);
}
console.log(`Restored game state: ${game.display()}`);
