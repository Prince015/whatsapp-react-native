import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Tabs from './src/Tabs';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.wtspHomeHeader}>
        <Text style={styles.wtspTitle}>WhatsApp</Text>
        <View style={styles.wtspHomeHeaderIcons}>
        <Ionicons name="camera-outline" size={32} color="#8797a1" />
        <AntDesign name="search1" size={26} color="#8797a1" />
        <Feather name="more-vertical" size={26} color="#8797a1" />
        </View>
      </View>
      <Tabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2c34',
  },
  wtspTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color:"#8797a1"
  },
  wtspHomeHeader: {
    // flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f2c34',
  },
  wtspHomeHeaderIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
