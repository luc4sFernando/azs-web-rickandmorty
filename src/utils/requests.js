import axios from 'axios';

const END_POINT = 'https://rickandmortyapi.com/graphql';

const fetcher = (query, variables = {}) =>
  axios.post(END_POINT, { query, variables }).then((res) => res.data);

export const EPISODIES_QUERY = `query($page:Int){
    episodes(page: $page){
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
