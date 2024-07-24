
from concrete_implementator import TV, Radio
from refined_abstraction import AdvancedRemote, BasicRemote


tv = TV()
radio = Radio()

basic_remote_for_tv = BasicRemote(tv)
advanced_remote_for_radio = AdvancedRemote(radio)

print("Using Basic Remote for TV:")
basic_remote_for_tv.toggle_power()
basic_remote_for_tv.toggle_power()

print("\nUsing Advanced Remote for Radio:")
advanced_remote_for_radio.toggle_power()
advanced_remote_for_radio.mute()
advanced_remote_for_radio.toggle_power()
