import './App.css';
import NavBar from "./components/nav-bar/NavBar"; 
import HeroSection from './components/hero-sect/HeroSection';
import ProblemSection from './components/prob-sect/ProblemSection';

const App = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <ProblemSection />
    </div>
  ); 
}

export default App;
