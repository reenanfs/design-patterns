import time

from component import BaseNotifier
from python_decorator import python_timer_decorator


class Notifier(BaseNotifier):
    @python_timer_decorator
    def send(self, message: str):
        time.sleep(1)
        print(f"Sending base notification: {message}")
