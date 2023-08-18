import Graph from "./components/Graph"
import {Suspense, useState} from "react";
import Header from "./components/Header.tsx";

function App() {
const [visible, setVisible] = useState(false);
  return (
      <Suspense>
          <Header visible={visible} setVisible={setVisible} />
          <Graph  visible={visible} setVisible={setVisible} />
      </Suspense>
  )
}

export default App
