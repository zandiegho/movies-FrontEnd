import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';
 
function App() {

  const tittle = "Peliculas IUDigital";

  return (
    <div className="container">
      
      <NavBar tittle={tittle}/>     

      <Table/>
      
    </div>
  );
}

export default App;
