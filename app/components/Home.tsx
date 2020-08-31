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
  ScrollView,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/Home';
import {Button} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import Audio from './commons/Audio';
import {ROOT_URL, AMSIGGEL_ID, JESUS_FILM_URI, colors} from '../constants';
import {
  openWhatsApp,
  getVideoDetails,
  downloadLink,
  openAwalIwass,
} from '../helpers';
import Video from 'react-native-video';
import {VideoDetails} from '../types';
import HomeProps from '../types/Home';
import Orientation from 'react-native-orientation-locker';

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
  const [jesusPaused, setJesusPaused] = useState(true);
  const [showAmsiggel, setShowAmsiggel] = useState(false);
  const [showJesus, setShowJesus] = useState(false);

  const [videoDetails, setVideoDetails] = useState<VideoDetails>();
  const videoRef = useRef<Video>(null);
  const videoRefJesus = useRef<Video>(null);

  const [downloadingArabic, setDownloadingArabic] = useState(false);
  const [downloadingLatin, setDownloadingLatin] = useState(false);

  const awaliwassArabic = `${ROOT_URL}pdf/awaliwass-ar.pdf`;
  const awaliwassLatin = `${ROOT_URL}pdf/awaliwass-lat.pdf`;

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
    if (showAmsiggel || showJesus) {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
    } else {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    }
  }, [showAmsiggel, showJesus]);

  useEffect(() => {
    if (Platform.OS === 'android' && !Orientation.isLocked()) {
      Orientation.lockToPortrait();
    }
  }, []);

  if (showAmsiggel && Platform.OS === 'android' && videoDetails) {
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
          setShowAmsiggel(false);
          setPaused(true);
        }}
      />
    );
  }
  if (showJesus && Platform.OS === 'android') {
    return (
      <VideoPlayer
        source={{uri: JESUS_FILM_URI}}
        disableVolume
        disableFullscreen
        paused={jesusPaused}
        onPause={() => setJesusPaused(true)}
        onPlay={() => setJesusPaused(false)}
        onLoad={() => setJesusPaused(false)}
        onError={(e: Error) => Alert.alert('Error', e.message)}
        onBack={() => {
          setShowJesus(false);
          setJesusPaused(true);
        }}
      />
    );
  }
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <SafeAreaView>
        <ScrollView>
          <Text
            style={[
              globalStyles.tifinaghe,
              styles.title,
              {alignSelf: 'center', fontSize: 45},
            ]}>
            taclHit infu
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <Text style={styles.title}>tachelhit info</Text>
            <Text
              style={[
                styles.title,
                globalStyles.arabic,
                styles.arabicTitle,
                {color: colors.white},
              ]}>
              تاشلحيت ءينفو
            </Text>
          </View>

          <View style={{marginVertical: 10, flex: 1}}>
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
            <Text
              style={[
                styles.title,
                {
                  alignSelf: 'center',
                  color: colors.white,
                  marginBottom: 10,
                  marginTop: 20,
                },
              ]}>
              arratn n-sidi rbbi
            </Text>

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
                  Linking.openURL('https://live.bible.is/bible/SHIRBD/MRK/1')
                }
                uppercase={false}
                mode="contained">
                laahd l-ljdid
              </Button>
            </View>
            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingLatin}
                onPress={async () => {
                  setDownloadingLatin(true);
                  await downloadLink(awaliwassLatin, 'awaliwass-lat', true);
                  setDownloadingLatin(false);
                }}
                uppercase={false}
                mode="contained">
                awal i-wass
              </Button>
              <Button
                style={styles.button}
                labelStyle={[
                  styles.buttonLabel,
                  globalStyles.arabic,
                  {fontSize: 22, marginVertical: 4},
                ]}
                icon="download"
                loading={downloadingArabic}
                onPress={async () => {
                  setDownloadingArabic(true);
                  await downloadLink(awaliwassArabic, 'awaliwass-ar', true);
                  setDownloadingArabic(false);
                }}
                uppercase={false}
                mode="contained">
                اوال ءي‑واسّ
              </Button>
            </View>
            <Button
              onPress={openAwalIwass}
              icon={Platform.OS === 'ios' ? 'apple' : 'google-play'}
              style={{marginHorizontal: 15, marginBottom: 10}}
              uppercase={false}
              labelStyle={styles.buttonLabel}
              mode="contained">
              sflid i-wawal n-rbbi kraygatt ass
            </Button>
            <View style={[styles.textBackground, {marginBottom: 10}]}>
              <Text
                style={[
                  styles.title,
                  {alignSelf: 'center', color: colors.white, marginTop: 20},
                ]}>
                videos
              </Text>
            </View>
            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.videoButtonLabel}
                icon="video"
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    videoRefJesus.current?.presentFullscreenPlayer();
                  } else {
                    setShowJesus(true);
                  }
                }}
                uppercase={false}
                mode="contained">
                tudert l-lmasih
              </Button>
              {showJesus && (
                <Video
                  source={{uri: JESUS_FILM_URI}}
                  ref={videoRefJesus}
                  paused={jesusPaused}
                  onFullscreenPlayerDidPresent={() => setJesusPaused(false)}
                  onFullscreenPlayerDidDismiss={() => setJesusPaused(true)}
                />
              )}
              <Button
                style={styles.button}
                labelStyle={styles.videoButtonLabel}
                icon="video"
                onPress={() => navigation.navigate('Maylli')}
                uppercase={false}
                mode="contained">
                maylli iqsad rbbi
              </Button>
            </View>
            <Button
              style={styles.button}
              labelStyle={styles.videoButtonLabel}
              icon="video"
              onPress={() => {
                if (Platform.OS === 'ios') {
                  videoRef.current?.presentFullscreenPlayer();
                } else {
                  setShowAmsiggel(true);
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
          </View>
        </ScrollView>
      </SafeAreaView>
      <Button
        uppercase={false}
        icon="whatsapp"
        labelStyle={styles.buttonLabel}
        style={styles.whatsAppButton}
        onPress={openWhatsApp}
        mode="contained">
        sawl-agh-d s-watsapp
      </Button>
    </ImageBackground>
  );
};

export default Home;
