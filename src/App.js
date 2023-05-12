import "./App.css";
import { AppTitle } from "./Title/AppTitle";
import { WeightForm } from "./Form/WeightForm";
import { Output } from "./Output/WeightOutput";
import { useState } from "react";
import classes from "./style.module.css";

function App() {
  const [wartoscZeStanu, setWartoscZeStanu] = useState(0);

  return (
    <div className={classes.appContainer} style={{ minHeight: "100vw" }}>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          gap: 20,
          width: "50vw",
        }}
      >
        <div className={classes.titleConverter}>
          <AppTitle />
        </div>

        <div className={classes.inputConverter}>
          <WeightForm
            value={wartoscZeStanu}
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
