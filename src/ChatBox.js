import { View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Animated, Modal } from 'react-native'
import React, { useRef, useState } from 'react'

const ChatBox = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const handleOpenModal = () => {
        setModalVisible(true);
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleCloseModal = () => {
        Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setModalVisible(false);
        });
    };

    const animatedStyle = {
        transform: [{ scale: scaleValue }],
    };
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#f1f2f338", false)}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleOpenModal}>
                    <Image source={require('../assets/prince.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                </TouchableOpacity>
                <Modal visible={modalVisible} transparent={true} onRequestClose={handleCloseModal}>
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPress={handleCloseModal}
                    >
                        <Animated.View style={[styles.modalContent, animatedStyle]}>
                            <Image
                                source={require('../assets/prince.jpg')} // Replace with your image source
                                style={styles.modalImage}
                            />
                        </Animated.View>

                    </TouchableOpacity>
                </Modal>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContent: {
        width: '80%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },

})

export default ChatBox