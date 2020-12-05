import scan from './scan.jsx';
import TimelineItem from "./Timelineitem";

const Timeline = () =>
    scan.length > 0 && (
        <div className="timeline-container">
            {scan.map((scan, idx) => (
                <TimelineItem scan={scan} key={idx} />
            ))}
        </div>
    );
export default Timeline;