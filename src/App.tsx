import './App.css'
import Portfolio from './pages/portfolio';

import emailjs from '@emailjs/browser';
emailjs.init(import.meta.env.VITE_email_public_key);

const App = () => {
  return (
    <Portfolio />
  )
}

export default App;
