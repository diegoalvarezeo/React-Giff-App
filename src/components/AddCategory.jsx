
import { useState } from "react"
export const AddCategory = ({onNewCategory}) => {
  //Manejar el estado del input
  const [inputValue, setinputValue] = useState('');
  const onInputChange = (event)=>{
    setinputValue(event.target.value);
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length<=1) return;
    //setcategories(categories=>[inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue(''); 
}
  
  
  
    return (
    <form onSubmit={onSubmit}>
         <input type="text" placeholder="Buscar Gift" value={inputValue} onChange={onInputChange}></input>
    </form>
  
  )
}
