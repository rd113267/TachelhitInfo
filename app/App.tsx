import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import WhatsApp from './WhatsApp';
import {colors} from './constants';
import Video from './Video';
import Documents from './Documents';
import Audio from './Audio';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.button,
    //accent: colors.secondary,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.buttonHover,
            inactiveTintColor: colors.button,
            showLabel: false,
          }}>
          <Tab.Screen
            options={() => ({
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="home" size={size} color={color} />;
              },
            })}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={(route) => ({
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="headphones" size={size} color={color} />
              ),
            })}
            name="Audio"
            component={Audio}
          />
          <Tab.Screen
            options={(route) => ({
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="file-document" size={size} color={color} />
              ),
            })}
            name="Documents"
            component={Documents}
          />
          <Tab.Screen
            options={(route) => ({
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="video" size={size} color={color} />
              ),
            })}
            name="Video"
            component={Video}
          />
          <Tab.Screen
            options={(route) => ({
              tabBarIcon: ({focused, color, size}) => (
                <Icon name="whatsapp" size={size} color={color} />
              ),
            })}
            name="WhatsApp"
            component={WhatsApp}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
