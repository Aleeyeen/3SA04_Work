import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Logo() {
   
    setTimeout(() => {
        Actions.replace('Home');
    }, 5000);
    return (        
       <View style = {styles.container}>
           <Image source={require('../animation.gif')}/>
           <Text style = {styles.Font} >WEATHER</Text>
       </View>
           
    );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
      },

    Font: {
        fontSize: 30,
        marginTop: -20,
    },
  })
  
