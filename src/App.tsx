import styled from 'styled-components';
import Header from './modules/Header';

const App = () => {
  return (
    <Main className="App">
      <Header />
    </Main>
  );
}

export default App;

const Main = styled.div`
  text-align: center;
`;
