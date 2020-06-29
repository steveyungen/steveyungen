import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import Video from "../components/Video/video";
import { galleryImages } from "../content/images";

const photoStyle = {
  cursor: "pointer",
  marginTop: "10px",
  maxHeight: "400px",
  maxWidth: "100%"
};

class Gallery extends Component {
  componentDidMount = () => {
    if (window.location.protocol !== 'https:') {
        window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
  }
  
  render() {
    return (
      <div className="container gallery-container">
      
        {/* PHOTOS */}
      
        <div className="row row-style justify-content-center text-center">
          <p className="title large-title">PHOTOS</p>
          <p className="description">
            The pictures and videos in this gallery are from different musical
            periods in my life. They’ve all had their fun times!
          </p>
          <div className="spacer" />
        </div>

        <div className="row justify-content-center text-center m-3">
          {Object.keys(galleryImages).map(image => (
            <div key={image} className="col-sm-8 col-md-4 col-xl-2">
              <Photo
                image={galleryImages[image].image}
                title={galleryImages[image].title}
                description={galleryImages[image].description}
                style={photoStyle}
                hasModal
                scrollableImages={galleryImages}
              />
            </div>
          ))}
        </div>

        {/* VIDEOS */}

        <div className="row row-style justify-content-center text-center mt-5 mb-4">
          <div className="spacer" />
          <p className="title large-title">VIDEOS</p>
          <div className="spacer" />
        </div>

        {/* VIDEO ROW 0 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/AN5AX8W76Xc"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/haunLNM91mo"} />
          </div>
        </div>

        {/* VIDEO ROW 1 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/j2qFG1hKkY0"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/L3B5Ut5FGMA"} />
          </div>
        </div>

        {/* VIDEO ROW 2 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/P3s9dW91KB4"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/ekyh20VfSoY"} />
          </div>
        </div>

        {/* VIDEO ROW 3 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/tgwyTx6I6sY"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/xqWWZ_L_Mp4"} />
          </div>
        </div>

        {/* VIDEO ROW 4 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/dFu8YgKDRJY"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/vmlbEtXN-DQ"} />
          </div>
        </div>

        {/* VIDEO ROW 5 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"PUT YOUTUBE LINK HERE"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"PUT YOUTUBE LINK HERE"} />
          </div>
        </div>

        {/* END OF VIDEO RORWS */}
      </div>
    );
  }
}

export default Gallery;
