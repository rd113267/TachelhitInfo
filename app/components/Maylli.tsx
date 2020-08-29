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
          color={colors.white}
          size="large"
        />
      )}
      <WebView
        style={{
          backgroundColor: 'transparent',
          height: 50,
        }}
        onLoadEnd={() => setLoading(false)}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback
        allowsFullscreenVideo
        javaScriptEnabled
        scrollEnabled={false}
        originWhitelist={['*']}
        source={{uri: MAYLLI_URI}}
        // source={{
        //   html:
        //     `<iframe width='560' height='315' src='${MAYLLI_URI}' frameborder='0' allow='autoplay;' allowfullscreen></iframe>`,
        // }}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
      />
    </ImageBackground>
  );
};

export default Maylli;
