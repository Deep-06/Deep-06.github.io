import './App.css';
import { AllRoutes } from './Components/AllRoutes';
//import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" style={{backgroundColor:"lightblue"}}>
    <Navbar/> 
     <AllRoutes/>
    {/* <Home/> */}
    </div>
  );
}

export default App;
