import React from "react";

const VideoPlayer = ({video}) => {
    const {link, title} = video || {}
	return (
		<div className="videoPlayer">
			<iframe
				width="100%"
				height="400"
				src={link}
				frameBorder="0"
				allowFullScreen
				title={title}
			></iframe>
		</div>
	);
};

export default VideoPlayer;
