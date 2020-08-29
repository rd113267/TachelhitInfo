import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export default StyleSheet.create({
  title: {
    fontSize: 27,
    color: colors.white,
  },
  textBackground: {
    backgroundColor: 'rgba(0,0,0,0.6)',
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
    width: 250,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonLabel: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 7,
  },
  videoButtonLabel: {
    fontSize: 15,
    color: colors.black,
    marginHorizontal: 10,
    marginVertical: 7,
    fontWeight: 'bold',
  },
  arabicTitle: {
    fontSize: 37,
    color: '#fff',
  },
});
