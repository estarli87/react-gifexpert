import {useState} from 'react';
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Sakura']);

    const onAddCategory = ( newCategory) => {

      console.log(newCategory);

      if(categories.includes(newCategory)) return;

      setCategories([ newCategory,...categories])

      //setCategories( cat => [...cat, 'Death note'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        { /* Input */}
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory = { (value) => onAddCategory(value) }
          currentCategories = {categories}
        />

        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
            { categories.map( category =>
                   (
                      <GifGrid 
                        key={category} 
                        category= {category}
                      />

                  )) 
            }

    </>
  )
}
