/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { EPISODIE_FETCH } from '../../utils/requests';
import useSwr from '../../utils/useSwr';
import { useSearch } from '../hooks/useSearch';
import useDebounce from '../hooks/useDebounce';
import { Input, InputWrapper, Label } from './style';
import useTransitionForInput from '../hooks/useTransitionForInput';
const Search = () => {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useSearchParams();
  const [active, setActive] = useState(false);
  const val = search.get('search') || '';
  const [data] = useSwr(EPISODIE_FETCH, { filter: { name: value } });
  const context = useSearch();
  const db = useDebounce(setValue, 1000);
  const inputRef = useTransitionForInput(active, setSearch);
  useEffect(() => {
    if (value && data?.data.episodes) {
      context.searchEpisodes(data?.data.episodes.results);
    } else {
      context.searchEpisodes('');
    }
  }, [context, data, value]);

  const onChange = (event) => {
    let search = event.target.value;
    if (event.target.value) {
      setSearch({ search });
    } else {
      setSearch({});
    }
  };
  const handleDebounce = (event) => {
    onChange(event);
    db(event.target.value);
    console.log(event.target.value);
  };
  const handleActiveInputWrapper = () => {
    setActive((prev) => !prev);
  };
  return (
    <InputWrapper>
      <Label>
        <AiOutlineSearch
          size='25px'
          color='black'
          onClick={handleActiveInputWrapper}
        />
        <Input
          placeholder='search episode'
          value={val}
          onChange={handleDebounce}
          ref={inputRef}
        />
        {active && (
          <AiOutlineClose
            size='20px'
            color='black'
            onClick={() => setActive(false)}
          />
        )}
      </Label>
    </InputWrapper>
  );
};

export default Search;
