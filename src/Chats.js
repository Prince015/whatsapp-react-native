import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ChatBox from './ChatBox'

const Chats = () => {
  return (
    <ScrollView  style={styles.container}>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121b22',
    },
})

export default Chats