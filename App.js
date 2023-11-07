import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  BottomTabNavigation  from './navigation/BottomTabNavigation';
import {Cart} from './screens';
import { View } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'light': require("./assets/fonts/Poppins-Light.ttf"),
      'medium': require("./assets/fonts/Poppins-Medium.ttf"),
      'extrabold': require("./assets/fonts/Poppins-ExtraBold.ttf"),
      'Bold': require("./assets/fonts/Poppins-Bold.ttf"),
  
    })
  
    const onLayoutRootView = useCallback(async() =>{
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
    },[fontsLoaded]);
  
    if(!fontsLoaded){
      return null;
    }
  
  
  const Stack = createNativeStackNavigator();
   
  return (

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Bottom Navigation'
      component={BottomTabNavigation}
      options={{headerShown:false}}>
      </Stack.Screen>
  
    </Stack.Navigator>
  </NavigationContainer>
  );
}

