import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import globalStyles from './styles/globalStyles';

const Video = () => {
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('./images/background.png')}>
      <View style={globalStyles.overlay} />
      <View>
        <Text />
      </View>
    </ImageBackground>
  );
};

export default Video;
