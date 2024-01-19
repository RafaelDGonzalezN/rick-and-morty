import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios"
import './App.css';

import Cards from "./components/Cards/Cards.jsx"
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import NotFound from './components/NotFound/NotFound';
import Favorites from './components/Favorites/Favorites';

function App() {
   
   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const onSearch = async (id) => {

      try {
         const {data} = await axios (`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (reason) {
         console.log(reason)
      }
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((ch) => {
            return ch.id !== (id)
         })
         )
      }

      const login = async (userData) => {
         try {
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const {data} = await axios(URL + `?email=${email}&password=${password}`)
               const { access } = data;
               setAccess(data);
               access && navigate('/home');
             
         } catch (error) {
            console.log(error);
         }
         };

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
