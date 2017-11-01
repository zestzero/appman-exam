import React from 'react';
import './white-frame.scss';

class Whiteframe extends React.Component {
    render() {
        return (
            <div className="Whiteframe-default">
                {this.props.children}
            </div>
        )
    }
}

export default Whiteframe;
