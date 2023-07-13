import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType, FlashMode, WhiteBalance } from 'expo-camera';
import { Dimensions } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native'
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';


const CameraComp = ({ navigation }) => {

  const [type, setType] = useState(CameraType.front);
  const [torch, setTorch] = useState(FlashMode.off);
  const [image, setImage] = useState(null);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // console.log(permission)
  const [camera, setCamera] = useState(null);
  const { width, height } = Dimensions.get('window');
  const isFocused = useIsFocused();
  const requiredHeight = (width * 16 / 9) + 50;
  // console.log(width,height)
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  function toggleTorch() {
    setTorch(current => (current === FlashMode.off ? FlashMode.torch : FlashMode.off));
  }

  const takePicture = async () => {
    if (camera) {
      let pic = await camera.takePictureAsync(null)
      if (type === CameraType.front) {
        pic = await manipulateAsync(
          pic.localUri || pic.uri,
          [
            { rotate: 180 },
            { flip: FlipType.Vertical },
          ],
          { format: SaveFormat.JPEG }
        );
      }
      setImage(pic.uri);
      // console.log(pic.uri)
      navigation.push('ClickedImage', { image: pic.uri })
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });
  
    // console.log(result);
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.push('ClickedImage', { image: result.assets[0].uri });
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
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
      <View style={styles.cameraContainer}>
        {isFocused && <Camera flashMode={torch} ratio='16:9' ref={ref => setCamera(ref)} style={styles.camera} type={type} >
          <View style={styles.cameraInnerContainer}>
            <View style={styles.innerCameraTop}>
              <Pressable onPress={()=>{navigation.pop(1)}} android_ripple={{ color: '#00a982', radius: 20, borderless: true }}>
                <Entypo name="cross" size={24} color="white" />
              </Pressable>
              <Pressable onPress={toggleTorch} android_ripple={{ color: 'white', radius: 20, borderless: true }}>
                <MaterialIcons name="flash-on" size={24} color="white" />
                {/* <MaterialIcons name="flash-off" size={24} color="white" /> */}
              </Pressable>
            </View>
            <View style={styles.innerCameraTop}>
              <Pressable onPress={pickImage} style={styles.iconBg} android_ripple={{ color: '#f1f2f338', radius: 20, borderless: true }}>
                <MaterialIcons name="insert-photo" size={24} color="white" />
              </Pressable>
              <Pressable onPress={() => takePicture()} style={{ aspectRatio: 1, borderColor: "white", borderWidth: 4, backgroundColor: "transparent", borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 36, aspectRatio: 1, backgroundColor: "white", borderRadius: 100, margin: 6 }}>

                </View>
              </Pressable>
              <Pressable onPress={toggleCameraType} style={styles.iconBg} android_ripple={{ color: '#f1f2f338', radius: 20, borderless: true }}>
                <MaterialCommunityIcons name="rotate-3d-variant" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </Camera>}
      </View>
      {height > requiredHeight && <View style={styles.cameraBottom}>
        {/* {image && <Image source={{uri: image}} style={{flex:1}}/>} */}
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2c34"
  },
  cameraContainer: {
    aspectRatio: 9 / 16,
    // marginTop: 20,

    // marginVertical:"auto"
  },
  camera: {
    flex: 1,
  },
  cameraBottom: {
    flex: 1,
    backgroundColor: '#1f2c34',
    // borderWidth: 1,
    // borderColor: 'red',
    bottom: 0,
  },
  cameraInnerContainer: {
    flex: 1,
    // diisplay:'flex',
    // backgroundColor:'red',
    // borderColor:'white',
    // borderWidth:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  innerCameraTop: {
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  iconBg: {
    backgroundColor: "#1f2c3484",
    height: 40,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 100,
    // opacity:0.5,
  }
})

export default CameraComp