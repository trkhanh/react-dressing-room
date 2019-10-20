import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contain from './components/model/contain'
import Store from "./components/store/store";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {
        topclothes: '',
        botclother: '',
        shoes: '',
        handbags: '',
        necklaces: '',
        hairstyle: '',
        background: ''
      }
    }
  }

  transferItem = (item) => {
    const type = item.type;
    this.setState({
      items: {
        ...this.state.items,
        [type]: item
      }
    })
  }

  resetItem = () => {
    this.setState({
      items: {
        topclothes: '',
        botclother: '',
        shoes: '',
        handbags: '',
        necklaces: '',
        hairstyle: '',
        background: ''
      }
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Dressing room</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8'>
              <Store transferItem={this.transferItem}></Store>
            </div>
            <div className='col-md-4'>
              <Contain choosenItem={this.state.items}></Contain>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
