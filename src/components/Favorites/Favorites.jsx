import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards} from "../../redux/actions";
import { useState } from "react";
import styles from "./Favorites.module.css"

const Favorites = (props) => {
  const {myFavorites} = props;

  const [aux, setAux] = useState(false)
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
    setAux(!aux)
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }

  return (
    <div> 
      <select onChange={handleOrder} className={styles.select}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter} className={styles.select}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div  className={styles.cards}>
        {myFavorites.map((ch) => {
        return <Card
        key = {ch.id}
        id = {ch.id}
        name ={ch.name} 
        status ={ch.status} 
        species ={ch.species} 
        gender ={ch.gender} 
        origin ={ch.origin.name} 
        image ={ch.image} 
       />
      })}
      </div>
    </div>
 );
}

const mapStateToProps = (state) => {
  return {myFavorites: state.myFavorites}
}
export default connect(mapStateToProps,null)(Favorites)