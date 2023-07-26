from subject import User
from observer import Observer


class EmailService(Observer):
    def update(self, event_data: User):
        self.send_email(event_data)

    def send_email(self, event_data: User):
        user_name = event_data.name
        user_email = event_data.email
        print(
            f"Sending an email to {user_name} at {user_email}: Welcome to our"
            " platform!"
        )


class SlackService(Observer):
    def update(self, event_data: User):
        self.send_slack(event_data)

    def send_slack(self, event_data: User):
        user_name = event_data.name
        print(
            f"Sending an slack message to {user_name}: Welcome to our"
            " platform!"
        )
