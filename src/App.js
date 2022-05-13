import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampSitesDirectoryPage from './pages/CampsitesDirectoryPage';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage />} />
                <Route path='contact' element={ <ContactPage />} />
                <Route path='directory' element={ <CampSitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
