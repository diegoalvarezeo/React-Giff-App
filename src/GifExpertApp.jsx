import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch']);
    const word = 'Valorant';
    const onAddCategory = (newCategory)=>{
        if(categories.includes( newCategory)) return;
        setcategories([newCategory,...categories])
        /* setCategories(cat=>[...cat,'Valorant']) */
    }
    return (
    <>
    <h1>GifExpertApp</h1>
    {/* input */}
    <AddCategory 
    //setcategories={setcategories}
      onNewCategory={onAddCategory }

    />

    {/* Listado de gifts */}
    <button onClick={onAddCategory}>Agregar</button>
    
    {categories.map(category =>(
            
            <GifGrid key={category} category={category}/>
        )        
            
    )}
        
        

    
        {/* Gif items */}





    </>
  )
}
