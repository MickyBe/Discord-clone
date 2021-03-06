import React , { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar.jsx';
import Chat from './Chat.jsx';
import { selectUser } from './features/userSlice';
import Login from './Login.jsx';
import { auth } from './firebase'
import { login , logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged( (authUser) => {
      console.log("user is ",authUser);
      if(authUser) {
        dispatch(
          login({
          uid: authUser.uid,
          photo:authUser.photoURL,
          email: authUser.email,
          displayName:authUser.displayName
        })
        );
      } else {
        dispatch(logout());
      }
    })
    // return () => {
    //   cleanup
    // }
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
      <>
        <Sidebar/>
        <Chat/>
      </>
      ):(
        <Login/>
      )
      }
      
    </div>
  );
}

export default App;
