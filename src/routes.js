import { createStackNavigator } from 'react-navigation';

// Routes
import RegisterPhone from './views/register/phone';
import RegisterAddress from './views/register/address';

const Routes = createStackNavigator({
  RegisterPhone: { screen: RegisterPhone },
  RegisterAddress: { screen: RegisterAddress }
}, {
  initialRouteName: 'RegisterPhone'
});

export default Routes;
