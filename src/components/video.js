function Video({title, channelName = "PS Studio", views, year}){
    let bgClassProperties = 'bg';
    return(
        <>
            <div className={bgClassProperties}>
                <img src="https://picsum.photos/160/90" alt="test img"/>
                <div>{title}</div>
                <div>{channelName}</div>
                <div>
                    {views} , {year} 
                </div>
            </div>
        </>
    )
}

export default Video;