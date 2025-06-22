import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import {PATH} from './BottomTabsNavigator'
import TodoDetails from '../pages/TodoDetails';
const StackNavigator = () => {
 const { Navigator, Screen} = createNativeStackNavigator();

  return (
   <Navigator screenOptions={{ headerShown: false}}>
      <Screen
        name={PATH.HOME}
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
      <Screen
        name={PATH.DETAILS}
        component={TodoDetails}
        options={{ headerTitle: 'Todo Details' }}
      />
   </Navigator>
  )
}

export default StackNavigator