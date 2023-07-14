import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'

const GenerateQR = () => {
  const data = {
    name:"Prince",
    age:20,
    semester:7
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Generate QR</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={JSON.stringify(data)}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor: 'white',
    flex:1
  },
  text:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  qrContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default GenerateQR