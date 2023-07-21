import time

from decorator import NotifierDecorator


class NotifierTimerDecorator(NotifierDecorator):
    def send(self, message: str):
        start_time = time.time()
        self.notifier.send(message)
        end_time = time.time()
        elapsed_time = (end_time - start_time) * 1000
        print(
            "[Design Pattern Decorator] Time taken to send notification:"
            f" {elapsed_time:.2f} milliseconds"
        )
