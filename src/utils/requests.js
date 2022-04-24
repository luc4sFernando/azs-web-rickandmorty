import axios from 'axios';

const END_POINT = 'https://rickandmortyapi.com/graphql';

const fetcher = (query, variables = {}) =>
  axios.post(END_POINT, { query, variables }).then((res) => res.data);

export const EPISODIES_QUERY = `query($page:Int){
    episodes(page: $page){
      info{
        pages
        next
        prev
      }
      results{
        id
        episode 
        name
        air_date
        characters{
          name
        }
      }
    }
  }`;
export const EPISODIE_QUERY = `query($id: ID!){
  episode(id: $id){
    id
    name
    air_date
    episode
    characters{
      id
      image
      name
      species
      status
    }
    }
  }`;

export const EPISODIE_FETCH = `query($filter: FilterEpisode!){
    episodes(filter: $filter){
      results{
        id
        episode
        name
        air_date
        characters{
          name
        }
      }
      }
    }`;

export default fetcher;
