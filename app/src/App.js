import {useState} from "react"

import Routes from "./Routes/index"
function App() {
  const [search, setSearch] = useState(null)
  const handlerSearch = (product) => setSearch(product)
  return (
    <div className="App">
      <Routes search={search} handlerSearch={handlerSearch}/>
    </div>
  );
}

export default App;
