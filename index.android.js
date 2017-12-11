/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }

  showPicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.5,
      mediaType: 'photo',
      width: 400,
      height: 400
    }).then((image) => {
      this.setState({ image });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        {this.state.image !== null &&
          <Text style={styles.instructions}>
            {JSON.stringify(this.state.image)};
          </Text>
        }
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableOpacity onPress={this.showPicker}>
          <Text>Open Picker</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
