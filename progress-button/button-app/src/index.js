import React from 'react'
import {render} from 'react-dom'
import './estilo.css'
import {ReactComponent as Chevron} from './imagesAndIcons/chevron.svg'
import {ReactComponent as Check} from './imagesAndIcons/check.svg'
import {ReactComponent as Cross} from './imagesAndIcons/cross.svg'

class Button extends React.Component {

state= {
    classes: "progress",
    text:"SUBMIT",
    progress: 0,
}

timer(){
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, 20)  
    });
}

async test() {
    const stateRef = this.state;
    let {text, classes} = stateRef;
    this.setState({classes});
    if (this.state.progress < 101)
    {await this.timer();
    let {progress} = this.state;
    progress += 1;
    this.setState({progress});
    this.test();
    }else{
        const _50_50 = (Math.random() * 100) >= 50; 
        text = _50_50 ? "ERROR":"SUCCESS";
        classes = _50_50 ? "progress error":"progress success";
        const progress= 0;
        this.setState({text, classes, progress})
    };

}

getIcon(){
    const text = this.state.text
    const options = {
        SUBMIT: <Chevron className="icon"/>,
        ERROR: <Cross className="icon"/>,
        SUCCESS: <Check className="icon"/>,
    }

    return options[text] || "";
}


render(){
 return ( 
 <div className="container">
 <button 
 className={this.state.classes} 
 style={{'--width':this.state.progress}} 
 data-label={this.state.text} 
 onClick={()=>this.test()}>
     {this.state.text}{` `}
     {this.getIcon()}
 </button>
 </div> )
}
}


render(<Button/>, document.querySelector('#root'));