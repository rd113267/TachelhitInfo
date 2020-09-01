import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export default StyleSheet.create({
  outline: {
    position: 'absolute',
  },
  title: {
    fontSize: 32,
    color: colors.white,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    elevation: 10,
  },
  textBackground: {
    //backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    minWidth: 180,
    alignSelf: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  whatsAppButton: {
    position: 'absolute',
    bottom: 10,
    width: 250,
    alignSelf: 'center',
  },
  arabicButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 3,
    minWidth: 180,
  },
  buttonLabel: {
    fontSize: 15,
    color: colors.black,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  videoButtonLabel: {
    fontSize: 15,
    color: colors.black,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  arabicTitle: {
    fontSize: 40,
    color: '#fff',
    marginTop: -7
  },
});
