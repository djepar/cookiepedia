import Ingredients from "./Ingredients";

function ButtonIngr() {

    
    function handleClick(){
        return (
            <Ingredients />
    )
    };
  
    
    
        return (
            <button onClick={handleClick}>
                Click me
            </button>
          );
    
  
}

export default ButtonIngr;
