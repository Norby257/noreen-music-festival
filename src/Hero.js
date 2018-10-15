import React from 'react' 
import './Hero.css'
const Hero = (props) => {
   return (
    <div className="jumbotron container-fluid" style={{backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/71hEtk3aCpL._SY355_.jpg)', 'minHeight': 400}}>
        THIS IS ARTIST HEADLINER COMPONENT
        <h2> The Artic Monkeys </h2>
        <p> They bet that you look good on the dance floor </p>
    </div>
   )
}

//  fix bug 
//   or can just show their logo?
//  render things similarly to how you did it with netflix UI 

export default Hero;