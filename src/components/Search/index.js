/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { EPISODIE_FETCH } from '../../utils/requests';
import useSwr from '../../utils/useSwr';
import { useSearch } from '../hooks/searchContext';
import useDebounce from '../hooks/useDebounce';
import { Input, InputBox, InputWrapper, Label } from './style';

const Search = () => {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useSearchParams();
  const val = search.get('search') || '';
  const [data, error] = useSwr(EPISODIE_FETCH, { filter: { name: value } });
  const context = useSearch();
  useEffect(() => {
    if (value) {
      context.searchEpisodes(data?.data.episodes.results);
    } else {
      context.searchEpisodes('');
    }
  }, [context, data]);

  const onChange = (event) => {
    let search = event.target.value;
    if (search) {
      setSearch({ search });
    } else {
      setSearch({});
    }
  };
  const db = useDebounce(setValue, 1000);
  const handleDebounce = (event) => {
    onChange(event);
    db(event.target.value);
  };

  return (
    <InputBox>
      <InputWrapper>
        <Label>
          <AiOutlineSearch size='25px' color='black' />
          <Input
            placeholder='search episode'
            value={val}
            onChange={handleDebounce}
          />
        </Label>
      </InputWrapper>
    </InputBox>
  );
};

export default Search;
