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


    // componentDidMount(){
    //   fetch('https://api.sleeper.app/v1/league/832458823871623168/users')
    //     .then(res => res.json())
    //     .then((res) => {
    //       this.setState({
    //         isLoaded: true,
    //         // items: json,
    //       })
    //     })
    //   console.log("testing")
    //   console.log(this.state.items)
    // };

    componentDidMount() {
      fetch("https://api.sleeper.app/v1/league/832458823871623168/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


    render(){
      var {isLoaded, items} = this.state;

      if(!isLoaded){
        return <div>Loading...</div>
      }

      else {
        console.log(items)

        return <div className="App">
          <ul>
              {items.map(item=>(
                <li key={item.user_id}>
                  {item.display_name}
                </li>
              ))}
          </ul>
      </div>
    }
      }


}

export default App;
