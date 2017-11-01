import React from 'react';
import { Whiteframe, Label, TextInput, Logo, Button } from './components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, isSubmitCompleted: false, isSubmitSuccess: false };
    }

    // submitHandler = () => {
        // this.setState({ isLoading: true });
        // ajax call to http://localhost:3000/api/login
        // solve promise and then call back to 
        // this.setState({ isLoading: false, isSubmitCompleted: true, isSumitSuccess: true/false });
    // }

    render() {
        const logoStyle = { 
            width: 180,
        }
        return (
            <Whiteframe>
                <Logo style={logoStyle} imageUrl="logo.svg" isSpinning={this.state.isLoading} />
                <TextInput labelText="E-mail address" hintText="example@appman.co.th" inputType="text" />
                <TextInput labelText="Password" hintText="your password..." inputType="password" />
                <Label 
                    text="Email or password is incorrect" 
                    isError={true} 
                    shouldHide={!this.state.isSubmitCompleted || this.state.isSubmitSuccess}  
                />
                <Button text="SIGN IN" submitHandler={() => {}} />
            </Whiteframe>
        );
    }
}

export default App;
