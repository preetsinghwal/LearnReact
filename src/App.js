import './components/video.css';
import Video from './components/video';
import './App.css';
import vidoesList from './data/data';
import PlayButton from './components/playButton';

function App() {
  
  return (
    <div className='App'>
      <div className='videoListContainer' onClick={() => console.log('from parent')}>
      {
        vidoesList.map((video,key) => {
          return(
            <Video 
            key={key}
            title= {video.title}
            channelName = {video.channelName}
            views = {video.views}
            year = {video.year}
            verified = {video.verified}
          >
            <PlayButton onPlay = {() => console.log('play', video.title)} onPause = {() => console.log('Pause', video.title)}>{video.title}</PlayButton>
          </Video>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
