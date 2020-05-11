import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Register from '../';

const mockUserRegisteredFunction = jest.fn(() => Promise.resolve());
const mockUpdateProfileFunction = jest.fn(() => Promise.resolve());

jest.spyOn(window, 'alert').mockImplementation(() => {
});

jest.mock('../../../../services/firebase/setUp', () => {
    return {
        auth: jest.fn(() => {
            return {
                createUserWithEmailAndPassword: mockUserRegisteredFunction,
                currentUser: {
                    updateProfile: mockUpdateProfileFunction
                }
            }
        })
    };
});

// Clean all promises
const flushPromises = () => new Promise(setImmediate);

describe("Register tests", () => {
    test("register test 1", async () => {
        const RegisterComponent = render(
            <MemoryRouter>
                <Register/>
            </MemoryRouter>
        );

        const testName = 'Jose'
        const testEmail = 'pepe@correo.com';
        const testPassword = 'pepe123';

        const nameField = RegisterComponent.getByTestId('name-field');
        fireEvent.change(nameField, {target: {value: testName}});
        const emailField = RegisterComponent.getByTestId('email-field');
        fireEvent.change(emailField, {target: {value: testEmail}});
        const passwordField = RegisterComponent.getByTestId('password-field');
        fireEvent.change(passwordField, {target: {value: testPassword}});

        const registerForm = RegisterComponent.container.querySelector('form');
        fireEvent.submit(registerForm);

        await flushPromises();

        expect(mockUserRegisteredFunction).toHaveBeenNthCalledWith(1, testEmail, testPassword);
        expect(mockUpdateProfileFunction).toHaveBeenNthCalledWith(1, {displayName: testName});
    });
});