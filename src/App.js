import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from "./pages/Home"
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>

          <div className="flex flex-col justify-between h-screen">

            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/user/:id" element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
