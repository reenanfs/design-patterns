from interface import UserServiceModel
from service import UserService


class UserServiceProxy(UserServiceModel):
    def __init__(self, real_user_service: UserService):
        self.real_user_service = real_user_service
        self.cache = {}

    def get_user(self, user_id: int) -> str:
        if user_id in self.cache:
            print(f"Returning cached user with id {user_id}...")
            return self.cache[user_id]

        user = self.real_user_service.get_user(user_id)
        self.cache[user_id] = user
        return user
