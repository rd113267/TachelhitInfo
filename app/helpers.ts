import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import {request, PERMISSIONS} from 'react-native-permissions';
import {Platform, Alert, Linking} from 'react-native';

export const downloadLink = async (
  link: string,
  filename: string,
  pdf?: boolean,
) => {
  const fileType = pdf ? '.pdf' : '.mp3';
  try {
    if (Platform.OS === 'ios') {
      await Share.open({
        url: link,
        saveToFiles: true,
        failOnCancel: false,
        filename: `${filename}${fileType}`,
      });
    } else {
      await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      await RNFetchBlob.config({
        addAndroidDownloads: {
          notification: true,
          useDownloadManager: true,
          path: `${RNFetchBlob.fs.dirs.DownloadDir}/${filename}${fileType}`,
        },
      }).fetch('GET', link);
    }
  } catch (e) {
    if (Platform.OS === 'ios') {
      Linking.openURL(link);
    } else {
      Alert.alert('Error', e.message);
    }
  }
};
