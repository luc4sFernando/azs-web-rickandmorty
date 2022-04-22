import PropTypes from 'prop-types';
import {
  IconsWrapper,
  Item,
  ItemsWrapper,
  Label,
  ListContainer,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from './style';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const List = ({ episodes }) => {
  const navigate = useNavigate();
  const handleClick = (e, id) => {
    navigate(`/episodes/${id}`);
  };
  return (
    <ListContainer>
      <ItemsWrapper>
        {episodes.map((episode) => (
          <Item key={episode.id}>
            <IconsWrapper>
              <MdOutlineFavoriteBorder size='20px' />
            </IconsWrapper>
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
