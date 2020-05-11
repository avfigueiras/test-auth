import React from 'react';
import AuthContext from '../../../context/context';
import ListPerson from '../../person/index';

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
                    <ListPerson/>
                </div>
            }
        </AuthContext.Consumer>
    )
}

export default Home;
