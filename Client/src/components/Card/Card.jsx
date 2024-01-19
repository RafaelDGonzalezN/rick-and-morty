import { Link, useParams } from 'react-router-dom';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';

const Card = (props) => {
  const {id, name, status, species, gender, origin,
     image, onClose,addFav, removeFav, myFavorites} = props;

     
  const [isFav, setIsFav] = useState(false);
  const {pathname} =  useParams()
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  
    const handleFavorite = () =>{
      if(isFav){
        setIsFav(false)
        removeFav(id)
      } else{
        setIsFav(true)
        addFav(props)
      }
    }


  return (
    <div className={styles.card}>
      <img src={image}alt='' />
      {
        pathname !== "/favorites" && <button className={styles.button} onClick={() => onClose(id)}> X </button>
      }
      <Link to = {`/detail/${id}`}>
        <h2 className={styles.name}>{name} | {id}</h2>
      </Link>
      <div className={styles.inf}>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      </div>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) =>{
    dispatch(addFav(character))
  },
   removeFav: (id) =>{
    dispatch(removeFav(id))
   }
  }
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)