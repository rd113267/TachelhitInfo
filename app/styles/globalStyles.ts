import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  arabic: {
    fontFamily: 'TraditionalArabic',
  },
  tifinaghe: {
    fontFamily: 'TamazightTifinaghe',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    backgroundColor: 'black',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
