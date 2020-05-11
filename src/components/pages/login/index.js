import React, {useState, useEffect} from 'react';
import {withRouter,Link} from 'react-router-dom';
import app from '../../../services/firebase/setUp';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCardBody,MDBCard} from 'mdbreact';

const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        app.auth().signOut().then();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const loginResult = await app.auth().signInWithEmailAndPassword(email, password);
            console.log(loginResult);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <MDBContainer className="container mt-5 ">
          <MDBRow className="d-flex col-12 py-5 px-lg-5 justify-content-center">
            <MDBCol md="6">
              <MDBCard className="border border-info ">
                <MDBCardBody >
                  <form onSubmit={handleSubmit}>
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="deep-grey-text pb-1 mx-5"> Login User</h3>
                        </MDBRow>
                        <div className="grey-text">
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> Email </label>
                            <MDBInput className="input-field" data-testid="email-field" type="text" validate value={email} onChange={e => {setEmail(e.target.value)}} />
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> Password </label>
                            <MDBInput type="password" data-testid="password-field" validate containerClass="mb-0" value={password} onChange={e => { setPassword(e.target.value)}}/>
                        </div>
                        <p className="font-small grey-text d-flex justify-content-end"> Forgot
                           <Link to="/forget"  className="dark-grey-text font-weight-bold ml-1"> Password? </Link>
                        </p>
                        <div className="text-center mb-4 mt-3">
                            <MDBBtn color="info" type="submit" className="btn-block " > Log in</MDBBtn>
                        </div>
                        <p className="font-small grey-text d-flex justify-content-center">
                          Don't have an account?
                          <Link to="/register" className="dark-grey-text font-weight-bold ml-1"> Sign up </Link>
                        </p>
                    </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    )
}

export default withRouter(Login);
