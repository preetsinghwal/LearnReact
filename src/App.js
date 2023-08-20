import './components/video.css';
import Video from './components/video';
import './App.css'

function App() {
  let cardObj = {
    title : "Learn React Js",
    channelName : "PS Studio",
    views : "1k",
    year : '! year ago'
  }
  return (
    <div className='App'>
      <Video {...cardObj}></Video>
      <Video 
       title= "Chapter 1"
       channelName = "PS Studio"
       views = "2k"
       year = "1year ago"
      ></Video>
      <Video 
       title= "Chapter 2"
       channelName = "PS Studio"
       views = "3k"
       year = "1 year ago"
      ></Video>
      <Video 
       title= "Chapter 3"
       channelName = "PS Studio"
       views = "3k"
       year = "1year ago"
      ></Video>
    </div>
  );
}

export default App;
