import React from 'react';
import AuthProvider from '../provider/auth';
import Routes from '../components/routes/index';

const App = () => {
    return (
        <div>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </div>

    )
}
export default App;
