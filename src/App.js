import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GithubFinderNavbar from './components/layouts/GithubFinderNavbar';
import GithubFinderFooter from './components/layouts/GithubFinderFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import { GithubProvider } from './components/context/github/GithubContext';

function App() {
  return (
    <BrowserRouter>
      <GithubProvider>
        <div className='flex flex-col justify-between h-screen'>
          <GithubFinderNavbar />

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>

          <GithubFinderFooter />
        </div>
      </GithubProvider>
    </BrowserRouter>
  );
}

export default App;
