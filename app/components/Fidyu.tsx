import React from 'react';
import {ImageBackground} from 'react-native';
import WebView from 'react-native-webview';
import {JESUS_FILM_URI} from '../constants';

const Fidyu = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../images/background.png')}
      style={{flex: 1}}>
      <WebView
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          marginTop: '50%',
        }}
        allowsFullscreenVideo
        javaScriptEnabled
        originWhitelist={['*']}
        source={{uri: JESUS_FILM_URI}}
      />
    </ImageBackground>
  );
};

export default Fidyu;