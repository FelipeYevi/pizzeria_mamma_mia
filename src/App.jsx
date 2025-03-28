import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./LoginPage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
     {/* <Home />*/}
    {/* <RegisterPage/>*/}
    {/*  <LoginPage/>*/}
    <Cart/>
      <Footer />
    </>
  );
}

export default App;