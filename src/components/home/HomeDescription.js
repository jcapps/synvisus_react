import React from 'react';
import {Link} from 'react-router';

const HomeDescription = () => {
    return (
        <div id="description">
            <div className="circle-block"></div>
            <p>
                <span><b className="bold-label">Synvisus</b></span><span> is a provider of business-to-business 
                consulting and custom software development services. We specialize in using VBA and the .NET 
                Framework to integrate powerful forecasting and analytics capabilities into the office 
                productivity software our clients use on a daily basis. Compared against enterprise-grade 
                alternatives, our custom-built tools are easier to use and more affordable. </span>
                <Link id="watch-demo" to="/demos">Watch a demo</Link>
                <span> or click on the links below to find out more about what we do.</span>
            </p>
        </div>
    );
};

export default HomeDescription;