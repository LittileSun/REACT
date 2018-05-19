
import React, { Component } from 'react';
import { Modal,Button} from 'antd';
import './App.css';
import Background from './beijing.jpg';
import mixlogo from './logo.png';


var sectionStyle = {
    width: "60px",
    height: "60px",
    marginLeft:"50px",
    verticalAlign: "middle",
    backgroundImage: `url(${mixlogo})`,
    backgroundSize:"cover"
};
var backStyle = {
    position: "absolute",
    width:"100%",
    height:"100%",
    margin:"0",
    padding:"0",
    backgroundImage: `url(${Background})`,
    backgroundAttachment: "fixed",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "center center",
    opacity:"0.87"
};
var modalStyle = {
    position:"fixed",
    left:"400px",
    top:"150px",
    width:"600px",
    height:"450px",
    backgroundColor:"#4A4A4A"
};
class App extends Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { visible, loading } = this.state;
        return (
            <div style={backStyle}>
                <div className="headerStyle">
                    <div style={sectionStyle}>
                    </div>
                    <p className="pStyle">ABSTRACT TOKENIZATION</p>
                </div>

                <div>
                    <div className="p2Style">
                        <p>TRANSITIONING YOU AND YOUR REAL ESTATE OWNERSHIP</p>
                        <p>INTO THE DIGITAL AGE...</p>
                    </div>

                    <div className="tableStyle">
                        <table className="taStyle">
                            <tr className="trStyle">
                                <td><input className="inputStyle" type="text" placeholder="FIRST NAME"/></td>
                                <td><input className="inputStyle" type="text" placeholder="LAST NAME"/></td>
                            </tr>
                            <tr>
                                <td><input className="inputStyle" type="text" placeholder="EMAIL"/></td>
                                <td><input className="inputStyle" type="text" placeholder="COMPANY NAME"/></td>
                            </tr>
                            <tr>
                                <td><input className="inputStyle" type="text" placeholder="PASSCODE"/></td>
                                <td><input className="inputStyle" type="text" placeholder="CONFIRM PASSCODE"/></td>
                            </tr>
                        </table>
                    </div>

                    <div className="checkStyle">
                        <input type="checkbox" name="check" id="check"/>
                        <label for="check">
                            I AGREE TO THE <u className="taStyle">TERMS AND CONDITIONS</u>
                        </label>
                    </div>

                    <div className="buttonStyle">
                        <button className="btnStyle">SIGN UP</button>
                    </div>

                    <div className="signinStyle">
                        ALREADY HAVE AN ACCOUNT?<u className="taStyle">
                        <u type="primary" onClick={this.showModal} style={{ cursor: "pointer"}}>sign in</u>
                        </u>
                    </div>
                </div>

                <div className="engStyle">
                    <p>"I" m reasonably confident that</p>
                    <p>the blockchain</p>
                    <p>will change a great</p>
                    <p>deal of financial practice</p>
                    <p>and exchange</p>
                    <p>-Larry Summers US Former</p>
                    <p>Treasury Sectratary</p>
                </div>

                    <Modal
                    //    title="Basic Modal"
                         visible={this.state.visible}
                         onOk={this.handleOk}
                         onCancel={this.handleCancel}
                        style={modalStyle}
                    >

                        <div>
                            <div className="headStyle">
                                <div style={sectionStyle}></div>
                                <p className="pStyle" style={{color:'white'}}>ABSTRACT TOKENIZATION</p>
                                <div className="hrStyle"></div>
                            </div>

                            <div className="p2Style">
                                <p>GOOD. YOU'RE ALREADY WELL</p>
                                <p>AHEAD OF THE GAME. #WINNING</p>
                            </div>

                            <div className="boxStyle">
                                <input className="inputStyle" type="text" placeholder="EMAIL"/><br/>
                                <input className="inputStyle" style={{marginTop:"20px"}} type="text" placeholder="PASSWORD"/>
                            </div>

                            <div>
                                <p className="forStyle">Forgot your password?</p>
                                <input type="button" className="btnStyle" style={{marginLeft:"90px",marginTop:"25px",backgroundColor:"#A75AEA"}} value="LOGIN"/>
                                <p className="gameStyle">New to the game?<u className="taStyle">Sign Up</u></p>
                            </div>
                        </div>
                    </Modal>

            </div>
        );
    }
}
export default App;
