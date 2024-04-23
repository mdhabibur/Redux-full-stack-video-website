import React, { useState } from 'react'
import { useEditVideoMutation } from '../../features/api/apiSlice'
import Error from '../ui/Error'
import Success from '../ui/Success'

const EditVideo = ({video}) => {

    const {id, title, description, author, date, duration, views, link, thumbnail } = video || {}

    const [editVideo, {isLoading, isError, error, isSuccess}] = useEditVideoMutation()

    const [videoData, setVideoData] = useState({
		title: title,
		description: description,
		author: author,
		date: date,
		duration: duration,
		views: views,
		link: link,
		thumbnail:thumbnail

	 })


     const handleChange = (e) => {
		const {name, value} = e.target
		setVideoData((prevData) => ({
			...prevData,
			[name]: value
		}))
	 }

   const handleSubmit = async (e) => {
       e.preventDefault()

       if(!videoData.title || !videoData.link){
           <Error message='Please fill out all fields' />
           console.log('Failed to update new Video');
           return;
       }

       try{
           await editVideo({id, videoData}).unwrap()
           console.log('Video updated successfully');

       }catch(error){
           console.error('Failed to update video:', error);
       }

   }


  return (
    // <!-- Edit A Video Form  -->

    <>
    {/* <!-- Add A Video Form  --> */}
    <section className="addVideoSection my-5" id="addVideoSection">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-4">
                    <h6>Add A New Video</h6>
                    <p>Please fill up the form to add new video</p>

                    <div className="addNewVideoForm shadow rounded-3 ">
                        <form className="p-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputTitle" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputTitle"
                                            name="title"
                                            value={videoData.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputAuthor" className="form-label">
                                            Author
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputAuthor"
                                            name="author"
                                            value={videoData.author}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputDescription">Description</label>
                                <textarea
                                    className="form-control"
                                    id="exampleInputDescription"
                                    rows="3"
                                    name="description"
                                    value={videoData.description}
                                    onChange={handleChange}
                                ></textarea>
                                <p style={{fontSize: '12px' }}>
                                    Brief description for your video
                                </p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputYoutubeLink" className="form-label">
                                    Youtube Link
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputYoutubeLink"
                                    name="link"
                                    value={videoData.link}
                                    onChange={handleChange}

                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputThumbnailLink"
                                    className="form-label"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputThumbnailLink"
                                    name="thumbnail"
                                    value={videoData.thumbnail}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputDate" className="form-label">
                                    Date
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDate"
                                    name="date"
                                    value={videoData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label
                                            htmlFor="exampleInputDuration"
                                            className="form-label"
                                        >
                                            Duration
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputDuration"
                                            name="duration"
                                            value={videoData.duration}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="exampleInputViews" className="form-label">
                                            Views
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputViews"
                                            name="views"
                                            value={videoData.views}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading? "updating video...": "update video"}
                            </button>

                        </form>
                        
                        {isError && <Error message={`failed to update new video: ${error}`} />}
                        {isSuccess && <Success message="video updated successfully" />}


                    </div>
                </div>
            </div>
        </div>
    </section>
</>

    // <section className="addVideoSection my-5" id="addVideoSection">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-12 pt-4">
    //                 <h6>Edit Video</h6>
    //                 <p>Please fill up the form to edit the video</p>

    //                 <div className="addNewVideoForm shadow rounded-3 ">
    //                 <form className="p-3">

    //                     <div className="mb-3">

    //                         <div className="row">
    //                             <div className="col-md-6">
    //                                 <label htmlFor="exampleInputTitle" className="form-label">Title</label>
    //                                 <input type="text" className="form-control" id="exampleInputTitle" name="title"/>
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <label htmlFor="exampleInputAuthor" className="form-label">Author</label>
    //                                 <input type="text" className="form-control" id="exampleInputAuthor" name="author" />
    //                             </div>
    //                         </div>


    //                     </div>


    //                     <div className="form-group mb-3">
    //                         <label htmlFor="exampleInputDescription">Description</label>
    //                         <textarea className="form-control" id="exampleInputDescription"  rows="3" name="description"></textarea>
    //                         <p style={{fontSize: '12px'}}>Brief description for your video</p>
    //                     </div>

    //                     <div className="mb-3">
    //                         <label htmlFor="exampleInputYoutubeLink" className="form-label">Youtube Link</label>
    //                         <input type="text" className="form-control" id="exampleInputYoutubeLink" name="youtubeLink" />
    //                     </div>

    //                     <div className="mb-3">
    //                         <label htmlFor="exampleInputThumbnailLink" className="form-label">Thumbnail Link</label>
    //                         <input type="text" className="form-control" id="exampleInputThumbnailLink" name="thumbnailLink" />
    //                     </div>

    //                     <div className="mb-3">
    //                         <label htmlFor="exampleInputDate" className="form-label">Date</label>
    //                         <input type="text" className="form-control" id="exampleInputDate" name="date" />
    //                     </div>

    //                     <div className="mb-3">

    //                         <div className="row">
    //                             <div className="col-md-6">
    //                                 <label htmlFor="exampleInputDuration" className="form-label">Duration</label>
    //                                 <input type="text" className="form-control" id="exampleInputDuration" name="duration" />
    //                             </div>
    //                             <div className="col-md-6">
    //                                 <label htmlFor="exampleInputViews" className="form-label">Views</label>
    //                                 <input type="text" className="form-control" id="exampleInputViews" name="views" />
    //                             </div>
    //                         </div>

    //                     </div>


    //                     <button type="submit" className="btn btn-primary">Update</button>
    //                 </form>

    //                 </div>




    //             </div>

    //         </div>
    //     </div>


    // </section>
  )
}

export default EditVideo