import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import WebView from 'react-native-webview';
import {MAYLLI_URI, colors} from '../constants';
import {ActivityIndicator} from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const Maylli = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../images/background.png')}
      style={{flex: 1}}>
      {loading && (
        <ActivityIndicator
          style={globalStyles.loading}
          color={colors.gold}
          size="large"
        />
      )}
      <WebView
        style={{
          backgroundColor: 'transparent',
          height: 50,
        }}
        onLoadEnd={() => setLoading(false)}
        allowsFullscreenVideo
        javaScriptEnabled
        originWhitelist={['*']}
        source={{uri: MAYLLI_URI}}
      />
    </ImageBackground>
  );
};

export default Maylli;
