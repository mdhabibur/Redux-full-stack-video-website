import React from "react";
import Video from "./Video";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import { Spinner } from "react-bootstrap";
import Error from "../ui/Error";

const Videos = () => {

    //call the useGetVideos hook to fetch vidoes
    //no need to use it inside the useEffect() hook
    //it will automatically call the useEffect()
    const {data:videos, isLoading, isError, error } = useGetVideosQuery();

    let content = null;

    if(isLoading && !isError){
        content = <Spinner animation="grow" />;
    }
    if(!isLoading && isError){
        content = <Error message = {error} /> ;
    }
    if(!isLoading && !isError && videos?.length === 0){
        content = <Error message="no videos found" />;

    }
    if(!isLoading && !isError && videos?.length > 0){
        content = videos.map((video) => <Video key={video.id} video={video} />)

    }



	return (
		<>
			{/* <!-- videos  --> */}
			<section id="videos" className="videos">
				<div className="container-fluid my-5 py-5">
					<div className="row">
						{/* <!-- single video  --> */}
                        {content}
					</div>
				</div>
			</section>
		</>
	);
};

export default Videos;
