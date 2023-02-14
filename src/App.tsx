import './App.css';
import Greet from 'components/Greet';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <p>Learn React</p>
      <Greet name="Full Stack Spiderman" />
      <Greet />
    </div>
  );
}
