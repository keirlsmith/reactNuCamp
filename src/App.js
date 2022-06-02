import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampSitesDirectoryPage from './pages/CampsitesDirectoryPage';
import logo from './logo.svg';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import './App.css';

function App() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
    }, [dispatch]);

    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage />} />
                <Route path='contact' element={ <ContactPage />} />
                <Route path='directory' element={ <CampSitesDirectoryPage />} />
                <Route path='about' element={ <AboutPage /> } />
                <Route 
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage / >}
                    />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
