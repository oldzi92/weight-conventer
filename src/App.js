import "./App.css";
import { AppTitle } from "./Title/AppTitle";
import { WeightForm } from "./Form/WeightForm";
import { Output, WeightOutput } from "./Output/WeightOutput";
import { useState } from "react";

function App() {
  const [wartoscZeStanu, setWartoscZeStanu] = useState(0);

  return (
    <div className="App">
      <article>
        <AppTitle />

        <WeightForm onPoundsChange={(event) => setWartoscZeStanu(event.target.value)} />

        <Output label={"Gramy"}  oblicz = {(wartoscZeStanu * 453.59237)} />
        <Output label={"Kilogramy"} oblicz= {(wartoscZeStanu * 0.45359237)} />
        <Output label={"Uncje"} oblicz= {(wartoscZeStanu * 16)} />
        

      </article>
    </div>
  );
}

export default App;
