import { Provider } from 'react-redux';
import './App.css'
import Navbar from './components/Navbar'
import ComicStrip from './components/comicStrip/ComicStrip';
import HomePage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';

import Modal from 'react-modal';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comic-strip' element={<ComicStrip />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
