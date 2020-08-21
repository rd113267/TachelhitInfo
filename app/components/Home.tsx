import React, {useState, useRef, useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Platform,
  Alert,
  StatusBar,
  Linking,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/Home';
import {Title, Button} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import Audio from './commons/Audio';
import {ROOT_URL, AMSIGGEL_ID} from '../constants';
import {openWhatsApp, getVideoDetails} from '../helpers';
import Video from 'react-native-video';
import {VideoDetails} from '../types';
import HomeProps from '../types/Home';

const Home: FunctionComponent<HomeProps> = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [paused, setPaused] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const [videoDetails, setVideoDetails] = useState<VideoDetails>();
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const videosDetails = await getVideoDetails(AMSIGGEL_ID);
      setVideoDetails(videosDetails);
      setLoading(false);
    };
    getDetails();
  }, []);

  useEffect(() => {
    if (fullscreen) {
      StatusBar.setHidden(true);
    } else {
      StatusBar.setHidden(false);
    }
  }, [fullscreen]);

  if (fullscreen && Platform.OS === 'android' && videoDetails) {
    return (
      <VideoPlayer
        source={{uri: videoDetails.videoUrl}}
        disableVolume
        disableFullscreen
        paused={paused}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
        onLoad={() => setPaused(false)}
        onError={(e: Error) => Alert.alert('Error', e.message)}
        onBack={() => {
          setFullscreen(false);
          setPaused(true);
        }}
      />
    );
  }
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
              amuslem
            </Button>
            <Audio
              paused={!playing}
              uri={`${ROOT_URL}mp3-testimonies/ma tssent.mp3`}
              onBuffer={({isBuffering}) => setLoading(isBuffering)}
            />
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing1 ? 'pause' : 'play'}
              loading={loading1}
              onPress={() => setPlaying1(!playing1)}
              uppercase={false}
              mode="contained">
              iseqsitn
            </Button>
            <Audio
              paused={!playing1}
              uri={`${ROOT_URL}Iseqsitn.mp3`}
              onBuffer={({isBuffering}) => setLoading1(isBuffering)}
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing2 ? 'pause' : 'play'}
              loading={loading2}
              onPress={() => setPlaying2(!playing2)}
              uppercase={false}
              mode="contained">
              amasihi
            </Button>
            <Audio
              paused={!playing2}
              uri={`${ROOT_URL}mp3-testimonies/ssa n-thuna.mp3`}
              onBuffer={({isBuffering}) => setLoading2(isBuffering)}
            />
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon={playing3 ? 'pause' : 'play'}
              loading={loading3}
              onPress={() => setPlaying3(!playing3)}
              uppercase={false}
              mode="contained">
              laman ula sslamt
            </Button>
            <Audio
              paused={!playing3}
              uri={`${ROOT_URL}azuzd_combined.mp3`}
              onBuffer={({isBuffering}) => setLoading3(isBuffering)}
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
              icon="open-in-new"
              onPress={() => Alert.alert('Coming soon')}
              uppercase={false}
              mode="contained">
              laahd aqdim
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="open-in-new"
              onPress={() =>
                Linking.openURL('https://www.faithcomesbyhearing.com')
              }
              uppercase={false}
              mode="contained">
              laahd l-ljdid
            </Button>
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
              onPress={() => {
                if (Platform.OS === 'ios') {
                  videoRef.current?.presentFullscreenPlayer();
                } else {
                  setFullscreen(true);
                }
              }}
              uppercase={false}
              mode="contained">
              amuddu n-umsiggel
            </Button>
            {videoDetails && (
              <Video
                source={{uri: videoDetails.videoUrl}}
                ref={videoRef}
                paused={paused}
                onFullscreenPlayerDidPresent={() => setPaused(false)}
                onFullscreenPlayerDidDismiss={() => setPaused(true)}
              />
            )}
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              icon="video"
              onPress={() => navigation.navigate('Maylli')}
              uppercase={false}
              mode="contained">
              maylli iqsad rbbi
            </Button>
          </View>
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            icon="video"
            onPress={() => navigation.navigate('Fidyu')}
            uppercase={false}
            mode="contained">
            tudert l-lmasih
          </Button>
          <Button
            uppercase={false}
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