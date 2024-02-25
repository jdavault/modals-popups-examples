import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';

const MediaPlayer = () => {

  const video = React.useRef(null);
  const [status, setStatus] = useState({
    isPlaying: false,
    isLoaded: false,
    positionMillis: 0,
    durationMillis: 0
  })

  const mediaFile = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          // source={{   uri: mediaFile }}
          source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          sliderColor={"#CE4A52"}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play Video'}
            onPress={() => {
              console.log(`status: ${status.isPlaying}`)
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }}
            disabled={status.isLoaded}
          />
        </View>
      </View>

    </View>
  )
}

export default MediaPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, appText: {
    fontfamily: 'sans-serif',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: "700"
  },
  video: {
    backgroundColor: "#ffffff",
    maxHeight: 20,
    width: 50,
    flexDirection: "row",
    alignItems: "center"
  },
})