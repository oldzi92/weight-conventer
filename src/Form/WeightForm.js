export const WeightForm = (props) => {
    return (
      <form>
        <input
          //   value={} // musisz tutaj cos uzupelnić - skorzystaj z materiałów z zajeć
          value={props.value} 
          onChange={props.onPoundsChange}
          type="text"
          placeholder="Enter punds"
          
        />
      </form>
    );
  };