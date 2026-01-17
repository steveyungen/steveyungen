import React from "react";
import IMAGES from "../../assets";
import "./distroVideos.css";

const DISTRO_VIDEO = {
    BOMBAY_BEACH: {
        img: IMAGES.BOMBAY,
        title: "Bombay Beach",
        url: "https://youtu.be/B4Oub7ckGK4?si=KhanGwsdwgVPNWCc",
    },
    CHRISTMAS_EVE_AT_AIRPORT: {
        img: IMAGES.CHRISTMAS,
        title: "Christmas Eve at Airport",
        url: "https://youtu.be/kHLgMFc0U8k?si=GJGPK2IAuv7H-kcj",
    },
    HONEYBEE: {
        img: IMAGES.HONEYBEE,
        title: "I'm a Honeybee",
        url: "https://youtu.be/UOFnPew57qk",
    },
    MAMAS_BIRTHDAY: {
        img: IMAGES.MAMAS_BIRTHDAY,
        title: "Mama's Birthday",
        url: "https://youtu.be/yWB_RzS5NX4?si=u5CTMRY7vXVbtFkv",
    },
    SPRAYED_BY_SKUNK: {
        img: IMAGES.SPRAYED_BY_SKUNK,
        title: "Sprayed by Skunk",
        url: "https://youtu.be/BDUJkBZw6NY?si=68spG9jkQMoYhd8F",
    },
    WE_SHARE_THE_SAME_SKY: {
        img: IMAGES.WE_SHARE_THE_SAME_SKY,
        title: "We Share the Same Sky",
        url: "https://youtu.be/sUrmjq5golI",
    },
    THE_MOON_PERHAPS: {
        img: IMAGES.THE_MOON_PERHAPS,
        title: "The Moon, Perhaps",
        url: "https://www.youtube.com/watch?v=QqWIctR2NFU",
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
                    ),
                )}
            </div>
        </div>
    );
};

export default DistroVideos;
