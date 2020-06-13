//Components/cSearchBar.js
import React from 'react';
import { SearchBar } from 'react-native-elements';

class cSearchBar extends React.Component
{
  state =
  {
    search: '',
  };

  updateSearch = search =>
  {
      this.setState({ search });
  };

  render()
  {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default cSearchBar
