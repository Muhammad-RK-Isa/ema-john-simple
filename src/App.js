import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import SummaryPannel from './Components/SummaryPannel/SummaryPannel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <SummaryPannel></SummaryPannel>
    </div>
  );
}

export default App;
