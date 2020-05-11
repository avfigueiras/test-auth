import React from 'react';
import Nav from '../Nav';
import {render} from '@testing-library/react';

const mockStateChangeFunction = jest.fn();

jest.mock('../../../services/firebase/setUp', () => {
    return {
        auth: jest.fn(() => {
            return {
                onAuthStateChanged: mockStateChangeFunction
            }
        })
    };
});

describe("Nav test", () =>{
    test("test 1", () =>{
        const navComponent = render(<Nav/>)
        expect(navComponent).toMatchSnapshot();
    })

})