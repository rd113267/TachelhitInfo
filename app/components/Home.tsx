import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Linking,
  Platform,
  Alert,
} from 'react-native';
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
      <SafeAreaView>
        <Text
          style={[
            globalStyles.tifinaghe,
            styles.title,
            {alignSelf: 'center', marginTop: 20},
          ]}>
          taclHit infu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <Title style={styles.title}>tachelhit info</Title>
          <Text style={[globalStyles.arabicBold, styles.arabicTitle]}>
            تاشلحيت ءينفو
          </Text>
        </View>

        <View style={{marginVertical: 20}}>
          <View style={styles.buttonRow}>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing ? 'pause' : 'play'}
              loading={loading}
              onPress={() => setPlaying(!playing)}
              uppercase={false}
              mode="contained">
              amuslem?
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="open-in-new"
              onPress={() => 0}
              uppercase={false}
              mode="contained">
              iseqsitn?
            </Button>
            <Audio
              paused={!playing}
              uri={`${ROOT_URL}mp3-testimonies/ma tssent.mp3`}
              onBuffer={({isBuffering}) => setLoading(isBuffering)}
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing1 ? 'pause' : 'play'}
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              amasihi?
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing1 ? 'pause' : 'play'}
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              laman ula sslamt?
            </Button>
            <Audio
              paused={!playing1}
              uri={`${ROOT_URL}mp3-testimonies/ssa n-thuna.mp3`}
              onBuffer={({isBuffering}) => setLoading1(isBuffering)}
            />
          </View>
          <Title
            style={[
              styles.title,
              {color: '#fff', alignSelf: 'center', marginBottom: 20},
            ]}>
            arattn n-sidi ribbi
          </Title>
          <View style={styles.buttonRow}>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing1 ? 'pause' : 'play'}
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              laahd aqdim
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing1 ? 'pause' : 'play'}
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              laahd l-ljdid
            </Button>
            <Audio
              paused={!playing1}
              uri={`${ROOT_URL}mp3-testimonies/ssa n-thuna.mp3`}
              onBuffer={({isBuffering}) => setLoading1(isBuffering)}
            />
          </View>
          <Title
            style={[
              styles.title,
              {color: '#fff', alignSelf: 'center', marginBottom: 20},
            ]}>
            videos
          </Title>
          <View style={styles.buttonRow}>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="video"
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              amuddu n-umsiggel
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="video"
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              maylli iqsad rbbi
            </Button>
            <Audio
              paused={!playing1}
              uri={`${ROOT_URL}mp3-testimonies/ssa n-thuna.mp3`}
              onBuffer={({isBuffering}) => setLoading1(isBuffering)}
            />
          </View>
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            icon="video"
            loading={loading1}
            onPress={() => setPlaying1(!playing1)}
            uppercase={false}
            mode="contained">
            tudert l-lmasih
          </Button>
          <Button
            uppercase={false}
            loading={loading}
            icon="whatsapp"
            labelStyle={styles.buttonLabel}
            style={styles.whatsAppButton}
            onPress={openWhatsApp}
            mode="contained">
            sawl-agh-d s-watsapp
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
