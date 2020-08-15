import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import globalStyles from './styles/globalStyles';

const Documents = () => {
  const rootUrl = 'http://www.tachelhit.info/';
  const awaliwassArabic = `${rootUrl}pdf/awaliwass-ar.pdf`;
  const awaliwassLatin = `${rootUrl}pdf/awaliwass-lat.pdf`;
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

export default Documents;
