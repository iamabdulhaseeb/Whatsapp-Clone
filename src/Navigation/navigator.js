import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/Chats/index';
import StatusScreen from '../screens/Status/index';
import CallScreen from '../screens/Calls/index';
import {NavigationContainer} from '@react-navigation/native';
const MainNav = createMaterialTopTabNavigator({
    Chats:ChatsScreen,
    Status:StatusScreen,
    Calls:CallScreen
});

export default createapp