import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
    {/*} <RegisterPage/>*/}
      <LoginPage/>
      <Footer />
    </>
  );
}

export default App;