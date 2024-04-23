import React from 'react'
import VideoDetails from '../videoDetails/VideoDetails'
import { useParams } from 'react-router-dom'
import { useGetSingleVideoQuery } from '../../features/api/apiSlice'
import { Spinner } from 'react-bootstrap'
import Error from '../ui/Error'

const Video = () => {
    const {videoId} = useParams()

    const {data: video, isLoading, isError, error} = useGetSingleVideoQuery(videoId)

    let content = null

    if(isLoading && !isError){
        content = <Spinner />
    }

    if(!isLoading && isError){
        content = <Error message = {error} />
    }

    if(!isLoading && !isError && video?.id){
        content = <VideoDetails video = {video} />
    }
    

  return (
        content
  )
}

export default Video