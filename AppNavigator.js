import { createStackNavigator, createAppContainer } from 'react-navigation';
import CounterScreen from './src/screens/counterScreen';
import SizeSelectorScreen from './src/screens/SizeSelectorScreen';

const AppNavigator = createStackNavigator({
    SizeCounting: { screen: CounterScreen },
    SizeSelecting: { screen: SizeSelectorScreen}
});
const AppContainer = createAppContainer(AppNavigator);
export { AppContainer };