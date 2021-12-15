import { ThemeProvider } from "@material-ui/core/styles";
import react from "react"
import theme from "./constants/theme";
import Router  from "./routes/Router";


const App =()=> {
  return (
    <ThemeProvider theme={theme}>
     
     
     <Router/>
    </ThemeProvider>
  );
}

export default App;
