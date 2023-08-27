import './playButton.css';

function PlayButton({children, onPlay, onPause}){
    let videoPlaying = false; // just for learning , should not use in real projects
    const handleClick = (e) => {
        e.stopPropagation(); // prvent event bubbling
        console.log(e)
        if(videoPlaying) onPause() //Custom Event
        else onPlay()

        videoPlaying = !videoPlaying
    }
    return(
        <button onClick={handleClick}>{children}</button>
    )
}

export default PlayButton