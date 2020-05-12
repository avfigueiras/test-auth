import React from 'react';
import AuthProvider from '../provider/auth';
import Routes from '../components/routes/index';

const App = () => {
    return (
            <AuthProvider>
                <Routes/>
            </AuthProvider>
    )
}
export default App;
