import React from 'react';
import {BackButton, Name} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import { WebView } from 'react-native-webview';

export default function ModalLink({link, title, closeModal}) {
 return (
    <>
      <BackButton onPress={closeModal} >
          <Icon name="x" size={35} color="#FFF" />
          <Name numberOfLines={1} >{title}</Name>
      </BackButton>

      <WebView source={{ uri: link }} />
    </>
  );
}