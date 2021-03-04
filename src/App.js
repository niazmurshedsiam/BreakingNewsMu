import Button from '@material-ui/core/Button';
import './App.css';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <News></News>
    </div>
  );
}

export default App;
