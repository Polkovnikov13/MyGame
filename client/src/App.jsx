import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainPage from './Components/MainPage';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Registration from './Components/Registration/Registration';
import LogIn from './Components/LogIn/LogIn';
import { checkUser } from './redux/Slices/userSlice/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <Container>
      {/* <MyNavBar /> */}
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/user/registration" element={<Registration />} />
        <Route path="/api/user/login" element={<LogIn />} />
        {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
      </Routes>
    </Container>
  );
}

export default App;
