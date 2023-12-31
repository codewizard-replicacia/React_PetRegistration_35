import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme";
import "./index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </React.StrictMode>
);


