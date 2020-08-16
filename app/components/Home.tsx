import React, {useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/Home';
import {Title, Button} from 'react-native-paper';
import Audio from './commons/Audio';
import {ROOT_URL} from '../constants';
import SiteLink from './commons/SiteLink';

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [loading1, setLoading1] = useState(false);
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <View style={globalStyles.overlay} />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
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
        <View style={{margin: 20}}>
          <SiteLink
            title="amuddu n-umsiggel"
            link="www.amsiggel.com"
            image={require('../images/amsiggelfrontpage.jpg')}
            style={{marginBottom: 20}}
          />
          <Button
            style={{marginBottom: 20}}
            icon={playing ? 'pause' : 'play'}
            loading={loading}
            onPress={() => setPlaying(!playing)}
            uppercase={false}
            mode="contained">
            amuslem
          </Button>
          <Audio
            paused={!playing}
            uri={`${ROOT_URL}mp3-testimonies/ma tssent.mp3`}
            onBuffer={({isBuffering}) => setLoading(isBuffering)}
          />
          <Button
            style={{marginBottom: 20}}
            icon={playing1 ? 'pause' : 'play'}
            loading={loading1}
            onPress={() => setPlaying1(!playing1)}
            uppercase={false}
            mode="contained">
            amasihi
          </Button>
          <Audio
            paused={!playing1}
            uri={`${ROOT_URL}mp3-testimonies/ssa n-thuna.mp3`}
            onBuffer={({isBuffering}) => setLoading1(isBuffering)}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
