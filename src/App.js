import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FirstHero from './componebts/FirstHero';
import Login from './componebts/Login';
import Navbar from './componebts/Navbar';
import NewsPage from './componebts/NewsPage';
import Signup from './componebts/Signup';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={< FirstHero />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path=':title_slug.:id' element={<NewsPage />} />
          <Route />
        </Routes>
      
    </Router>
    </>
    
  );
}

export default App;
