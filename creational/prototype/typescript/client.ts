import { EnemyFactory, Vampire, Zombie } from './concrete-prototype';

const factory = new EnemyFactory();

const zombiePrototype = new Zombie(100, 15, 2);
const vampirePrototype = new Vampire(150, 25, 5);

factory.registerPrototype('Zombie', zombiePrototype);
factory.registerPrototype('Vampire', vampirePrototype);

const zombie1 = factory.createEnemy('Zombie');
const zombie2 = factory.createEnemy('Zombie');
const vampire1 = factory.createEnemy('Vampire');

zombie1?.displayInfo();
zombie2?.displayInfo();
vampire1?.displayInfo();
