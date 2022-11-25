import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }


    componentDidMount(){
      fetch('https://api.sleeper.app/v1/league/<league_id>')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
      console.log("testing")
    
    };

    render(){
      var {isLoaded, items} = this.state;

      if(!isLoaded){
        return <div>Loading...</div>
      }

      else {

        return <div className="App">
          <ul>
              {items.map(item=>(
                <li key={item.user_id}>
                  {item.username}
                </li>
              ))}
          </ul>
      </div>
    }
      }


}

export default App;
