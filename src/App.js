import "./App.css";
import { AppTitle } from "./Title/AppTitle";
import { WeightForm } from "./Form/WeightForm";
import { Output } from "./Output/WeightOutput";
import { useState } from "react";
import classes from "./style.module.css";

function App() {
  const [wartoscZeStanu, setWartoscZeStanu] = useState(0);

  return (
    <div className={classes.appContainer}>
      <article>
        <div className={classes.titleConverter}>
          <AppTitle />
        </div>

        <div className={classes.inputConverter}>
          <WeightForm
            onPoundsChange={(event) => setWartoscZeStanu(event.target.value)}
          />
        </div>
        <div className={classes.gramsStyle}>
          <Output label={"Grams"} oblicz={wartoscZeStanu * 453.59237} />
        </div>
        <div className={classes.kilogramsStyle}>

          <Output label={"Kilograms"} oblicz={wartoscZeStanu * 0.45359237} />
        </div>
        <div className={classes.ouncesStyle}>
          <Output label={"Ounces"} oblicz={wartoscZeStanu * 16} />

        </div>
      </article>
    </div>
  );
}

export default App;
