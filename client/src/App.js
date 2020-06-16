import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Signin from './Core/Signin';
import Main  from './Core/Main';
import './App.css';




const particlesOptions ={
               particles: {
                    number: {
                     value : 200,
                     density: {
                     enable: true,
                     value_area: 800
                              }
                            }
                          }
                       }

class App extends Component {



render()
 {
   return (

      <div className="App">
        <Main/>
        <Particles className='particles'
        params={particlesOptions}
        />

      </div>

 );
}

}

export default App;
