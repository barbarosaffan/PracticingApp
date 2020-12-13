import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';

/* 
const App = () => {
  return (
    <View style = {styles.container}>
      <Text>Header Text</Text>
      <View>
      <Text>Content text here, ipsum dolor sit
        amet you know how it goes xd
      </Text>
      <Image
        source = {{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
        }}      
        style = {{ width: 150, height: 150}}
      />
      <Text>There is a blue cat up there! Look at it</Text>
      </View>
    <StatusBar style = 'auto'/>
    </View>
  );
}
*/

const someText = () => {
  const [outputText, setOutputText] = useState('Wello Horld!')
  return (
    <View style = {styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Change Text" onPress = {() => setOutputText('Hello girls!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue'
  },
  justifiedContent: {
    justifyContent: 'center'
  },
});

export default someText