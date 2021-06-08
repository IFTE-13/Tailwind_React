import React from 'react';
import egg from "../Images/egg.jpg";
import egg1 from "../Images/egg-2.jpg";

const Content = () => {
    return (
        <>
            <div className="menu-card">
            <img src={egg} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg-Muffins</h2>
                <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis?</p>
                <span>$16</span>
            </div>
        </div>
        <div className="menu-card">
            <img src={egg1} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg-Salad</h2>
                <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis?</p>
                <span>$8</span>
            </div>
        </div>
        </>
    );
};

export default Content;