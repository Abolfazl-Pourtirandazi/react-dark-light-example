import Home from "./pages/home/Home";
import './App.css'
import './theme.css'
import { ThemeProvider } from "./provider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
