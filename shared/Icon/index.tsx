import React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { SVG_ICONS } from '../../assets/icons/svg';
import { SvgEnum } from '../../assets/icons/types';

export type ICustomSvgProps = {
  icon: SvgEnum;
  opacity?: number;
  onPress?: (evt: any) => void;
  style?: ViewStyle;
  isStatusPressedForTest?: boolean;
  disabled?: boolean;
  customColor?: string;
} & SvgProps;

const Icon = ({
  opacity = 0.5,
  icon,
  width = 20,
  height = 20,
  fill = 'red',
  onPress,
  style,
  isStatusPressedForTest,
  disabled,
  ...otherProps
}: ICustomSvgProps) => {
  const svgScaledWidth = Number(width);
  const svgScaledHeight = Number(height);

  const renderItem = () => {
    return SVG_ICONS[icon] ? (
      SVG_ICONS[icon]({
        width: Number(width),
        height: Number(height),
        fill,
        color: 'red',
        ...otherProps,
      })
    ) : (
      <View
        style={{
          width: Number(width),
          height: Number(height),
          backgroundColor: 'red',
        }}
      />
    );
  };

  return onPress ? (
    <Pressable
      disabled={disabled}
      testOnly_pressed={isStatusPressedForTest}
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? opacity : 1 },
        { width: svgScaledWidth, height: svgScaledHeight },
        style,
      ]}>
      {renderItem()}
    </Pressable>
  ) : (
    <View style={[{ width: svgScaledWidth, height: svgScaledHeight }, style]}>
      {renderItem()}
    </View>
  );
};

export default Icon;
