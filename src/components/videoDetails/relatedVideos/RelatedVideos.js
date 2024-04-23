import React from "react";
import SingleRelatedVideo from "./SingleRelatedVideo";
import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import { Spinner } from "react-bootstrap";
import Error from "../../ui/Error";

const RelatedVideos = ({video}) => {

	const {id, title} = video || {}

	const {data:relatedVideos, isLoading, isError, error} = useGetRelatedVideosQuery({id, title})

	let content = null;

    if(isLoading && !isError){
        content = <Spinner animation="grow" />;
    }
    if(!isLoading && isError){
        content = <Error message = {error} /> ;
    }
    if(!isLoading && !isError && relatedVideos?.length === 0){
        content = <Error message="no Related videos found" />;

    }
    if(!isLoading && !isError && relatedVideos?.length > 0){
        content = relatedVideos.map((relatedVideo) => <SingleRelatedVideo key={relatedVideo.id} relatedVideo={relatedVideo} />)

    }



	return (
		<div className="col-md-4">
			<section id="relatedVideos" className="relatedVideos">
				<div className="container-fluid">
					{/* <!-- single related video  --> */}
					{content}
				</div>
			</section>
		</div>
	);
};

export default RelatedVideos;
