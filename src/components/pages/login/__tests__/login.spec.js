import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Login from '../';
import {MemoryRouter} from 'react-router-dom';

const mockHistory = {
    push: jest.fn()
};

const mockLogoutFunction = jest.fn(() => Promise.resolve());
const mockSignInFunction = jest.fn();


jest.mock('../../../../services/firebase/setUp', () => {
    return {
        auth: jest.fn(() => {
            return {
                signInWithEmailAndPassword: mockSignInFunction,
                signOut: mockLogoutFunction
            }
        })
    };
});

describe("Login tests", () => {
    test("login test 1", () => {
        const LoginComponent = render(
            <MemoryRouter>
                <Login history={mockHistory}/>
            </MemoryRouter>
        );

        const testEmail = 'pepe@correo.com';
        const testPassword = 'pepe123';

        const emailField = LoginComponent.getByTestId('email-field');
        fireEvent.change(emailField, {target: {value: testEmail}});
        const passwordField = LoginComponent.getByTestId('password-field');
        fireEvent.change(passwordField, {target: {value: testPassword}});

        mockSignInFunction.mockReturnValue({email: testEmail});

        const loginForm = LoginComponent.container.querySelector('form');
        fireEvent.submit(loginForm);

        expect(mockLogoutFunction).toBeCalledTimes(1);
        expect(mockSignInFunction).toBeCalledTimes(1);
        expect(mockSignInFunction).toBeCalledWith(testEmail, testPassword);
    });
});