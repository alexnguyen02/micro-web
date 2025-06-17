import "./HeroSection.css"; 

const HeroSection = () => {
  return(
    <div className="hero-sect">
      <h1 className="hero-header slide-down">Less waste, more wear</h1>
      <h3 className="slide-down">Stop buying clothes you'll never wear by tracking your wearing habits & discovering new ways to style your closet. </h3>
      <input className="slide-down" type="email" placeholder="Enter your email"/>
      <button className="slide-down">Join the waitlist</button>
    </div>
  ); 
}

export default HeroSection; 