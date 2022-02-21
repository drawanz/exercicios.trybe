import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const arr = ['Drawanz', 'Ferreira'];
  return (
    arr.map((element) => Task(element))
  );
}

export default App;
