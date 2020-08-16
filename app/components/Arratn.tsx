import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Linking,
  Platform,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Title, Paragraph} from 'react-native-paper';
import {colors} from '../constants';
import {color} from 'react-native-reanimated';

const Arratn = () => {
  const [loading, setLoading] = useState(false);
  const openAwalIwass = async () => {
    try {
      setLoading(true);
      if (Platform.OS === 'ios') {
        await Linking.openURL(
          'itms-apps://apps.apple.com/gb/app/awal-i-wass/id1511054521',
        );
      } else {
        await Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.wordofgodforeachday',
        );
      }
      setLoading(false);
    } catch (e) {
      Alert.alert('Error', e.message);
      setLoading(false);
    }
  };
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <View style={globalStyles.overlay} />
      <Text />

      <Title style={{textAlign: 'center', color: '#fff'}}>awal i-wass</Title>
      <TouchableOpacity
        onPress={openAwalIwass}
        style={{
          marginVertical: 10,
        }}>
        <Image
          source={require('../images/awaliwass.png')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderRadius: 10,
            // borderWidth: 2,
            // borderColor: colors.button
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* <Paragraph style={{textAlign: 'center'}}>{getDescription()}</Paragraph> */}
    </ImageBackground>
  );
};

export default Arratn;
