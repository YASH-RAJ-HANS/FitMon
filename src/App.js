import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Errorpage from './Components/Errorpage/Errorpage';
import Profile from './Components/profile-page/Profile';

function App() {
  return (
    <div className="App">
      <Errorpage/>
      
      <Profile/>
      <Footer/>
      
    </div>
  );
}

export default App;
