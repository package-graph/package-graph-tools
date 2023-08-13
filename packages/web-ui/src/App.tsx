import Graph from "./components/Graph"
import {Suspense} from "react";
// import Loading from "./components/Loading.tsx";

function App() {

  return (
      <Suspense>
        <Graph />
      </Suspense>
  )
}

export default App
