import applogo from './images/declutter.png'; // import the images from out images folder
import ImageState from './Image_state';
import './App.css';
import Tasks from './Tasks';
import Button from './Button'



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" src={applogo} alt={"app logo"} />
      </div>
      <div className="App-body">
          <ImageState />
          <div className='sized-box'></div>
          <Tasks/>
      </div>
        <Button/>
    
      </div>
  );
}
// here we see the img tag and i gave it a className, this is for CSS, and inside src={} is the import name from the top

export default App;


