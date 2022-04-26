////////////
///PIPING///
////////////

// Node.js program to demonstrate the     
// readable.pipe() method
   
// Accessing fs module
let fs = require("fs");
  
// Create a readable stream
let readable = fs.createReadStream('input.txt');
  
// Create a writable stream
let writable = fs.createWriteStream('output.txt');
  
// Calling pipe method
readable.pipe(writable);
  
console.log("Program Ended");

// Output.txt has all contents of input.txt


///////////////////////////////////
///Create a server using express///
///////////////////////////////////

// Accessing express module
let express = require("express");

// Defining app variable as instance of express
let app = express();

// Accessing server module and creating server at the same time
let server = require("http").createServer(app)

// How to listen on a specified port (Port 8081) in the example
app.listen(8081)

////////////////////////////////
///// App.js Props Example /////
////////////////////////////////

// Prop used in props folder//

import logo from './logo.svg';
import './App.css';
import IPhone from './props/IPhone.js';

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

/////////////////////////////////
/// App.js Component Example ///
///////////////////////////////

// Clock Component Example //

import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';

function App() {
  const snacks = [" Kit-Kat", "Pringles", "Kinder Surprise", "Oreos"];
  return (
    <div className="App">
      <Clock/>
    </div>
  );
}

export default App;
