import PropTypes from 'prop-types';
import {
  IconBackground,
  IconsContainer,
  Item,
  ItemsWrapper,
  Label,
  ListContainer,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from './style';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../../utils/favoritesContext';
const List = ({ episodes }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useContext(MyContext);
  const handleClick = (e, id) => {
    navigate(`/episodes/${id}`);
  };
  console.log(favorites);
  const removeFavorite = (episode) => {
    const filtredFavorites = favorites.filter((item) => item.id !== episode.id);
    localStorage.setItem('favorites', JSON.stringify(filtredFavorites));
    return setFavorites(filtredFavorites);
  };

  const addFavorite = (episode) => {
    let favoritesList = [];

    if (!favorites.find((item) => item.id === episode.id)) {
      favoritesList = [...favorites, episode];
      localStorage.setItem('favorites', JSON.stringify(favoritesList));
      return setFavorites(favoritesList);
    }
  };

  return (
    <ListContainer>
      <ItemsWrapper>
        {episodes.map((episode) => (
          <Item key={episode.id}>
            <IconsContainer>
              {favorites.find((item) => item.id === episode.id) ? (
                <IconBackground color onClick={() => removeFavorite(episode)}>
                  <AiOutlineCheck size='20px' />
                </IconBackground>
              ) : (
                <IconBackground onClick={() => addFavorite(episode)}>
                  <AiOutlinePlus size='20px' />
                </IconBackground>
              )}
            </IconsContainer>
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
