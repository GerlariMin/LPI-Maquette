//Components/cHeader.js
import React from 'react';
/*
  react-native-elements:
  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*/
import { Header, Icon } from 'react-native-elements';
import AvatarCustom from './cAvatar';

/*
  HEADER:
  https://react-native-elements.github.io/react-native-elements/docs/header.html#backgroundcolor
*/
//class cHeader extends React.Component
export default function cHeader({navigation})
{

  const goTo = () => navigation.navigate("Connexion");
  const test = () => navigation.navigate("DrawerOpen");
  
  /*constructor(props)
  { 
    super(props);
    this.state = 
    { 
      page: 'home', 
    }; 
  } */
  
  //render()
  //{
    return(

      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'BARBERLIFE', style: { color: '#fff', fontWeight: 'bold' } }}
        rightComponent={<AvatarCustom onPress={goTo}/>}//{{icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: 'black',
          justifyContent: 'space-around',
        }}
      />
      
    )
  //}
}

//export default cHeader
