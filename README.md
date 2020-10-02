# React-Native
## การใช้งาน React-Native 
- ทำการติดตั้ง ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

``` 
>> choco install nodejs
>> choco install yarn
>> choco install git

```
- ติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)
``` 
>>  expo init wt-app  : (create project wt-app)
>>  cd wt-app 

```
- รันโปรแกรมด้วยคำสั่ง 
``` 
>> yarn start
>> expo start 
```

## การติดตั้ง Navigation Library 
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
```
>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native

```
## ตัวอย่างการใช้งาน Navigation
- ให้ทำการ import Navigation
``` 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
```
- ตัวอย่าง code 
```
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={ZipCodeScreen} />
    <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator> 
</NavigationContainer>
```
## การติดตั้ง react-native-router-flux
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 
``` 
>> expo install react-native-router-flux
>> yarn add react-native-router-flux
```
## ตัวอย่างการใช้งาน react-native-router-flux
- ให้ทำการ import react native router flux
- ตัวอย่าง code
```
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