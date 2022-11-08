import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import NotFound from './pages/NotFound';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<SearchBooks />} />
          <Route exact path="/saved" element={<SavedBooks />} />
          <Route element={<NotFound />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
