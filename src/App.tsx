import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, matchRoutes, RouteObject,  RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme, ScopedCssBaseline, ThemeOptions } from '@mui/material';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
// import RouterBar from './components/RouterBar';



export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ed2024',
    },
    secondary: {
      main: '#772828',
    },
    background: {
      default: '#1c1d1e',
      paper: '#303030',
    },
    text: {
      primary: "#f5f5f5" //whitesmoke,
    }
  },
  typography: {
    fontSize: 22,
  },
};

const theme = createTheme(themeOptions);


function App() {
  const baseroutes = [
    {
      path: "/",
      element: <HomePage />,
      name: "hi",
    },
    {
      path: "/form",
      element: <FormPage />,
      name: "hi",
    },
  ]
  const router = createBrowserRouter(baseroutes);


    // const teamItems = wbTeams.map((team) =>
  //   // <MenuItem key={team.toString()}>{team}</MenuItem>
  //   // <MenuItem value={176}>176</MenuItem>
  //   <MenuItem key={team.toString()} value={team}>{team}</MenuItem>

  // );
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <RouterProvider router={router}></RouterProvider>
        <>{router.routes.map((route) => <>{route.path}</>)}</>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
