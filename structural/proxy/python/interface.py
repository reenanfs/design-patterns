from abc import ABC, abstractmethod


class UserServiceModel(ABC):
    @abstractmethod
    def get_user(self, user_id: int) -> str:
        pass
