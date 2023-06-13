import { Provider } from 'react-redux';
import Header from './component/Header';
import Store from './store/Store';
import './Custom.css';
import Cart from './component/Cart';
import WishList from './component/WishList';



const App =() => {
 
  return (
    <>
   
    <Provider store={Store}>
    <Header/>
    <Cart />
    <WishList />
    </Provider>
 
    </>
  );
}

export default App;
