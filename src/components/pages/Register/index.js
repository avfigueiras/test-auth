import React, {useState} from 'react';
import {withRouter} from 'react-router';
import app from '../../../services/firebase/setUp';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCardBody,MDBCard} from 'mdbreact';

const Register = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
            const userRegistered = app.auth().currentUser;
            await userRegistered.updateProfile({
                displayName: name,
            });
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
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                  <MDBRow className="d-flex justify-content-center">
                      <h3 className="deep-grey-text pb-1 mx-5"> Register Account</h3>
                  </MDBRow>
                  <div className="grey-text">
                      <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Name </label>
                      <MDBInput  icon="user" type="text" validate error="wrong" data-testid="name-field"
                        success="right" autoFocus value={name} onChange={e => {setName(e.target.value);}} />
                      <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> Email </label>
                      <MDBInput  icon="envelope" type="email" validate error="wrong" data-testid="email-field"
                        success="right" value={email} onChange={e => {setEmail(e.target.value);}}/>
                      <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> Password </label>
                      <MDBInput  icon="lock" type="password" validate data-testid="password-field"
                        value={password} onChange={e => {  setPassword(e.target.value);}} />
                  </div>
                  <div className="text-center mb-4 mt-3">
                    <MDBBtn color="info" type="submit" className="btn-block " > Register</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
);
};


export default withRouter(Register);
