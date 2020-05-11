import React from 'react';
import AuthContext from '../../../context/context';
import Demo from '../../person/demo';

const Home = () => {
    return (
        <AuthContext.Consumer>
            {value => value &&
                <div data-testid="demo-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px'
                }}>
                    <Demo/>
                </div>
            }
        </AuthContext.Consumer>
    )
}

export default Home;
