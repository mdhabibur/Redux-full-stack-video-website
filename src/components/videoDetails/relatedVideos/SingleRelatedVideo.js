import React from "react";
import { Link } from "react-router-dom";

const SingleRelatedVideo = ({relatedVideo}) => {
	const {id,title,author,views,date,thumbnail} = relatedVideo || {}

	return (
		<div className="row">
			<div className="col-md-6">
				<Link to={`/videos/${id}`}>
					<img
						className="img-fluid"
						src={thumbnail}
						alt="thumbnail"
					/>
				</Link>
			</div>

			<div className="col-md-6 video_desc">
                <Link className="no-underline-link" to={`/videos/${id}`} >
				<h6>{title}</h6>
				</Link>
				<p className="" style={{fontSize: '13px' }}>
					{author}
				</p>
				<p className="" 
                style={{fontSize: '12px', marginTop: '-10px' }}>
					{views} views; {date}
				</p>
			</div>
		</div>
	);
};

export default SingleRelatedVideo;
