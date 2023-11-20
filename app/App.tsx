import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigation from './src/screens/AppNavigation';


const App = () => { 
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
export default App;