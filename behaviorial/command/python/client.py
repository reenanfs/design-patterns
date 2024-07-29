from receiver import Light, Fan
from concrete_command import ToggleCommand
from invoker import RemoteControl, Button

# Devices
light = Light()
fan = Fan()

# Commands
light_toggle_command = ToggleCommand(light)
fan_toggle_command = ToggleCommand(fan)

# Remote Control
remote_control = RemoteControl()

# Create Buttons and Associate Commands
toggle_light_button = Button('ToggleLight')
toggle_light_button.set_command(light_toggle_command)

toggle_fan_button = Button('ToggleFan')
toggle_fan_button.set_command(fan_toggle_command)

# Add buttons to remote control
remote_control.add_button('ToggleLight', toggle_light_button)
remote_control.add_button('ToggleFan', toggle_fan_button)

# Simulate button presses
remote_control.press_button('ToggleLight')  # Output: The light is on
remote_control.undo_button('ToggleLight')   # Output: The light is off

remote_control.press_button('ToggleFan')    # Output: The fan is on
remote_control.undo_button('ToggleFan')     # Output: The fan is off
