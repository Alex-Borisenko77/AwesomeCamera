import React, { SyntheticEvent } from 'react';
import {
  findNodeHandle,
  requireNativeComponent,
  UIManager,
  View,
  ViewProps,
} from 'react-native';
import { RESULT_SCR } from '../../../navigation/routes';
import { CameraMainButton } from '../../components';

import styles from './styles';

interface CustomEvent {
  nativeEvent: {
    resultUrl: string;
  };
}

interface CameraProps extends ViewProps {
  onResultImageExported: (event: CustomEvent) => void;
}

const RN_COMPONENT_NAME = 'RCTMyCustomView';

class Camera extends React.PureComponent<any> {
  ref: any = null;

  takePhoto = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.ref),
      UIManager[RN_COMPONENT_NAME].Commands.takePhotoViaManager,
      [],
    );
  };

  _onResultImageExported = ({ nativeEvent }: CustomEvent) => {
    this.props.navigation.navigate(RESULT_SCR, { uri: nativeEvent.resultUrl });
  };

  render() {
    return (
      <View style={styles.screen}>
        <RCTCameraView
          ref={ref => {
            this.ref = ref;
          }}
          onResultImageExported={this._onResultImageExported}
          style={styles.camera}
          {...this.props}
        />
        <View style={styles.controls}>
          <CameraMainButton onPress={this.takePhoto} />
        </View>
      </View>
    );
  }
}
export default Camera;

const RCTCameraView = requireNativeComponent<CameraProps>(RN_COMPONENT_NAME);
