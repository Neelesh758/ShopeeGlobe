import './App.css'
import Maindiv from './Components/maindiv'
import NavigationBar from './Components/navigationBar'
import Productlist from './Components/Productlist'
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore from './Components/utils/appstore.js'; 
import Footer from './Components/footer.jsx';
function App() {

  return (
    <>
      <Provider store={appStore}>
      <NavigationBar />
      <Outlet />
      </Provider>
      <Footer />
    </>
  )
}

export default App
