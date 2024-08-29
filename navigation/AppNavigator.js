
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogoutScreen from '../screens/LogoutScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen  options={{
                headerStyle: {
                    backgroundColor: '#66ccff',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
             name="Home" component={HomeScreen} />
    </Stack.Navigator>
);

const ProductStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: '#66ccff',
            },
            headerTitleStyle: { 
                fontWeight: 'bold',
            },
        }}
        
            name="ProductList" component={ProductListScreen} />
        <Stack.Screen
            options={{
                headerStyle: {
                    backgroundColor: '#66ccff',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

    </Stack.Navigator>
);

const AppTabs = () => (
    <Tab.Navigator  
    initialRouteName="AppTabs"
    >
         <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Products" component={ProductStack} />
    </Tab.Navigator>
);

// const AppDrawer = () => (
//     <Drawer.Navigator>
//       <Drawer.Screen name="AppTabs" component={AppTabs} />
//       <Drawer.Screen name="Logout" component={LogoutScreen} />
//     </Drawer.Navigator>
//   );
  

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}
        // initialRouteName="Login"
        >
            <Stack.Screen name="AppTabs" component={AppTabs} />
            <Stack.Screen name="Login" component={LoginScreen} />
            
            {/* <Stack.Screen name="AppDrawer" component={AppDrawer} /> */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
