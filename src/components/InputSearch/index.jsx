import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, SearchButton, ClearButton } from './styles';

const Search = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState();

  const handleClearSearch = () => {
    setQuery('');
    onClear();
  };

  const handleSubmitSearch = () => {
    if (query) {
      onSearch(query);
    } else {
      onClear();
    }
  };

  return (
    <Container>
      <SearchButton onClick={handleSubmitSearch} />
      <Input
        defaultValue={query}
        placeholder="Search for a movie..."
        onChange={(el) => setQuery(el.target.value)}
        onKeyDown={(el) => el.key === 'Enter' && handleSubmitSearch()}
      />
      {!!query && <ClearButton onClick={handleClearSearch} />}
    </Container>
  );
};

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
