import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export default StyleSheet.create({
  title: {
    fontSize: 27,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 170,
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
    fontSize: 13,
    color: colors.gold,
    fontWeight: 'bold',
  },
  videoButtonLabel: {
    fontSize: 13,
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
