import React from 'react';
import {ImageBackground} from 'react-native';
import WebView from 'react-native-webview';
import {MAYLLI_URI} from '../constants';

const Maylli = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../images/background.png')}
      style={{flex: 1}}>
      <WebView
        style={{
          backgroundColor: 'transparent',
          height: 50
        }}
        allowsFullscreenVideo
        javaScriptEnabled
        originWhitelist={['*']}
        source={{uri: MAYLLI_URI}}
      />
    </ImageBackground>
  );
};

export default Maylli;
