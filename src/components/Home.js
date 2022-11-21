import React from "react";
import Ebackground from '../assets/imgs/Ebackground.png'
class Home extends React.Component {

    render() {
        return (
            <div classNameName="home">
                <div className="card text-bg-dark border-0 ">
                    <img src={Ebackground} classNameName="card-img" alt="nhìn cc đây là cc gì vậy   " height='800px' />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title display-3 ">Siêu sale!!! <br />mừng bạn comeback</h5>
                        <p className="card-text fs-3 pt-2">
                            CHECK ALL THE TRENDS
                        </p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
