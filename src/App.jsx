import { useEffect, useState } from 'react';
import './App.css';
import Cards from "./components/Cards/Cards.jsx"
import Nav from './components/Nav/Nav.jsx';
import axios from "axios"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import NotFound from './components/NotFound/NotFound';
import validation from './components/Form/validation';
import Favorites from './components/Favorites/Favorites';
function App() {

   
   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const EMAIL = "david@gmail.com"
   const PASSWORD = "hola123"
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      setCharacters(
         characters.filter((ch) => {
            return ch.id !== Number(id)
         })
         )
      }
      const login = (userData) => {
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }else {
            window.alert("Email o password incorrectos")
         }
      }
      const logout = () => {
         setAccess(false);
         navigate('/');
       };
      useEffect(() => {
         !access && navigate('/');
      }, [access]);

      return (
         <div className='App'>
         {pathname!=="/" && <Nav onSearch={onSearch} onLogout={logout}/>}
         <Routes>
            <Route path={'/'} element = {<Form login={login}/>}/>
            <Route path={'/home'} element = {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={'/about'} element = {<About/>}/>
            <Route path={'/detail/:id'} element = {<Detail/>}/>
            <Route path={'/favorites'} element = {<Favorites/>}/>
            <Route path="*" element={<NotFound/>}/>
         </Routes>
      </div>
   );
}

export default App;
