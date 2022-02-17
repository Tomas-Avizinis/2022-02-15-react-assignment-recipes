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

  return (

      <MainContext.Provider value={{currentRecipe, setCurrentRecipe, favourites, setFavourites}}>
          <div className="App">
              <TopHeader />
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/createrecipe' element={<CreateRecipe />} />
                  <Route path='/favourites' element={<Favourites />} />
                  <Route path='/singlerecipe/:recipe' element={<SingleRecipe />} />
              </Routes>
              <Footer />
          </div>
      </MainContext.Provider>

  );
}

export default App;
