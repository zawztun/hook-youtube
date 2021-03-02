import React,{useState, useEffect} from 'react'
import Search from './components/Search'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import useVideo from './Hook/useVideo'
function App() {

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideo('news')
       
       useEffect(()=>{
        setSelectedVideo(videos[0])
       },[videos])
  
  return (
    <div className='ui container' style = {{margin: '10px'}}>
          <Search onTermSubmit = {search}/>
      <div className = 'ui grid'>
        <div className = 'ui row'>
            <div className = 'eleven wide column'>
              <VideoDetail 
                  video = {selectedVideo}/>      
            </div>
            <div className = 'five wide column'>
            <VideoList 
                videos = {videos}
                selectedVideo = {setSelectedVideo}
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
