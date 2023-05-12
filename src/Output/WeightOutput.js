
export const Output = (props) => {
  // zobacz co to jest obiekt props w konsoli

  console.log(props);

  return (
    <div >
      <p style={{paddingLeft: "10px"}} >{props.label}: {props.oblicz} </p>
  
    </div>
  );
};

