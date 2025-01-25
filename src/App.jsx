import { useEffect, useState } from "react";
import { loadExampleTinyFrontendClient } from "@tiny-frontend/example-tiny-frontend-contract";
import "./App.css";

function App() {
  const [ExampleTinyFrontend, setExampleTinyFrontend] = useState();

  const [counter, setCounter] = useState(0);

  const loadTinyFrontend = async () => {
    const ExampleTinyFrontend = await loadExampleTinyFrontendClient(
      "https://tiny-frontent-api-cloudlare-example.stefko-noisy-boy.workers.dev/api"
    );

    setExampleTinyFrontend(() => ExampleTinyFrontend);
  };

  useEffect(() => {
    loadTinyFrontend();
  }, []);

  return (
    <div className="App">
      {ExampleTinyFrontend ? (
        <ExampleTinyFrontend name="First" />
      ) : (
        <strong>Loading...</strong>
      )}
      <p>Hello! I am the host application</p>
    </div>
  );
}

export default App;
