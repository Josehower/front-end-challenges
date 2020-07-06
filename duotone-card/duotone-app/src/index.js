import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Card from './components/Card'
import './baseStyle.css'



class App extends React.Component{
render(){

 return(
<div className="appWrapper">
 <Header />
 <div className="imageGrid">
 <Card 
  imagePath={require("./images/image-1.jpg")} 
  imageAlt="foto1"
  name="Maria Godoy"
  position="Founder"
  />
 <Card 
  imagePath={require("./images/image-3.jpg")} 
  imageAlt="foto2"
  name="Tiago Monteiro"
  position="CCO"
  />
 <Card 
  imagePath={require("./images/image-2.jpg")} 
  imageAlt="foto3"
  name="Ana Hauckings"
  position="CTO"
  />
  </div>
</div>
 )
}
}   







ReactDOM.render(<App />, document.getElementById('root'));

