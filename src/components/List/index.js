import React from 'react';
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

const List = ({ episodes }) => {
  console.log(episodes);
  return (
    <ListContainer>
      <ItemsWrapper>
        {episodes.map((episode) => (
          <Item key={episode.id}>
            <TitleWrapper>
              <Label>{episode.episode}</Label>
              <Title>{episode.name}</Title>
            </TitleWrapper>
            <SubtitleWrapper>
              <Subtitle>{episode.air_date}</Subtitle>
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
