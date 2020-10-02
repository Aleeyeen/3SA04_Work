
## การติดตั้ง Navigation Library 
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
```
>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native

```

## ตัวอย่างการใช้งาน Navigation สามารถทำได้ผ่านการใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation

- ตัวอย่าง code 
```
  import { NavigationContainer } from '@react-navigation/native'; 
  import { createStackNavigator } from '@react-navigation/stack';
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={ZipCodeScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator> 
</NavigationContainer>
```
## การติดตั้ง react-native-router-flux
react-native-router-flux เป็น API ที่แตกต่างจาก react-navigation ช่วยให้ผู้ใช้กำหนดเส้นทางทั้งหมดในที่เดียวและนำทางและสื่อสารระหว่างหน้าจอต่างๆได้อย่างง่ายดาย
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
``` 
>> expo install react-native-router-flux
>> yarn add react-native-router-flux
```
## ตัวอย่างการใช้งาน react-native-router-flux
- ตัวอย่าง code
```
import {Actions} from 'react-native-router-flux
<Router>
        <Scene key="root">
          <Scene key="Logo" component={Logo} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
</Router>
```
## การติดตั้ง และใช้งาน lottie react native 
- ทำการติดตั้ง ในส่วนของ lottie 
 ``` 
>> expo install lottie-react-native
>> yarn add lottie-react-native

```
- ตัวอย่าง code
```
import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  render() {
    return <LottieView source={require('./animation.json')} autoPlay loop />;
  }
}
```