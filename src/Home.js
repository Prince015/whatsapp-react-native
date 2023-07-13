import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import Tabs from './Tabs'
import { StyleSheet } from 'react-native'

const Home = ({navigation}) => {

    const handleCamera = () => {
        // console.log("camera")
        navigation.push('Camera')
    }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.wtspHomeHeader}>
        <Text style={styles.wtspTitle}>WhatsApp</Text>
        <View style={styles.wtspHomeHeaderIcons}>
          <Pressable android_ripple={{ color: '#f1f2f338',radius:20, borderless: true }} onPress={handleCamera} >
            <Ionicons name="camera-outline" size={24} color="#8797a1" />
          </Pressable>
          <Pressable android_ripple={{ color: '#f1f2f338',radius:20, borderless: true }} onPress={handleCamera} >
            <AntDesign name="search1" size={20} color="#8797a1" />
          </Pressable>
          <Pressable android_ripple={{ color: '#f1f2f338',radius:20, borderless: true }} onPress={handleCamera} >
            <Feather name="more-vertical" size={20} color="#8797a1" />
          </Pressable>
        </View>
      </View>
      <Tabs />
    </>
  )
}

const styles = StyleSheet.create({
    wtspTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#8797a1"
      },
      wtspHomeHeader: {
        // flex: 1,
        paddingHorizontal: 20,
        // paddingVertical: 15,
        paddingTop: 15,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1f2c34',
      },
      wtspHomeHeaderIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 28,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
})

export default Home