from facade import HomeEntertainmentFacade


entertainment_system = HomeEntertainmentFacade()
channel_to_watch = "ABC"
movie_volume = 25

entertainment_system.watch_movie(channel_to_watch, movie_volume)

entertainment_system.stop_movie()
