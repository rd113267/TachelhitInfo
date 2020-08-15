import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';
import globalStyles from './styles/globalStyles';
import styles from './styles/Home';
import {Title} from 'react-native-paper';

const Home = () => {
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('./images/background.png')}>
      <View style={globalStyles.overlay} />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20
          }}>
          <Title style={styles.title}>tachelhit info</Title>

          <Text style={[globalStyles.tifinaghe, styles.title]}>
            taclHit infu
          </Text>
        </View>
        <Text
          style={[
            globalStyles.arabic,
            {
              fontSize: 40,
              //marginTop: Platform.OS === 'ios' ? -10 : -5,
              fontWeight: 'bold',
              color: '#fff',
              alignSelf: 'center',
            },
          ]}>
          تاشلحيت ءينفو
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
