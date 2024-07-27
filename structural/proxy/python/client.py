
from proxy import UserServiceProxy
from service import UserService


def client_code(user_service: UserService):
    print(user_service.get_user(1))
    print(user_service.get_user(2))
    print(user_service.get_user(1))  # This should return cached data


if __name__ == "__main__":
    print("Client: Executing the client code with a real user service:")
    real_user_service = UserService()
    client_code(real_user_service)

    print("\nClient: Executing the same client code with a proxy:")
    user_service_proxy = UserServiceProxy(real_user_service)
    client_code(user_service_proxy)
