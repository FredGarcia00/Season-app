import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay/SeasonDisplay';
import Spinner from './Spinner/Spinner';

class App extends Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) =>  this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
     return  this.state.errorMessage && !this.state.lat ? 
        <div> {this.state.errorMessage} </div> : 
    
        !this.state.errorMessage && this.state.lat ? 
        <div> <SeasonDisplay lat={this.state.lat} />  </div> : 
         <Spinner
         message="Please accept location request"/>;
    }
    //React says we have to define render!!
    render() {
        return (
            <div className="border red">
               {this.renderContent()} 
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
    );

