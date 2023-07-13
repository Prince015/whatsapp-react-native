import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const ChatBox = () => {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#f1f2f338",false)}>
            <View style={styles.container}>
            <View>
                <Image source={require('../assets/prince.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
            <View style={styles.msgDetails}>
                <View style={styles.msgDetailsTop}>
                    <Text style={styles.title}>Prince</Text>
                    <Text style={{ color: "#8797a1" }}>10:36pm</Text>
                </View>
                <View style={styles.msgDetailsBottom}>
                    <Text numberOfLines={1} style={styles.msg}>{String("Hey, how are you? call me when you get Free")}</Text>
                    <Text style={styles.unread}>10</Text>
                </View>
            </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        padding: 10,
        paddingVertical: 12,
    },
    msgDetails: {
        flex: 1,
        display: 'flex',
        alignSelf: 'flex-end',
        // paddingVertical: 5,
    },
    msgDetailsTop: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    msgDetailsBottom: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    unread: {
        backgroundColor: '#00af9c',
        minWidth: 20,
        minHeight: 20,
        maxHeight: 25,
        // padding: 5,
        aspectRatio: 1,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'absolute',
        right: 0,
    },
    msg: {
        fontSize: 16,
        maxWidth: '90%',
        color: '#8797a1',
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
    },

})

export default ChatBox