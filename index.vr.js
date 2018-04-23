import React from 'react';
import {
  AppRegistry,
  asset,
  VideoPano,
  Text,
  View,
} from 'react-vr';

export default class WorldView extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={asset('london.webm')}/>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          World
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WorldView', () => WorldView);
