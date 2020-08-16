import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ImageURISource,
  ScrollView,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import SiteLink from './commons/SiteLink';

const Izdayn = () => {
  const links: {link: string; image?: ImageURISource}[] = [
    {link: 'www.tarifit.info', image: require('../images/tarifitinfosite.jpg')},
    {link: 'www.tachelhit.info', image: require('../images/tachelhitinfo.jpg')},
    {link: 'www.tamazight.info', image: require('../images/tamazightinfo.jpg')},
    {link: 'www.abridnarrif.net', image: require('../images/abridnarif.jpg')},
    {link: 'www.tamusni.org', image: require('../images/tamusni.jpg')},
    {link: 'www.tanasfarwat.org', image: require('../images/tanasfarwat.jpg')},
    {link: 'www.asdika.org', image: require('../images/asdikaorg.jpg')},
    {link: 'www.injilchaoui.com', image: require('../images/injilchaoui.jpg')},
    {link: 'www.amsiggel.com', image: require('../images/amsiggelsite.jpg')},
    {link: 'www.cna-sat.org', image: require('../images/cna.jpg')},
    {
      link: 'www.kalimatalhayat.com',
      image: require('../images/kalimatalhayat2.jpg'),
    },
    {link: 'www.biblos.com'},
    {link: 'www.westafricanscripts.com'},
  ];
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <View style={globalStyles.overlay} />
      <FlatList
        persistentScrollbar
        indicatorStyle="white"
        data={links}
        keyExtractor={(item) => item.link}
        renderItem={({item: {link, image}}) => {
          return (
            <SiteLink style={{marginVertical: 10}} link={link} image={image} />
          );
        }}
      />
    </ImageBackground>
  );
};

export default Izdayn;
