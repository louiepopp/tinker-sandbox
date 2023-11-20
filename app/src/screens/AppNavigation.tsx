import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./landing/LandingPage";
import Create from "./create/Create";
import Profile from "./profile/Profile";
import Tinks from "./tinks/Home";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/slices/auth/auth.getter";
import { useCallback, useEffect, useState } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from '../hooks/useNavigate';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

const AppNavigation = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const datasets = useSelector((state) => state)

    useEffect(() => {
        async function prepare() {
          try {
            await Font.loadAsync({
                'Outfit': require('./../../assets/fonts/Outfit/Outfit-Regular.otf')
            });
          } catch (e) {
            console.warn(e);
          } finally {
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }


    return (
        <NavigationContainer ref={navigationRef} onReady={onLayoutRootView}>    
            {isLoggedIn ? (
                <Tab.Navigator screenOptions={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                }}>
                    <Stack.Screen
                        name="tinks"
                        component={Tinks}          
                    />
                    <Stack.Screen
                        name="profile"
                        component={Profile}          
                    />
                    <Stack.Screen
                        name="create"
                        component={Create}          
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="landingpage"
                        component={LandingPage}          
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

export default AppNavigation;