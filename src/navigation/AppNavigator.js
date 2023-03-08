import React, { useContext } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme, themeColor } from 'react-native-rapi-ui';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
//Screens
import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
import Redeem from '../screens/Redeem';
import Profile from '../screens/Profile';
import Loading from '../screens/utils/Loading';
// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';
import { AuthContext } from '../provider/AuthProvider';

// Better put your these secret keys in .env file
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjlWLhsIOpjUMI66cjoWWkDXET536EgUQ',
  authDomain: 'tohk-e0b70.firebaseapp.com',
  projectId: 'tohk-e0b70',
  storageBucket: 'tohk-e0b70.appspot.com',
  messagingSenderId: '664939970889',
  appId: '1:664939970889:web:3e1323c337199d98405a98',
  measurementId: 'G-H2HKLQVRJL',
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : '#c0c0c0',
          backgroundColor: isDarkmode ? themeColor.dark200 : '#ffffff',
        },
      }}
    >
      {/* these icons using Ionicons */}

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'person'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'md-home'} />
          ),
        }}
      />
      <Tabs.Screen
        name="Redeem"
        component={Redeem}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Redeem" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'cash'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
