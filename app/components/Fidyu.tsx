import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import WebView from 'react-native-webview';
import {JESUS_FILM_URI, colors} from '../constants';
import {ActivityIndicator} from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const Fidyu = () => {
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
          flex: 1,
          backgroundColor: 'transparent',
          marginTop: '50%',
        }}
        onLoadEnd={() => setLoading(false)}
        allowsFullscreenVideo
        javaScriptEnabled
        originWhitelist={['*']}
        source={{uri: JESUS_FILM_URI}}
      />
    </ImageBackground>
  );
};

export default Fidyu;
