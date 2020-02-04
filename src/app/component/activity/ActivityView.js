import React from 'react'

import './ActivityStyle.scss'

const ActivityView = () => {
    return (
        <div id="activityView">
            <div className="activity-spinner-wrapper">
                <div className="activitySpinner" />
            </div>
        </div>
    )
}

export default ActivityView