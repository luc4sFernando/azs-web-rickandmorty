/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  Item,
  ItemsWrapper,
  Label,
  ListContainer,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from './style';
import { useNavigate } from 'react-router-dom';
import PreferenceIcons from '../PreferenceIcon';
import { usePreferences } from '../hooks/usePreferences';
import useHandlePreferences from '../hooks/useHandlePreferences';
const List = ({ episodes }) => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = usePreferences();
  const [prefe, setPrefe, add, remove, addWatched, removeWatched] =
    useHandlePreferences();
  const handleClick = (e, id) => {
    navigate(`/episodes/${id}`);
  };

  return (
    <ListContainer>
      <ItemsWrapper>
        {episodes.map((episode) => (
          <Item key={episode.id}>
            <PreferenceIcons
              addFavorite={add}
              episode={episode}
              preferences={preferences}
              removeFavorite={remove}
              addWatched={addWatched}
              removeWatched={removeWatched}
            />
            <TitleWrapper onClick={(e) => handleClick(e, episode.id)}>
              <Label>{episode.episode}</Label>
              <Title>{episode.name}</Title>
            </TitleWrapper>
            <SubtitleWrapper onClick={handleClick}>
              Data que foi ao ar: <Subtitle>{episode.air_date}</Subtitle>
              Quantidade de Personagens:
              <Subtitle>{episode.characters.length}</Subtitle>
            </SubtitleWrapper>
          </Item>
        ))}
      </ItemsWrapper>
    </ListContainer>
  );
};

List.propTypes = {
  episodes: PropTypes.array,
};
export default List;
