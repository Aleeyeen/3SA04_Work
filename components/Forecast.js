import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{ marginTop: 20 }}>

                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'space-around',
        alignItems: 'center',
        color:'white'
    },
    big: {
        marginTop: 20,
        fontSize: 30,
        color: 'white',
        fontSize: 30
        
    },
    medium: {
        marginTop: 20,
        fontSize: 20,
        color: 'white',
    },
})
