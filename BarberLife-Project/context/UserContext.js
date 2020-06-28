import React from 'react';
import { exp } from 'react-native-reanimated';

export default  React.createContext(
    {
        idUser: "",
        updateUser: (id) =>{}
    }
)