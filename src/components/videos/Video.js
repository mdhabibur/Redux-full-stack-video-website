import React from "react";
import authorImg from "../../assets/author.png";
import { Link } from "react-router-dom";

const Video = ({video}) => {

    const {id,title, author, date, views, thumbnail} = video  || {} 

	return (
		<>
			<div className="col-md-3 p-2 hover-zoom">
				<Link to={`/videos/${id}`}>
					<img
						className="img-fluid"
						src={thumbnail}
						alt="thumbnail"
					/>
				</Link>

				<div className="video_desc">
					<div className="row">
						<div className="col-sm-3 p-2">
							<img
								style={{ width: "50px", height: "50px" }}
								src={authorImg}
								alt=""
								className="img-fluid"
							/>
						</div>
						<div className="col-sm-9 p-2">

							<Link className="no-underline-link" to={`/videos/${id}`}>
                            <h5>{title}</h5>
                            </Link>

							<p className="" style={{ fontSize: "13px" }}>
								{" "}
								{author}
							</p>
							<p className="" style={{ fontSize: "12px", marginTop: "-10px" }}>
								{views} views; {date}
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- single video  --> */}
		</>
	);
};

export default Video;
