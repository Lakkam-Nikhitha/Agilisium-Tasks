import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import BasicTabs from './tabs/TaskTabs';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <BasicTabs />       
      </Container>
    </div>
  );
}

export default App;
