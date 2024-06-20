import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Router from "./routes/Router";

import { baselightTheme } from "./theme/DefaultColors";

import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes = () => {
  let routes = useRoutes(Router);
  return routes;
};

function App() {
  const theme = baselightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
