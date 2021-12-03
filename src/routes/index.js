import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';

const Drower = createDrawerNavigator();

export default function Routes(){
    return(
        <Drower.Navigator
            screenOptions={{
                headerShown: false,
                
                drawerStyle:{
                    backgroundColor: '#090A0E',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF'
            }}
        >
            <Drower.Screen 
            name="HomeDrower" 
            component={StackRoutes} 
            options={{
                title: 'Home',
                drawerIcon: ({focused, size, color}) => (
                    <Icon 
                        name={focused ? 'movie-open-outline' : 'movie-outline'}
                        size={size}
                        color={color} 
                    />
                )
            }}
            />
            <Drower.Screen 
            name="Movies" 
            component={Movies} 
            options={{
                title: "Meus Filmes",

                drawerIcon: ({focused, size, color}) => (
                    <Icon 
                        name={focused ? 'archive' : 'archive-outline'}
                        size={size}
                        color={color}
                    />
                )
            }}
            />
        </Drower.Navigator>
    )
}