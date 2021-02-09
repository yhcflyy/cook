/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from "react-native";
import Home from "./src/tabbar/Home";
import Detail from "./src/test/Detail";
import PostPage from "./src/test/Post";

// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Text } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="Home" component={HomeTabs} options={{
          title: "Overview",
          headerShown: true,
        }} />
        <Stack.Screen name="Detail" component={Detail} initialParams={{ 'itemId': 987 }} />
        <Stack.Screen name="PostPage" component={PostPage} initialParams={{ 'itemId': 987 }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



const HomeTabs = () => {
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#fa6651',
      inactiveTintColor: '#333333',
      labelStyle:{
        fontSize:14
      }
    }}>
    <Tab.Screen name="Home" component={Home} options={{
      tabBarLabel : '首页',
      tabBarIcon : ({ focused, color, size }) => {
        const image = focused ? require('./images/tab_home_selected.png') : require('./images/tab_home.png')
        return <Image source={image} style={{width:28,height:28}}></Image>
      }
    }}/>
    <Tab.Screen name="Market" component={Detail} options={{
      tabBarLabel : '市集',
      tabBarIcon : ({ focused, color, size }) => {
        const image = focused ? require('./images/tab_market_selected.png') : require('./images/tab_market.png')
        return <Image source={image} style={{width:28,height:28}}></Image>
      }
    }}/>
    <Tab.Screen name="Course" component={Home} options={{
      tabBarLabel : '课堂',
      tabBarIcon : ({ focused, color, size }) => {
        const image = focused ? require('./images/tab_course_selected.png') : require('./images/tab_course.png')
        return <Image source={image} style={{width:28,height:28}}></Image>
      }
    }}/>
    <Tab.Screen name="Favarite" component={Detail} options={{
      tabBarLabel : '收藏',
      tabBarIcon : ({ focused, color, size }) => {
        const image = focused ? require('./images/tab_favarite_selected.png') : require('./images/tab_favarite.png')
        return <Image source={image} style={{width:28,height:28}}></Image>
      }
    }}/>
    <Tab.Screen name="Me" component={Home} options={{
      tabBarLabel : '我',
      tabBarIcon : ({ focused, color, size }) => {
        const image = focused ? require('./images/tab_profile_selected.png') : require('./images/tab_profile.png')
        return <Image source={image} style={{width:28,height:28}}></Image>
      }
    }}/>
  </Tab.Navigator>
  )
}

export default App;
