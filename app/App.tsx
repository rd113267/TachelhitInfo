import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colors} from './constants';
import Fidyu from './components/Fidyu';
import Maylli from './components/Maylli';

export type RootStackParamList = {
  Home: undefined;
  Fidyu: undefined;
  Maylli: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Fidyu"
            component={Fidyu}
            options={() => ({
              headerTitle: '',
              headerStyle: {backgroundColor: colors.button},
              headerTitleStyle: {color: '#fff'},
              headerBackTitle: '',
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name="Maylli"
            component={Maylli}
            options={() => ({
              headerTitle: '',
              headerStyle: {backgroundColor: colors.button},
              headerTitleStyle: {color: '#fff'},
              headerBackTitle: '',
              headerTintColor: '#fff',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
