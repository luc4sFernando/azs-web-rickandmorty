/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineCheck, AiOutlinePlus, AiFillEye } from 'react-icons/ai';
import { IconBackground, IconsContainer } from './style';
import PropTypes from 'prop-types';

const PreferenceIcons = ({
  episode,
  removeFavorite,
  addFavorite,
  preferences,
  addWatched,
  removeWatched,
}) => {
  return (
    <IconsContainer>
      {preferences.watched.find((item) => item.id === episode.id) ? (
        <IconBackground color onClick={() => removeWatched(episode)}>
          <AiFillEye size='20px' color='green' />
        </IconBackground>
      ) : (
        <IconBackground onClick={() => addWatched(episode)}>
          <AiFillEye size='20px' color='gray' />
        </IconBackground>
      )}

      {preferences.favorites.find((item) => item.id === episode.id) ? (
        <IconBackground color onClick={() => removeFavorite(episode)}>
          <AiOutlineCheck size='20px' />
        </IconBackground>
      ) : (
        <IconBackground onClick={() => addFavorite(episode)}>
          <AiOutlinePlus size='20px' />
        </IconBackground>
      )}
    </IconsContainer>
  );
};
PreferenceIcons.propTypes = {
  preferences: PropTypes.object,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
  episode: PropTypes.object,
  addWatched: PropTypes.func,
  removeWatched: PropTypes.func,
};

export default PreferenceIcons;
