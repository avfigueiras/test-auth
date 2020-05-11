import React,{useState}  from 'react';
import {withRouter} from 'react-router-dom';
import app from '../../../services/firebase/setUp';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCardBody,MDBCard} from 'mdbreact';

const ForgetPassword = ({history}) => {
    const [email, setEmail] = useState('');
    const [reset, setReset] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await app.auth().sendPasswordResetEmail(email)
            setReset(false)
            history.push("/login");
        } catch (error) {
            setReset(true)
            console.log(error);
        }
    };

    return(
        <MDBContainer className="container mt-5 ">
          <MDBRow className="d-flex col-12 py-5 px-lg-5 justify-content-center">
            <MDBCol md="6">
              <MDBCard className="border border-info ">
                <MDBCardBody >
                  <form onSubmit={handleSubmit}>
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="deep-grey-text pb-1 mx-5">Forget password</h3>
                        </MDBRow>
                        <div className="grey-text">
                            <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light"> Email </label>
                            <MDBInput className="input-field" data-testid="email-field" type="email" validate value={email} onChange={e => {setEmail(e.target.value)}} />
                        </div>
                        <Collapse in={reset}>
                          <Alert severity="error">Email incorrect!</Alert> 
                        </Collapse>
                        <div className="text-center mb-4 mt-3">
                            <MDBBtn color="info" type="submit" className="btn-block " > Reset password</MDBBtn>
                        </div>
                    </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    )
}

export default withRouter(ForgetPassword);