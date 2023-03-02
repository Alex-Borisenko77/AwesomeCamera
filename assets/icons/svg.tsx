import React from 'react';
import { SvgProps } from 'react-native-svg';
import CHECK_SIGN from './check_sign.svg';
import ARROW_LEFT from './arrow_left.svg';
import { ICustomObject } from '../../types';

export const SVG_ICONS: ICustomObject = {
  CHECK_SIGN: (props: SvgProps) => <CHECK_SIGN {...props} />,
  ARROW_LEFT: (props: SvgProps) => <ARROW_LEFT {...props} />,
};
