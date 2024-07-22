from concrete_prototype import EnemyFactory, Vampire, Zombie

factory = EnemyFactory()

zombie_prototype = Zombie(100, 15, 2)
vampire_prototype = Vampire(150, 25, 5)

factory.register_prototype('Zombie', zombie_prototype)
factory.register_prototype('Vampire', vampire_prototype)

zombie1 = factory.create_enemy('Zombie')
zombie2 = factory.create_enemy('Zombie')
vampire1 = factory.create_enemy('Vampire')

zombie1.display_info()
zombie2.display_info()
vampire1.display_info()
