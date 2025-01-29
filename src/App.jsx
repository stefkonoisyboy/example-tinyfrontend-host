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

  const handleValueChange = (event) => {
    console.log(event.detail);
    setCounter(event?.detail?.key);
  };

  useEffect(() => {
    loadTinyFrontend();

    window.addEventListener("valueChange", handleValueChange);

    return () => window.removeEventListener("valueChange", handleValueChange);
  }, []);

  return (
    <div className="App">
      {ExampleTinyFrontend ? (
        <>
          <ExampleTinyFrontend name="First" />
          <p>
            Hello! I am the host application and you clicked the tiny-frontend{" "}
            {counter} times
          </p>
        </>
      ) : (
        <strong>Loading...</strong>
      )}
    </div>
  );
}

export default App;
