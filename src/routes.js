import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
