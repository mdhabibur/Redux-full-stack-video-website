import React from 'react'
import EditVideo from '../edit/EditVideo'
import { useParams } from 'react-router-dom'
import { useGetSingleVideoQuery } from '../../features/api/apiSlice'

const Edit = () => {
  const {videoId} = useParams()
  const {data: video, isLoading, isError, error} = useGetSingleVideoQuery(videoId)

  return (
    <EditVideo video={video} />
  )
}

export default Edit