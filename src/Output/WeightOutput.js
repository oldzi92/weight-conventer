export const WeightOutputGrams = (props) => {
  return (
    <div>
      <p>Grams: <b>{props.value}</b> </p>
      
    </div>
  );
};

export const WeightOutputKilograms = (props) => {
  return (
    <div>
     
      <p>Kilograms: {props.value}</p>
      
    </div>
  );
};

export const WeightOutpuOunces = (props) => {
  return (
    <div>
        <p>Ounces: {props.value}</p>
    </div>
  );
};
