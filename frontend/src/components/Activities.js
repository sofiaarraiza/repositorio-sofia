import React, { Component } from 'react';

class Activities extends Component {
    render() {
        const activities = this.props.activities
        const activitiesList = activities.map(activity => (
            <div className="activity-container">
                <h4 className="activity-title">{activity.title}</h4>
                <img src={activity.picture} className="activity-image" alt="Activity"/>
            </div>
        ))
        return (
            <div>
                <h4>Activities</h4>
                {activitiesList}
            </div>
        )
    }
}

export default Activities;



