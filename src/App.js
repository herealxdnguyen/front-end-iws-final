import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './component/Route/CustomerRoute';
import Auth from './component/Auth/Auth';

function App() {
  return (
    
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* <Profile/> */}
        <CustomerRoute/>
        {/* <Auth/> */}
        
      </ThemeProvider>
    
  );
}

export default App;
