import logo from './logo.svg';
import './App.css';
import IPhone from './IPhone.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <IPhone title="Iphone X" price="750.00" pic="https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg"/>
        <IPhone title="Iphone 11" price="900.00" pic="https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg"/>
        <IPhone title="Iphone 12" price="1,100.00" pic="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021659000"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
