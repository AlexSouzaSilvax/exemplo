import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import Constants from 'expo-constants';
import Lista from './src/pages/Lista';

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 120, 145],
              outputRange: [80, 10, 0],
              extrapolate: 'clamp'
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 80, 170],
              outputRange: [1, 0.5, 0],
              extrapolate: 'clamp'
            })
          }
        ]}
      >
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
        <Animated.Image
          source={require('./assets/logo.png')}
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [230, 90],
              extrapolate: 'clamp'
            }),
            height: 40
          }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </Animated.View>

      <ScrollView
        style={{ backgroundColor: '#fff' }}
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
      >

        {/* <View style={styles.box}></View> */}
        <Lista />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#101010',
  },
  header: {
    backgroundColor: '#101010',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  box: {
    height: 80,
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5
  }
});