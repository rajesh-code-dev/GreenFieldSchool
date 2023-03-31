import {WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
// import * as SplashScreen from 'expo-splash-screen'

const Home = () =>{

    return(
        <WebView source={{
                uri: 'https://schoolsbn.com/greenfield/site/login'
        }}
        style={{marginTop: 20}}
        />
    )
}

export default Home
