import React, {useState} from 'react';
import {
  View,
  Platform,
  ImageBackground,
  SafeAreaView,
  Alert,
  Linking,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Button} from 'react-native-paper';

const WhatsApp = () => {
  const [loading, setLoading] = useState(false);
  const PHONE_NUMBER = '+212642596841';
  const openWhatsApp = async () => {
    setLoading(true);
    try {
      await Linking.openURL(`whatsapp://send?phone=${PHONE_NUMBER}`);
      setLoading(false);
    } catch (e) {
      try {
        if (Platform.OS === 'ios') {
          await Linking.openURL(
            'itms-apps://apps.apple.com/gb/app/whatsapp-messenger/id310633997',
          );
        } else {
          await Linking.openURL(
            'https://play.google.com/store/apps/details?id=com.whatsapp',
          );
        }
        setLoading(false);
      } catch (error) {
        Alert.alert('Error', error.message);
        setLoading(false);
      }
    }
  };
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <View style={globalStyles.overlay} />
      <SafeAreaView style={{flex: 1, justifyContent: 'center', margin: 20}}>
        <Button
          uppercase={false}
          loading={loading}
          icon="whatsapp"
          labelStyle={{fontSize: 20}}
          onPress={openWhatsApp}
          mode="contained">
          sawl-agh-d s-watsapp
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WhatsApp;
