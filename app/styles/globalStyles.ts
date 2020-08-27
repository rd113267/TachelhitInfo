import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  arabic: {
    //fontFamily: 'TraditionalArabic',
    fontFamily: 'ScheherazadeOTM2A-Regular',
  },
  arabicBold: {
    //fontFamily: 'TraditionalArabic-Bold',
    fontFamily: 'ScheherazadeOTM2A-Regular',
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
    opacity: 0,
    backgroundColor: 'black',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
