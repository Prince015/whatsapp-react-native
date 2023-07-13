import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import { Dimensions } from 'react-native';

const CameraComp = () => {

  const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // console.log(permission)
  const [camera, setCamera] = useState(null);
  const { width,height } = Dimensions.get('window');
  // console.log(width,height)
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      // console.log(cameraStatus)
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  return (
    <View style={styles.container} >
      {/* <Text>Camera</Text> */}
      <View style={styles.cameraContainer}>
        <Camera ratio='16:9'  ref={ref => setCamera(ref)} style={styles.camera} type={type} />
      </View>
      {/* <Button
        title="Flip Image"
        onPress={toggleCameraType}>
      </Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1f2c34"
  },
  cameraContainer: {
    // flex: 1,
    aspectRatio:9/16,
    // height:500,
    // borderColor:"red",
    borderWidth:1,
    // backgroundColor:"red"
    // flexDirection: 'row',
  },
  camera: {
    flex: 1,
    // height:500,
    // aspectRatio:1,
  },
})

export default CameraComp