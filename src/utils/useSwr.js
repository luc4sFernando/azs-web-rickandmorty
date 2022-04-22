import axios from 'axios';
import useSWR from 'swr';

const END_POINT = 'https://rickandmortyapi.com/graphql';

const fetcher = (query, variables = {}) =>
  axios.post(END_POINT, { query, variables }).then((res) => res.data);

const useSwr = (query, variables) => {
  console.log(variables);
  const { data, error } = useSWR([query, variables], fetcher);

  return [data, error];
};

export default useSwr;
