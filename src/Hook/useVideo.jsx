import {useState, useEffect} from 'react'
import youtube from '../apis/youtube'

const useVideo = (initialState) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        search(initialState)
      },[initialState]);

      const search = async (term) =>{
           const response = await youtube.get('./search',{
             params:{
                q:term
             }
           })
           //console.log(response.data.items)
           setVideos(response.data.items)
        }
    return [videos, search]
}

export default useVideo
