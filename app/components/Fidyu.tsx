import React, {useState, useRef} from 'react';
import {ImageBackground, Dimensions, View} from 'react-native';
import WebView from 'react-native-webview';
import {JESUS_FILM_URI, colors} from '../constants';
import {ActivityIndicator} from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const {width, height} = Dimensions.get('screen');
const Fidyu = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<WebView>(null);

  return (
    <WebView
      automaticallyAdjustContentInsets
      ref={ref}
      onLoadEnd={() => {
        setLoading(false);
        ref.current?.injectJavaScript(`
            const video = document.getElementById("video_0_html5_api");
            video.play();
          `);
      }}
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      allowsFullscreenVideo
      scrollEnabled={false}
      javaScriptEnabled
      originWhitelist={['*']}
      source={{uri: JESUS_FILM_URI}}
      userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
    />
  );
};

export default Fidyu;
