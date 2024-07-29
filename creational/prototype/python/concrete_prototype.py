import copy
from typing import Optional, Dict

from prototype import EnemyPrototype


class Zombie(EnemyPrototype):
    def __init__(self, health: int, attack_power: int, speed: int) -> None:
        self.health = health
        self.attack_power = attack_power
        self.speed = speed

    def clone(self) -> 'EnemyPrototype':
        return copy.deepcopy(self)

    def display_info(self) -> None:
        print(f"Zombie - Health: {self.health}, Attack Power: {self.attack_power}, Speed: {self.speed}")


class Vampire(EnemyPrototype):
    def __init__(self, health: int, attack_power: int, speed: int) -> None:
        self.health = health
        self.attack_power = attack_power
        self.speed = speed

    def clone(self) -> 'EnemyPrototype':
        return copy.deepcopy(self)

    def display_info(self) -> None:
        print(f"Vampire - Health: {self.health}, Attack Power: {self.attack_power}, Speed: {self.speed}")


class EnemyFactory:
    def __init__(self) -> None:
        self.prototypes: Dict[str, EnemyPrototype] = {}

    def register_prototype(self, name: str, prototype: EnemyPrototype) -> None:
        self.prototypes[name] = prototype

    def create_enemy(self, name: str) -> Optional[EnemyPrototype]:
        prototype = self.prototypes.get(name)
        if prototype:
            return prototype.clone()
        return None
