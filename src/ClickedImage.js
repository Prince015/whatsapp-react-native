import { View, Text, Image } from 'react-native'
import React from 'react'

const ClickedImage = ({route}) => {
    const image = route.params.image
    // console.log(image)
  return (
    <View style={{flex:1, backgroundColor:"black", justifyContent:'center'}}>
      <Image source={{uri: image}} style={{ aspectRatio:9/16}} />
    </View>
  )
}

export default ClickedImage