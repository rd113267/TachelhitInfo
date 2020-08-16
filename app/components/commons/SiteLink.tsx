import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Image, Linking} from 'react-native';
import SiteLinkProps from '../../types/SiteLink';
import {Title} from 'react-native-paper';

const SiteLink: FunctionComponent<SiteLinkProps> = ({
  link,
  image,
  style,
  title,
}) => {
  return (
    <TouchableOpacity
      style={[{alignItems: 'center'}, style]}
      onPress={() => Linking.openURL(`https://${link}`)}>
      <Title style={{color: '#fff'}}>{title || link}</Title>
      {image && <Image source={image} />}
    </TouchableOpacity>
  );
};

export default SiteLink;
