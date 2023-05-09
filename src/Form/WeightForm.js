import { WeightOutpuOunces, WeightOutputGrams, WeightOutputKilograms } from "../Output/WeightOutput";



export const WeightForm = () => {
    const [counter, setCounter] = useState(0);

    return <form>
        <input 
        type='text' 
        placeholder="Enter punds"
           
        />
        
    <WeightOutputGrams onClick={()=> setCounter(counter )} />
        </form>
}