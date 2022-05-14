import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FirstHero from './componebts/FirstHero';
import Navbar from './componebts/Navbar';
import NewsPage from './componebts/NewsPage';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={< FirstHero />} />
          <Route path='/NewsPage/:id' element={<NewsPage />} />
          <Route />
        </Routes>
      
    </Router>
    </>
    
  );
}

export default App;
