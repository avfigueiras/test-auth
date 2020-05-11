import React from 'react';
import ForgetPassword from '../index';
import {render,fireEvent, cleanup} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

const mockHistory = {
    push: jest.fn()
};

const mocksendPasswordResetEmailFunction = jest.fn(() => Promise.resolve());

jest.spyOn(window, 'alert').mockImplementation(() => {});

jest.mock('../../../../services/firebase/setUp', () => {
    return {
        auth: jest.fn(() => {
            return {
                sendPasswordResetEmail: mocksendPasswordResetEmailFunction
            }
        })
    };
});

afterEach(cleanup);

describe("FogetPassword test", () =>{
    test("test 1", () =>{
        const ForgetPasswordComponent = render(
            <MemoryRouter>
                <ForgetPassword history={mockHistory}/>
            </MemoryRouter>
        );

        const testEmail = 'pepe@correo.com';

        const emailField = ForgetPasswordComponent.getByTestId('email-field');
        fireEvent.change(emailField, {target: {value: testEmail}});

        const forgetPassForm = ForgetPasswordComponent.container.querySelector('form');
        fireEvent.submit(forgetPassForm);

        expect(mocksendPasswordResetEmailFunction).toBeCalledTimes(1);
        expect(mocksendPasswordResetEmailFunction).toBeCalledWith(testEmail);
    })
})