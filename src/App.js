import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LukeHome from './pages/LukeHome';
import MeganHome from './pages/MeganHome';

const App = () => {
    const hostname = window.location.hostname;

    return (
        <Router>
            <Routes>
                {hostname === 'lukefedders.site' ? (
                    <Route path="/" element={<LukeHome />} />
                ) : (
                    <Route path="/" element={<MeganHome />} />
                )}
                {/* Additional routes can go here */}
            </Routes>
        </Router>
    );
};

export default App;
