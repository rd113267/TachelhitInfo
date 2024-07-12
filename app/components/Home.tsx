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
  FlatList,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/Home';
import {
  Button,
  ActivityIndicator,
  Modal,
  List,
  Divider,
} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import Audio from './commons/Audio';
import {
  ROOT_URL,
  JESUS_FILM_URI,
  colors,
  GODS_STORY,
  oldTestament,
  AZUZD,
  MATSSENT,
  ISEQSITN,
  NTHUNA,
  AMSIGGEL_URL,
} from '../constants';
import {openWhatsApp, downloadLink, openAwalIwass} from '../helpers';
import Video from 'react-native-video';
import HomeProps from '../types/Home';
import Orientation from 'react-native-orientation-locker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const [godsStoryPaused, setGodsStoryPaused] = useState(true);
  const [showAmsiggel, setShowAmsiggel] = useState(false);
  const [showJesus, setShowJesus] = useState(false);
  const [showGodsStory, setShowGodsStory] = useState(false);

  const videoRef = useRef<Video>(null);
  const videoRefJesus = useRef<Video>(null);
  const videoRefGodsStory = useRef<Video>(null);

  const [downloadingArabic, setDownloadingArabic] = useState(false);
  const [downloadingLatin, setDownloadingLatin] = useState(false);
  const [downloadingOT, setDownloadingOT] = useState(false);
  const [downloadingNT, setDownloadingNT] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [book, setBook] = useState<number>();
  const [chapter, setChapter] = useState<number>();
  const [playingBible, setPlayingBible] = useState(false);
  const [bibleBuffering, setBibleBuffering] = useState(false);

  const awaliwassArabic = `${ROOT_URL}assets/pdfs/awal-i-wass-abc.pdf`;
  const awaliwassLatin = `${ROOT_URL}assets/pdfs/awal-i-wass-lat.pdf`;
  const latinOT = `${ROOT_URL}assets/pdfs/ot_lat.pdf`;
  const latinNT = `${ROOT_URL}assets/pdfs/nt_lat.pdf`;
  const bibleURL = `https://raw.githubusercontent.com/moulie415/WordOfGodForEachDay/master/files/bible/${book}/${chapter}.mp3`;
  const [expandedBooks, setExpandedBooks] = useState<{[book: number]: boolean}>(
    {},
  );
  const booksList = useRef<FlatList>(null);

  useEffect(() => {
    if (showAmsiggel || showJesus || showGodsStory) {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
    } else {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    }
  }, [showAmsiggel, showJesus, showGodsStory]);

  useEffect(() => {
    if (Platform.OS === 'android' && !Orientation.isLocked()) {
      Orientation.lockToPortrait();
    }
  }, []);

  if (showAmsiggel && Platform.OS === 'android') {
    return (
      <VideoPlayer
        source={{uri: AMSIGGEL_URL}}
        disableVolume
        disableFullscreen
        paused={paused}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
        onLoad={() => setPaused(false)}
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
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
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
        onBack={() => {
          setShowJesus(false);
          setJesusPaused(true);
        }}
      />
    );
  }
  if (showGodsStory && Platform.OS === 'android') {
    return (
      <VideoPlayer
        source={{uri: GODS_STORY}}
        disableVolume
        disableFullscreen
        paused={godsStoryPaused}
        onPause={() => setGodsStoryPaused(true)}
        onPlay={() => setGodsStoryPaused(false)}
        onLoad={() => setGodsStoryPaused(false)}
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
        onBack={() => {
          setShowGodsStory(false);
          setGodsStoryPaused(true);
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
        <ScrollView contentContainerStyle={{paddingBottom: 60}}>
          <Text
            style={[
              globalStyles.tifinaghe,
              styles.title,
              {alignSelf: 'center', fontSize: 44, marginTop: 10},
            ]}>
            taclHit infu
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.title}>tachelhit info</Text>
            <Text
              style={[
                styles.title,
                globalStyles.arabicBold,
                styles.arabicTitle,
                {color: colors.white},
              ]}>
              تاشلحيت ءينفو
            </Text>
          </View>

          <View style={{marginBottom: 10, flex: 1}}>
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
                uri={MATSSENT}
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
                uri={ISEQSITN}
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
                uri={NTHUNA}
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
                uri={AZUZD}
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
                  marginTop: 10,
                },
              ]}>
              arratn n-sidi rbbi
            </Text>

            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="headphones"
                onPress={() => setModalVisible(true)}
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
                loading={downloadingOT}
                onPress={async () => {
                  setDownloadingOT(true);
                  await downloadLink(latinOT, 'laahd aqdim', true);
                  setDownloadingOT(false);
                }}
                uppercase={false}
                mode="contained">
                laahd aqdim
              </Button>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingNT}
                onPress={async () => {
                  setDownloadingNT(true);
                  await downloadLink(latinNT, 'laahd l-ljdid', true);
                  setDownloadingNT(false);
                }}
                uppercase={false}
                mode="contained">
                laahd l-ljdid
              </Button>
            </View>
            <Button
              onPress={openAwalIwass}
              icon={Platform.OS === 'ios' ? 'apple' : 'google-play'}
              style={{marginHorizontal: 17, marginBottom: 10}}
              uppercase={false}
              labelStyle={styles.buttonLabel}
              mode="contained">
              sflid i-wawal n-rbbi kraygatt ass
            </Button>
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
              <TouchableOpacity
                onPress={async () => {
                  setDownloadingArabic(true);
                  await downloadLink(awaliwassArabic, 'awaliwass-ar', true);
                  setDownloadingArabic(false);
                }}
                style={styles.arabicButton}>
                {downloadingArabic ? (
                  <ActivityIndicator
                    color="#000"
                    animating
                    size={15}
                    style={{marginRight: 5}}
                  />
                ) : (
                  <Icon size={15} style={{marginRight: 5}} name="download" />
                )}
                <Text style={[{fontSize: 28}, globalStyles.arabic]}>
                  اوال ءي-واسّ
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={[
                styles.title,
                {alignSelf: 'center', color: colors.white, marginTop: 13},
              ]}>
              videos
            </Text>

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
              <Video
                source={{uri: JESUS_FILM_URI}}
                ref={videoRefJesus}
                paused={jesusPaused}
                onFullscreenPlayerDidPresent={() => setJesusPaused(false)}
                onFullscreenPlayerDidDismiss={() => setJesusPaused(true)}
              />
              <Button
                style={styles.button}
                labelStyle={styles.videoButtonLabel}
                icon="video"
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    videoRefGodsStory.current?.presentFullscreenPlayer();
                  } else {
                    setShowGodsStory(true);
                  }
                }}
                uppercase={false}
                mode="contained">
                maylli iqsad rbbi
              </Button>
              <Video
                source={{uri: GODS_STORY}}
                ref={videoRefGodsStory}
                paused={godsStoryPaused}
                onFullscreenPlayerDidPresent={() => setGodsStoryPaused(false)}
                onFullscreenPlayerDidDismiss={() => setGodsStoryPaused(true)}
              />
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

            <Video
              source={{uri: AMSIGGEL_URL}}
              ref={videoRef}
              paused={paused}
              onFullscreenPlayerDidPresent={() => setPaused(false)}
              onFullscreenPlayerDidDismiss={() => setPaused(true)}
            />
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
      <Modal
        visible={modalVisible}
        onDismiss={() => {
          setModalVisible(false);
          setPlayingBible(false);
        }}
        contentContainerStyle={styles.modal}>
        <FlatList
          data={Object.keys(oldTestament)}
          ItemSeparatorComponent={() => <Divider />}
          keyExtractor={item => item}
          ref={booksList}
          renderItem={({item, index: bookIndex}) => {
            return (
              <List.Accordion
                style={{
                  backgroundColor: colors.cream,
                }}
                titleStyle={styles.book}
                expanded={expandedBooks[Number(item)]}
                onPress={() => {
                  setExpandedBooks({
                    ...expandedBooks,
                    [Number(item)]: !expandedBooks[Number(item)],
                  });
                }}
                title={oldTestament[Number(item)].name}>
                <FlatList
                  ItemSeparatorComponent={() => <Divider />}
                  data={[...oldTestament[Number(item)].chapters, 'last']}
                  keyExtractor={item => item.toString()}
                  renderItem={({item: c, index}) => {
                    if (c === 'last') {
                      return (
                        <List.Item
                          style={{backgroundColor: colors.cream, padding: 0}}
                          title=""
                          right={props => <List.Icon icon="chevron-up" />}
                          onPress={() => {
                            setExpandedBooks({
                              ...expandedBooks,
                              [Number(item)]: !expandedBooks[Number(item)],
                            });
                            setTimeout(() => {
                              booksList.current?.scrollToIndex({
                                index: bookIndex,
                              });
                            }, 100);
                          }}
                        />
                      );
                    }
                    return (
                      <List.Item
                        style={{backgroundColor: colors.cream}}
                        right={props =>
                          bibleBuffering ? (
                            <ActivityIndicator size="small" />
                          ) : (
                            <List.Icon
                              {...props}
                              icon={
                                Number(item) === book &&
                                index + 1 === chapter &&
                                playingBible
                                  ? 'pause'
                                  : 'play'
                              }
                            />
                          )
                        }
                        title={c}
                        onPress={() => {
                          if (Number(item) === book && index + 1 === chapter) {
                            setPlayingBible(!playingBible);
                          } else {
                            setChapter(index + 1);
                            setBook(Number(item));
                            setPlayingBible(true);
                          }
                        }}
                      />
                    );
                  }}
                />
              </List.Accordion>
            );
          }}
        />
      </Modal>
      <Audio
        paused={!playingBible}
        uri={bibleURL}
        onBuffer={({isBuffering}) => setBibleBuffering(isBuffering)}
        onEnd={() => {
          if (
            chapter &&
            book &&
            oldTestament[book].chapters[chapter - 1] ===
              oldTestament[book].chapters.pop()
          ) {
            if (book === Number(Object.keys(oldTestament).pop())) {
              setBook(1);
              setChapter(1);
            } else if (book) {
              setBook(book + 1);
              setChapter(1);
            }
          } else if (chapter) {
            setChapter(chapter + 1);
          }
        }}
      />
    </ImageBackground>
  );
};

export default Home;
