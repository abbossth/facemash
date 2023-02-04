import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Intro from './components/intro/intro';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Intro /> } ></Route>
      </Route>
    </Routes>
  );
}

export default App;
