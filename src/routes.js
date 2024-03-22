import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import {Password} from './pages/passwords'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
            />

            <Tab.Screen
                name='password'
                component={Password}
            />
        </Tab.Navigator>
    )
}