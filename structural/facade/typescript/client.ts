import { HomeEntertainmentFacade } from './facade';

const entertainmentSystem = new HomeEntertainmentFacade();
const channelToWatch = 'ABC';
const movieVolume = 25;

entertainmentSystem.watchMovie(channelToWatch, movieVolume);

entertainmentSystem.stopMovie();
