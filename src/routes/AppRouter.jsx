import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Superhero from '../pages/Superhero';

const AppRouter = () => {
  return (
    <>
        <Router>
        <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} /> 
                <Route path='/search' element={<Search />} />
                <Route path='/superhero/:id' element={<Superhero />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRouter