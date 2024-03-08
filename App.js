import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import RecipeDetials from './components/RecipeDetials';
function App() {
  return (
    <>
    <Router>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recipes' element={<Recipes />} />
    <Route path='/recipes/:recipeId' element={<RecipeDetials/>} />
   </Routes>
   </Router>
   </>
  );
}

export default App;
