
import './App.css'
import ButtonWh from './components/buttonwp/ButtonWh';
import Countdown from './components/Contador';

function App() {
  const targetDate = new Date('2024-09-28T23:59:59');

  return (
    <div>
      <h1>Cuenta regresiva</h1>
      <Countdown targetDate={targetDate} />
      <ButtonWh/>
    </div>
  );
}


export default App
