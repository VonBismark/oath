import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const miniMallUrl = 'https://mini-mall-598ac.firebaseapp.com/';
    const spreadProps = {
      src: miniMallUrl,
      height: '100%',
      id: 'iframe_mini_mall',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://imagehost.vendio.com/a/35190793/view/GG1PgLG.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mini-Mall</h1>
        </header>

        <section className="mini-mall-section">
          <div className="mini-mall-webview">
           {typeof Windows !== 'undefined' ? <x-ms-webview class="checkout-interface" {...spreadProps} /> : <iframe title="minimall" className="checkout-interface" {...spreadProps} />}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
