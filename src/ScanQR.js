import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';


const ScanQR = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!location) {
    return <Text>Need location permission to scan QR...</Text>;
  }

  // Your coordinates
  const { latitude, longitude } = location.coords;

  const targetLatitude = 21.2279; // Replace with your target latitude
  const targetLongitude = 81.363; // Replace with your target longitude
  const radius = 10; // Radius in meters

  // Calculate distance between two coordinates using Haversine formula
  const distance = (lat1, lon1, lat2, lon2) => {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    const a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  };

  // Check if device is within the specified radius
  const isWithinRadius = distance(latitude, longitude, targetLatitude, targetLongitude) <= radius;

  const handleBarCodeScanned = ({ data }) => {
    setScannedData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      {isWithinRadius ? <BarCodeScanner
        style={styles.barcode}
        onBarCodeScanned={handleBarCodeScanned}
      /> : <Text style={{ color: 'red' }}>You are not within the radius</Text>
      }

      {scannedData && (
        <View style={styles.scannedDataContainer}>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
        </View>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  barcode:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  scannedDataContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 16,
  },
  scannedDataText: {
    fontSize: 16,
  },
})




export default ScanQR