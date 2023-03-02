import { Image, View } from 'react-native';
import React from 'react';
import { CameraActionButton } from '../../components';

import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CAMERA_SCR } from '../../../navigation/routes';
import { SvgEnum } from '../../../../assets/icons/types';

const Result = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const onAccept = () => {};

  const onRetake = () => {
    navigation.navigate(CAMERA_SCR);
  };

  return (
    <View style={styles.screen}>
      <Image source={{ uri: routes.params.uri }} style={styles.preview} />
      <View style={styles.controls}>
        <CameraActionButton
          caption={'Retake'}
          onPress={onRetake}
          icon={SvgEnum.ARROW_LEFT}
          iconColor="#DC6464"
        />
        <CameraActionButton
          caption={'Use Photo'}
          onPress={onAccept}
          icon={SvgEnum.CHECK_SIGN}
          iconColor="#41CC78"
        />
      </View>
    </View>
  );
};

export default Result;
