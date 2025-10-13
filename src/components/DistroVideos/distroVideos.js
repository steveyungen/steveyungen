import React from "react";
import IMAGES from "../../assets";
import "./distroVideos.css";

const DISTRO_VIDEO = {
    BOMBAY_BEACH: {
        img: IMAGES.BOMBAY,
        title: "Bombay Beach",
        url: "https://youtube.com/playlist?list=OLAK5uy_nqVBnRcPYTgxWOMmIlM5gZf9T6PxXKx_8",
    },
    CHRISTMAS_EVE_AT_AIRPORT: {
        img: IMAGES.CHRISTMAS,
        title: "Christmas Eve at Airport",
        url: "https://youtube.com/playlist?list=OLAK5uy_mOU5WfH5I6dDFsQz0wvI5grz-fdJNve5Y",
    },
    HONEYBEE: {
        img: IMAGES.HONEYBEE,
        title: "I'm a Honeybee",
        url: "https://youtube.com/playlist?list=OLAK5uy_mCK9j6JixbDc3dQaYcEjG_8blm1G50rac",
    },
    MAMAS_BIRTHDAY: {
        img: IMAGES.MAMAS_BIRTHDAY,
        title: "Mama's Birthday",
        url: "https://youtube.com/playlist?list=OLAK5uy_ltx9InsacPgJTwnPG7LtQsRki5Lm6h5zM",
    },
    SPRAYED_BY_SKUNK: {
        img: IMAGES.SPRAYED_BY_SKUNK,
        title: "Sprayed by Skunk",
        url: "https://youtube.com/playlist?list=OLAK5uy_mGfryLcUpo4yylmHFfx6zM3LMEWgCXw3E",
    },
    WE_SHARE_THE_SAME_SKY: {
        img: IMAGES.WE_SHARE_THE_SAME_SKY,
        title: "We Share the Same Sky",
        url: "https://youtube.com/playlist?list=OLAK5uy_krZ5gu1OYw7LRxRTOGPEkYP-rsRyKvMEI",
    },
};

const DistroVideos = () => {
    return (
        <div className="distroContainer">
            <h4>Featured Songs</h4>
            <div className="distroVideoContainer">
                {Object.entries(DISTRO_VIDEO).map(
                    ([key, { img, title, url }]) => (
                        <a
                            href={url}
                            key={key}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="distroVideo">
                                <img src={img} alt={title} />
                                <span className="distroTitle">{title}</span>
                            </div>
                        </a>
                    )
                )}
            </div>
        </div>
    );
};

export default DistroVideos;
