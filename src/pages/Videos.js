import React, { Component } from "react";
import Video from "../components/Video/video";
import VIDEO from "../content/videos";

const VIDEOS = [
    VIDEO.WE_SHARE_THE_SAME_SKY,
    VIDEO.STEVE_JOSEPH_CURTIS_2022,
    VIDEO.BANANAS_THE_MOVIE,
    VIDEO.UKULELE_JIMMY,
    VIDEO.STEVE_JOSEPH_CURTIS_2019,
    VIDEO.HALLOWEEN_SONG,
];

class Videos extends Component {
    render() {
        return (
            <div className="container videos-container mb-5">
                <div className="row row-style justify-content-center text-center mt-5 mb-4">
                    <div className="spacer" />
                    <p className="title large-title">VIDEOS</p>
                    <div className="spacer" />
                </div>

                {VIDEOS.map((_, idx) =>
                    idx % 2 === 0 ? (
                        <div
                            key={idx}
                            className="row video-row justify-content-center text-center"
                        >
                            <div className="col-xs-8 col-md-6">
                                <Video video={VIDEOS[idx]} />
                            </div>
                            {VIDEOS[idx + 1] && (
                                <div className="col-xs-8 col-md-6">
                                    <Video video={VIDEOS[idx + 1]} />
                                </div>
                            )}
                        </div>
                    ) : null,
                )}
            </div>
        );
    }
}

export default Videos;
