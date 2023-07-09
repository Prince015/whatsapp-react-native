import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatBox = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/prince.jpg')} style={{ width: 56, height: 56, borderRadius: 50 }} />
            </View>
            <View style={styles.msgDetails}>
                <View style={styles.msgDetailsTop}>
                    <Text style={styles.title}>Prince</Text>
                    <Text style={{ color: "#8797a1" }}>10:36pm</Text>
                </View>
                <View style={styles.msgDetailsBottom}>
                    <Text numberOfLines={1} style={styles.msg}>{String("Hey, how are you? call me when you get Free")}</Text>
                    <Text style={styles.unread}>1</Text>
                </View>
            </View>
        </View>
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
        paddingVertical: 10,
    },
    msgDetails: {
        flex: 1,
        display: 'flex',
        alignSelf: 'flex-end',
        paddingVertical: 5,
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
        minWidth: 30,
        minHeight: 30,
        // maxHeight: 25,
        padding: 5,
        // aspectRatio: 1,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
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