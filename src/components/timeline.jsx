import React from "react";
import scan from './Scan.jsx';
import TimelineItem from "./Timelineitem";
const src = "./FrontendAssets/warehouse.svg"
const dest = "./FrontendAssets/destination.svg"
const Timeline = () =>
    scan.length > 0 && (
        <div>
            <div className="CircleBackground"><img src={dest} className='Image destinationImage' /></div>
        <div className="timeline-container">
            {scan.map((scan, idx) => (
                <TimelineItem scan={scan} key={idx} />
            ))}
        </div>
            <div className="CircleBackground"><img src={src} className='Image sourceImage'/></div>
        </div>
    );
export default Timeline;