import React, { useState } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {ROOT_URL} from '../constants';
import Audio from './commons/Audio';

const Documents = () => {
  const awaliwassArabic = `${ROOT_URL}pdf/awaliwass-ar.pdf`;
  const awaliwassLatin = `${ROOT_URL}pdf/awaliwass-lat.pdf`;
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <View style={globalStyles.overlay} />
      <View>
        
      </View>
    </ImageBackground>
  );
};

export default Documents;
