const TimelineItem = ({ scan }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="circle" />
                {scan.status_detail + " " +scan.time}

        </div>
    </div>
);
export default TimelineItem;