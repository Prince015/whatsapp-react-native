import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import StatusBox from './StatusBox'

const Status = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBox myStatus={true} />
      <Text style={styles.recient}>
        Recent updates
      </Text>
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121b22',
    // paddingVertical:5
  },
  recient: {
    fontSize: 16,
    maxWidth: '90%',
    color: '#8797a1',
    paddingLeft:20,
    marginVertical:10,
  }
})

export default Status