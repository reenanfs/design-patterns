from concrete_component import Notifier
from concrete_decorator import NotifierTimerDecorator


notifier = Notifier()
notifier = NotifierTimerDecorator(notifier)
notifier.send("Hello World!")
