from abc import ABC, abstractmethod


class EnemyPrototype(ABC):
    @abstractmethod
    def clone(self) -> 'EnemyPrototype':
        """Create a copy of the current instance."""
        pass

    @abstractmethod
    def display_info(self) -> None:
        """Display information about the enemy."""
        pass
