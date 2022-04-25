import { usePreferences } from './usePreferences';
const useHandlePreferences = () => {
  const [preferences, setPreferences] = usePreferences();

  const addFavorite = (episode) => {
    let favoritesList = [];
    if (!preferences.favorites.find((item) => item.id === episode.id)) {
      favoritesList = {
        ...preferences,
        favorites: [...preferences.favorites, episode],
      };
      localStorage.setItem('preferences', JSON.stringify(favoritesList));
      return setPreferences(favoritesList);
    }
  };
  const removeFavorite = (episode) => {
    const filtredFavorites = preferences.favorites.filter(
      (item) => item.id !== episode.id
    );
    localStorage.setItem(
      'preferences',
      JSON.stringify({ ...preferences, favorites: [...filtredFavorites] })
    );
    return setPreferences({
      ...preferences,
      favorites: [...filtredFavorites],
    });
  };
  const addWatched = (episode) => {
    let watchedList = [];
    if (!preferences.watched.find((item) => item.id === episode.id)) {
      watchedList = {
        ...preferences,
        watched: [...preferences.watched, episode],
      };
      localStorage.setItem('preferences', JSON.stringify(watchedList));
      return setPreferences(watchedList);
    }
  };
  const removeWatched = (episode) => {
    const filtredWatched = preferences.watched.filter(
      (item) => item.id !== episode.id
    );
    localStorage.setItem(
      'preferences',
      JSON.stringify({ ...preferences, watched: [...filtredWatched] })
    );
    return setPreferences({
      ...preferences,
      watched: [...filtredWatched],
    });
  };

  return [
    preferences,
    setPreferences,
    addFavorite,
    removeFavorite,
    addWatched,
    removeWatched,
  ];
};

export default useHandlePreferences;
