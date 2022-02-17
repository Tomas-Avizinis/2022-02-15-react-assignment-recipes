import './App.css';
import TopHeader from "./components/TopHeader";
import {Route, Routes} from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipe";
import SingleRecipe from "./pages/SingleRecipe";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import {useState} from "react";
import Footer from "./components/Footer";
import MainContext from "./context/MainContext";


function App() {

    const [currentRecipe, setCurrentRecipe]=useState();
    const [favourites, setFavourites]=useState([]);

    const favouriteOnOff=(id)=>{
        if (favourites.includes(id)) {
            const newFavs=favourites.splice(favourites.indexOf(id),1);
            setFavourites([...favourites.splice(favourites.indexOf(id),1)]);
        } else setFavourites([...favourites, id]);
    }


  return (

      <MainContext.Provider value={{currentRecipe, setCurrentRecipe, favourites, setFavourites, favouriteOnOff}}>
          <div className="App">
              <TopHeader />
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/create' element={<CreateRecipe />} />
                  <Route path='/favourites' element={<Favourites />} />
                  <Route path='/recipe/:recipe' element={<SingleRecipe />} />
              </Routes>
              <Footer />
          </div>
      </MainContext.Provider>

  );
}

export default App;
