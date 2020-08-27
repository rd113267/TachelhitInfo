import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export default StyleSheet.create({
  title: {
    fontSize: 27,
    color: colors.red,
  },
  red: {
    color: colors.red,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    width: 190,
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
    color: colors.gold,
    fontWeight: 'bold',
  },
  videoButtonLabel: {
    fontSize: 15,
    color: colors.gold,
    marginLeft: 7,
    fontWeight: 'bold',
  },
  arabicTitle: {
    fontSize: 37,
    color: '#fff',
    marginTop: -13,
  },
});
