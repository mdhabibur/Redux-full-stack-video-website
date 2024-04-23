import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'
import RelatedVideos from './relatedVideos/RelatedVideos'

const VideoDetails = ({video}) => {

    const {title, link} = video || {}

  return (
    <section id="singleVideo" className="singleVideo my-5 pt-4">
    <div className="container-fluid">
        <div className="row">

            {/* <!-- single video description  --> */}
            <div className="col-md-8">
                {/* <!-- video player  --> */}
                <VideoPlayer video={video} />

                {/* <!-- video description  --> */}
                <VideoDescription video = {video} />

            </div>

            {/* <!-- related videos  --> */}
            <RelatedVideos video = {video} />

        </div>
    </div>
</section>
  )
}

export default VideoDetails