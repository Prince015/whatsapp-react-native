import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tabs = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        // <NavigationContainer style={styles.container}>
            <Tab.Navigator
            backBehavior='none'
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#1f2c34',
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#8797a1',
                },
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#00a982' : '#8797a1', fontSize:14  }}>
                        {route.name}
                    </Text>
                ),
                tabBarPressColor: '#fff',
                tabBarActiveTintColor: '#00a982',
                tabBarIndicatorStyle: {
                    backgroundColor: '#00a982',
                    height: 3,
                },
            })}
            >
                <Tab.Screen name="Chats" component={Chats} />
                <Tab.Screen name="Status" component={Status} />
                <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },  
})

export default Tabs