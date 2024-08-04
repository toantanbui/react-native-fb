
import AppNavigation from "./components/navigation/app.navigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import reduxStore from "./components/redux/redux";


export default function App() {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={reduxStore}>
        <AppNavigation />
      </Provider>
    </SafeAreaView>


  );
}


