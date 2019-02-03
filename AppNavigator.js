import { createStackNavigator, createAppContainer } from 'react-navigation';
import CounterScreen from './src/screens/counterScreen';
import SizeSelectorScreen from './src/screens/SizeSelectorScreen';

const AppNavigator = createStackNavigator({
    SizeSelecting: { screen: SizeSelectorScreen },
    SizeCounting: { screen: CounterScreen }
});
const AppContainer = createAppContainer(AppNavigator);
export { AppContainer };