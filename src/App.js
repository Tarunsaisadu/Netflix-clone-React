import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Homescreen from "./components/home/Homescreen";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./user/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  console.log(user);
  return <div className="App">{!user ? <Login /> : <Homescreen />}</div>;
}

export default App;
