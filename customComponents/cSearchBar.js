//Components/cSearchBar.js
import React from 'react';
import { SearchBar } from 'react-native-elements';

class cSearchBar extends React.Component
{

  constructor(props)
  {
    super(props);
  }
  state =
  {
    search: '',
  };

  updateSearch = search =>
  {
      this.setState({ search });
  };

  /*goTo(search)
  {
    console.log("text: "+ search);
    if(search == "Profils")
    {
      this.props.navigation.navigate("Profils");
    }
  }*/

  render()
  {
    const { search } = this.state;

    return (
      <SearchBar
        searchIcon={true}
        clearIcon={true}
        cancelIcon={true}
        showCancel={true}
        placeholder="Rechercher..."
        onChangeText={this.updateSearch}
        value={search}
        //onKeyPress={() => this.goTo(search)}
      />
    );
  }
}

export default cSearchBar
