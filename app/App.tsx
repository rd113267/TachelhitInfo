import React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import WhatsApp from './components/WhatsApp';
import {colors} from './constants';
import Injil from './components/Injil';
import {TouchableOpacity} from 'react-native';
import Imurign from './components/Imurign';
import Iseqsitn from './components/Iseqsitn';
import Tugga from './components/Tugga';
import Alemmud from './components/Alemmud';
import Arratn from './components/Arratn';
import Fidyu from './components/Fidyu';
import Izdayn from './components/Izdayn';

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
      <Drawer.Screen name="Imurign" component={Imurign} />
      <Drawer.Screen name="Iseqsitn" component={Iseqsitn} />
      <Drawer.Screen name="Tugga" component={Tugga} />
      <Drawer.Screen name="Alemmud" component={Alemmud} />
      <Drawer.Screen name="Arratn" component={Arratn} />
      <Drawer.Screen name="Fidyu" component={Fidyu} />
      <Drawer.Screen name="Izdayn" component={Izdayn} />
      <Drawer.Screen name="sawl-agh-d s-watsapp" component={WhatsApp} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
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
                    size={35}
                    style={{padding: 10}}
                  />
                </TouchableOpacity>
              ),
            })}
          /> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
