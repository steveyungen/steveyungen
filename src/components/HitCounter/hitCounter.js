import React, { Component } from "react";

import "./hitCounter.css";

class HitCounter extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://www.counter12.com/ad.js?id=ZcyWwDYb6dC15ZD8";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="hitCounter" style={{ textAlign: "center" }}>
                <a href="https://www.counter12.com">
                    <img
                        src="https://www.counter12.com/img-ZcyWwDYb6dC15ZD8-29.gif"
                        alt="contador de visitas gratis"
                        border="0"
                    />
                </a>
            </div>
        );
    }
}

export default HitCounter;
