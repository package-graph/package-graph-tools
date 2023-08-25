import GraphView from "./components/GraphView.tsx"
import {Suspense, useState} from "react";
import Header from "./components/Header.tsx";

function App() {
const [visible, setVisible] = useState(false);
const [type, setType] = useState('graph')
  return (
      <Suspense>
          <Header visible={visible} setVisible={setVisible} type={type} setType={setType} />
          <GraphView visible={visible} setVisible={setVisible} type={type}  />
      </Suspense>
  )
}

export default App
