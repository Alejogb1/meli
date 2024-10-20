import {useState} from "react"

import Routes from "./Routes/index"
import GlobalSyles from "./styles/GlobalStyles"
import {Container} from "react-bootstrap"
import "./styles.css";

function App() {
  const [search, setSearch] = useState(null)
  const handlerSearch = product => setSearch(product)
  return (
    <Container>
      <Routes search={search} handlerSearch={handlerSearch}/>
      <GlobalSyles/>
    </Container>
  );
}
export default App;
