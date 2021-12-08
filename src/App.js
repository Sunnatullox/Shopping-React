import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
import {ToastContainer} from "react-toastify"
import { ContextProvider } from './Context';

function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
   <ContextProvider>
    <Shop/>
   </ContextProvider>
    <Footer/>
    </>
  );
}

export default App;
