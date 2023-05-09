import './App.css';
import { AppTitle } from './Title/AppTitle';
import { WeightForm } from './Form/WeightForm';
import { WeightOutpuOunces, WeightOutput, WeightOutputGrams, WeightOutputKilograms } from './Output/WeightOutput';


function App() {
  return (
    <div className="App">
     <article>

<AppTitle/>

<WeightForm/>

<WeightOutputGrams/>
<WeightOutputKilograms/>
<WeightOutpuOunces/>


     </article>
  

    </div>
  );
}

export default App;
