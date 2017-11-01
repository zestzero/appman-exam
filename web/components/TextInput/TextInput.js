import React from 'react';
import { Label } from '..';

import './text-input.scss';

class TextInput extends React.Component {
    render() {
        return (
            <div className="TextInput--default">
                <div className="TextInput-Line">
                    <Label text={this.props.labelText} />
                </div>
                <div className="TextInput-Line">
                    <input className="TextInput-Input--default" type={this.props.inputType} placeholder={this.props.hintText} />
                </div>
            </div>
        );
    }
}

export default TextInput;
