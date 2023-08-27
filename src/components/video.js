function Video({title, channelName = "PS Studio", views, year, verified, children}){
    let bgClassProperties = 'bg';
    return(
        <>
            <div className={bgClassProperties}>
                <img src="https://picsum.photos/160/90" alt="test img"/>
                <div>{title}{verified ? '✔️' : null}</div>
                <div>{channelName}</div>
                <div>
                    {views} , {year} 
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Video;