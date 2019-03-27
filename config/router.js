import React from 'react';
import {SwitchNavigator, TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

import InstructionsScreen from '../screens/Instructions';
import AboutUsScreen from '../screens/AboutUs';
import Activity1Screen from '../screens/Activity1';
import Activity2Screen from '../screens/Activity2';
import Activity3Screen from '../screens/Activity3';
import SubmitScreen from '../screens/Submit';
import ThankyouScreen from '../screens/Thankyou';
import SplashScreen from '../screens/Splash';
import TermsScreen from '../screens/Terms';
import test from '../screens/test';
import {Icon} from "react-native-elements";

const common = {
    headerStyle: {
        backgroundColor: '#0076f4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
const IntroDrawer = DrawerNavigator({
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                title: 'TouchMetric',
                tabBarIcon: ({tintColor}) => <Icon name="ios-help-buoy" size={35} color={tintColor} type="ionicon"/>,
            }
        },
        Terms: {
            screen: TermsScreen,
            navigationOptions: {
                title: 'Terms and Conditions',
                tabBarIcon: ({tintColor}) => <Icon name="ios-help-buoy" size={35} color={tintColor} type="ionicon"/>,
            }
        }
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            ...common
        },
    });
const InstructionsStack = StackNavigator({
        Instructions: {
            screen: InstructionsScreen,
            navigationOptions: {
                title: 'Instructions',
                tabBarIcon: ({tintColor}) => <Icon name="ios-help-buoy" size={35} color={tintColor} type="ionicon"/>,
            }
        }
    },
    {
        navigationOptions: {
            ...common
        },
    });
const ActivitiesStack = DrawerNavigator({
        Activity1: {
            screen: Activity1Screen,
            navigationOptions: {
                title: 'Activity 1',
                tabBarIcon: ({tintColor}) => <Icon name="touch-app" size={35} color={tintColor}/>,
            }
        },
        Activity2: {
            screen: Activity2Screen,
            navigationOptions: {
                title: 'Activity 2',
                tabBarIcon: ({tintColor}) => <Icon name="touch-app" size={35} color={tintColor}/>,
            }
        },
        Activity3: {
            screen: Activity3Screen,
            navigationOptions: {
                title: 'Activity 3',
                tabBarIcon: ({tintColor}) => <Icon name="touch-app" size={35} color={tintColor}/>,
            }
        },
        Submit: {
            screen: SubmitScreen,
            navigationOptions: {
                title: 'Submit',
                tabBarIcon: ({tintColor}) => <Icon name="touch-app" size={35} color={tintColor}/>,
            }
        },
        Thankyou: {
            screen: ThankyouScreen,
            navigationOptions: {
                title: 'Thank you!',
                tabBarIcon: ({tintColor}) => <Icon name="touch-app" size={35} color={tintColor}/>,
            }
        }
    },
    {
        initialRouteName: 'Activity1',
        navigationOptions: {
            ...common
        },
    });
const AboutUsStack = StackNavigator({
        AboutUs: {
            screen: AboutUsScreen,
            navigationOptions: {
                title: 'About Us',
                tabBarIcon: ({tintColor}) => <Icon name="info" size={35} color={tintColor}/>,
            }
        }
    },
    {
        navigationOptions: {
            ...common,
        },
    });
const RootStack = TabNavigator({
    Instructions: {screen: InstructionsStack},
    Activities: {screen: ActivitiesStack},
    AboutUs: {screen: AboutUsStack},
}, {
    initialRouteName: 'Instructions'
});

export default function createRootNavigator(agreed = false) {
    return SwitchNavigator(
        {
            RootStack: RootStack,
            Intro: IntroDrawer,
        },
        {
            initialRouteName: 'Intro',
        }
    );
};
