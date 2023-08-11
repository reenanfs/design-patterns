from subsystems import TV, DVDPlayer, SoundSystem


class HomeEntertainmentFacade:
    def __init__(self):
        self.tv = TV()
        self.dvd_player = DVDPlayer()
        self.sound_system = SoundSystem()

    def watch_movie(self, channel, volume=20):
        self.tv.turn_on()
        self.sound_system.turn_on()
        self.dvd_player.turn_on()
        self.tv.change_channel(channel)
        self.dvd_player.play()
        self.sound_system.set_volume(volume)

    def stop_movie(self):
        self.dvd_player.stop()
        self.tv.turn_off()
        self.sound_system.turn_off()
        self.dvd_player.turn_off()
