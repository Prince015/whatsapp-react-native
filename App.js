import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Tabs from './src/Tabs';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraComp from './src/Camera';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown:false, animation:'slide_from_left'}}  name="Home" component={Home} />
          <Stack.Screen options={{headerShown:false, animation:'slide_from_right'}} name="Camera" component={CameraComp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2c34',
  },


});
