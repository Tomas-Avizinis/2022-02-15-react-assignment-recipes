import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipe";
import SingleRecipe from "./pages/SingleRecipe";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import {useState} from "react";
import MainContext from "./context/MainContext";


function App() {

    const [currentRecipe, setCurrentRecipe]=useState();
    const [currentId, setCurrentId]=useState();
    const [favourites, setFavourites]=useState([]);
    const [location, setLocation]=useState('main');

    const favouriteOnOff=(id)=>{
        if (favourites.includes(id)) {
            setFavourites([...favourites.filter(item=>item!==id)]);
        } else setFavourites([...favourites, id]);
    }


  return (

      <MainContext.Provider value={{currentRecipe, setCurrentRecipe, favourites, setFavourites, currentId, setCurrentId, favouriteOnOff, location, setLocation}}>
          <div className="App">
              <Header />
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/create' element={<CreateRecipe />} />
                  <Route path='/favourites' element={<Favourites />} />
                  <Route path='/recipe/:recipe' element={<SingleRecipe />} />
              </Routes>

          </div>
      </MainContext.Provider>

  );
}

export default App;
