import time

from interface import UserServiceModel


class UserService(UserServiceModel):
    def get_user(self, user_id: int) -> str:
        print(f"Fetching user with id {user_id} from the API...")
        time.sleep(1)  # Simulate a network call
        return f"User {user_id}"
