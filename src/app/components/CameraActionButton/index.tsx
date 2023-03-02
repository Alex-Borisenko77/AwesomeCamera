import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SvgEnum } from '../../../../assets/icons/types';
import { Icon } from '../../../../shared';
interface CameraActionButtonProps {
  caption?: string;
  onPress: () => void;
  icon?: SvgEnum;
  iconColor?: string;
}
import styles from './styles';

const CameraActionButton: FC<CameraActionButtonProps> = ({
  caption = '',
  icon,
  iconColor = 'red',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Icon style={styles.icon} icon={icon} color={iconColor} />}
      <Text style={styles.caption}>{caption}</Text>
    </TouchableOpacity>
  );
};

export default CameraActionButton;
