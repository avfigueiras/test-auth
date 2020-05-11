import React from 'react';
import { render } from '@testing-library/react';
import AuthContext from '../../../../context/context';
import Home from '../';

describe("Home test", () => {
    test("Given null value then render correctly", () => {
        const homeComponent = render(<AuthContext.Provider value={null}>
            <Home />
        </AuthContext.Provider>);

        const demoWrapper = homeComponent.queryByTestId('demo-wrapper');

        expect(homeComponent).toMatchSnapshot();
        expect(demoWrapper).toBeNull();
    });

    test("Given some value then render correctly", () => {
        const homeComponent = render(<AuthContext.Provider value={true}>
            <Home />
        </AuthContext.Provider>);

        const demoWrapper = homeComponent.queryByTestId('demo-wrapper');

        expect(homeComponent).toMatchSnapshot();
        expect(demoWrapper).toBeInTheDocument();
    });
});
