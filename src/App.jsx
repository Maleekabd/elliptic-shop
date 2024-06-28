import Navbar from "./components/Navbar.jsx";
import Card from "./components/card/Card.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/register/signup.jsx";
import Footer from "./components/footer/footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Card />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <SignUp />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <SignIn />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
