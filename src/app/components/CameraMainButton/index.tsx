import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
interface CameraMainButtonProps {
  onPress: () => void;
}
import styles from './styles';

const CameraMainButton: FC<CameraMainButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
      <View style={styles.core} />
    </TouchableOpacity>
  );
};

export default CameraMainButton;
