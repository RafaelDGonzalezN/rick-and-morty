import { useState } from 'react';
import styles from'./SearchBar.module.css'; 

const SearchBar = (props) => {

   const [id, setId] = useState("");

   const [existingIds, setExistingIds] = useState(new Set());

   const handleChange = (e) =>{
      setId(e.target.value)
   }
   const handleKeyPress = (e) => {
      if (e.key === "Enter") {
         agregarID(id); 
      }
    }

    const agregarID = (nuevoId) => {
      if (!existingIds.has(nuevoId)) { 
        setExistingIds(new Set(existingIds).add(nuevoId)); 
        props.onSearch(nuevoId); 
        setId(""); 
      } else {
        alert("Este ID ya existe. Por favor, ingresa un ID único."); 
      }
    }
    const IdAleatorio = () => {
      const randomId = Math.floor(Math.random() * 825) + 1; 
      setId(randomId.toString()); 

    };


   return (
      <div className={styles.SearchBar}>
         <input 
         type="search" 
         placeholder= "id..."  
         onChange={handleChange}
         onKeyPress={handleKeyPress} 
         value={id}
         />
         <button onClick={() => agregarID(id)}>Agregar</button>
         <button onClick={IdAleatorio}>Random</button>
      </div>
   );
}

export default SearchBar;