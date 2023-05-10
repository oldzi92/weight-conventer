
export const Output = (props) => {
  // zobacz co to jest obiekt props w konsoli

  console.log(props);

  return (
    <div style= {{display: "block"}}>
      <p style={{ display: "block"}}>{props.label}: {props.oblicz} </p>
  
    </div>
  );
};

// export const WeightOutput = (props) => {
//   return (
//     <div>
//       <p>Grams: <b>{props.value}</b> </p>
//       <p>Kilograms: <b>{props.value}</b></p>
//       <p>Ounces: <b>{props.value}</b></p>

//     </div>
//   );
// };
