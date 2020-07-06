import React from 'react'
import './Card.css'
import {ReactComponent as Simbolo} from '../images/caret.svg'

class Card extends React.Component {
state= {
    divClasses: "colorFilter"
}
mouseEnter (e) {
    console.log(this);
    let {divClasses} = this.state
    divClasses = "colorFilter down"
    this.setState({divClasses})
}
mouseLeave (e) {
    console.log(this);
    let {divClasses} = this.state
    divClasses = "colorFilter"
    this.setState({divClasses})
}

render(){
 return ( 
 <div className="cardDiv"
 onMouseEnter={(e)=>this.mouseEnter(e)} 
 onMouseLeave={(e)=>this.mouseLeave(e)} 
 >
 <div className={this.state.divClasses}></div>
 <Simbolo className="simbolo" />
 <img className="cardImage"
 src={this.props.imagePath} 
 alt={this.props.imageAlt}/>
 <div className="etiqueta">
    <h2>{this.props.name}</h2>
    <h3>{this.props.position}</h3>
 </div>
 </div>
 )
}
}

export default Card