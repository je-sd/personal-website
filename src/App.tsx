import styled from 'styled-components';
import Home from './modules/Home';

const App = () => {
  return (
    <Main className="App">
      <Home />
    </Main>
  );
}

export default App;

const Main = styled.div`
  text-align: center;
`;
