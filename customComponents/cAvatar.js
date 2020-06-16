//Components/cAvatar.js
import React from 'react';
/*
  react-native-elements:
  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*/
import { Avatar } from 'react-native-elements';

/*
  AVATAR:
  https://react-native-elements.github.io/react-native-elements/docs/avatar.html
*/
export default function cAvatar()
{
  
    // Standard Avatar with accessory
    return(
      <Avatar
        rounded
        title="MM"
        overlayContainerStyle={{backgroundColor: 'brown'}}
        showAccessory
      />
    );
  }


//export default cHeader
