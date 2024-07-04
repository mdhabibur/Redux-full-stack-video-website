import React from 'react'
import edit from '../../assets/edit.svg'
import deleteImg from '../../assets/delete.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteVideoMutation } from '../../features/api/apiSlice'
import Error from '../ui/Error'
import Success from '../ui/Success'

const VideoDescription = ({video}) => {
    const {id, title, description, date} = video || {}

    const navigate = useNavigate()

    const [deleteVideo, {isLoading, isError, isSuccess, error}] = useDeleteVideoMutation();

    const handleDelete = async () => {
        try{
            await deleteVideo(id)
            navigate('/')

            console.log('Video deleted successfully');
        }catch(err){
            <Error message={`failed to delete: ${error}`} />
            console.error('Failed to delete video:', err);
        }
    }

  return (
    <div className="video_desc">
    <div className="row">
        <div className="col-md-8 p-2">
            <h5> {title} </h5>
            <p className="" style={{fontSize: '13px'}}>
                Uploaded on {date}
            </p>
        </div>
        <div className="col-sm-4 p-2">
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <Link to={`/videos/edit/${id}`} className="no-underline-link">
                        <div
                            className="d-flex align-items-center justify-content-center"
                        >
                            <img
                                className="p-1"
                                src={edit}
                                alt="edit"
                            />
                            <span className="no-underline-link">Edit</span>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to="#" className="no-underline-link" onClick={handleDelete}>
                        <div
                            className="d-flex align-items-center justify-content-center"
                        >
                            <img
                                className="p-1"
                                src={deleteImg}
                                alt="delete"
                            />
                            <span disabled={isLoading} className="no-underline-link">Delete</span>
                        </div>
                    </Link>

                    {isError && <Error message={error} />} 
                    {isSuccess && <Success message="video deleted" />}

                </div>
            </div>
        </div>
    </div>

    <p
        className="border-top"
        style={{fontSize: '16px', marginTop: '5px', 
            marginBottom: '15px', paddingTop: '10px',
            paddingBottom: '15px'}}
    >
        {description}
    </p>
</div>
  )
}

export default VideoDescription