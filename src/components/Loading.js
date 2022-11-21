import React from "react";
import '../styles/loading.css'

class LoadingAnimate extends React.Component {
    render() {
        return (
            <ul className="animated-wave-container">
                <li className="animated-wave-item"></li>
                <li className="animated-wave-item"></li>
                <li className="animated-wave-item"></li>
                <li className="animated-wave-item"></li>
                <li className="animated-wave-item"></li>
                <li className="animated-wave-item"></li>
            </ul>
        )
    }
}
export default LoadingAnimate;