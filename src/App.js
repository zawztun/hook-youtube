import React,{useState, useEffect} from 'react'
import Search from './components/Search'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)


  useEffect(()=>{
    onTermSubmit('news')
  },[])

  const onTermSubmit = async term =>{
       const response = await youtube.get('./search',{
         params:{
            q:term
         }
       })
       //console.log(response.data.items)
       setVideos(response.data.items)
       setSelectedVideo(response.data.items[0])
  }
  return (
    <div className='ui container' style = {{margin: '10px'}}>
          <Search onTermSubmit = {onTermSubmit}/>
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
