from subject import User
from concrete_observer import EmailService, SlackService
from concrete_subject import EventManager, EventTypes


event_manager = EventManager()

email_service = EmailService()
slack_service = SlackService()

event_manager.add_listener(EventTypes.USER_CREATED, email_service)
event_manager.add_listener(EventTypes.USER_CREATED, slack_service)

user1 = User("User1", "user1@email.com")
user2 = User("User2", "user2@email.com")

event_manager.notify(EventTypes.USER_CREATED, user1)
event_manager.notify(EventTypes.USER_CREATED, user2)
