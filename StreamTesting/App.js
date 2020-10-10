/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
          <Text>Above Video</Text>
          <View style={styles.videoContainer}>
              <Video
                     source={{
                                uri:'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'
                            }}
                     ref={(ref) => {
                       this.player = ref
                     }}  // Store reference
                     onBuffer={this.onBuffer} // Callback when remote video is buffering
                     onError={this.videoError} // Callback when video cannot be loaded
                     style={styles.backgroundVideo} />
          </View>
          <Text>Below Video</Text>
      </SafeAreaView>
    </>
  );
};

var styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 300,
        height: 300
    },
});


export default App;
