import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import WhatsApp from './WhatsApp';
import {colors} from './constants';
import Video from './Video';
import Documents from './Documents';
import Audio from './Audio';
import Injil from './Injil';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.button,
    //accent: colors.secondary,
  },
};

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Takat" component={Home} />
      <Drawer.Screen name="Injil" component={Injil} />
      <Drawer.Screen name="sawl-agh-d s-watsapp" component={WhatsApp} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={({navigation}) => ({
              headerStyle: {backgroundColor: colors.button},
              headerTitle: '',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }>
                  <Icon
                    name="menu"
                    color="#fff"
                    size={30}
                    style={{padding: 10}}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
