from component import BaseNotifier


class NotifierDecorator(BaseNotifier):
    def __init__(self, notifier: BaseNotifier):
        self.notifier = notifier

    def send(self, message: str):
        self.notifier.send(message)
