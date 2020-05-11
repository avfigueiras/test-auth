import React from 'react';
import {render, act} from '@testing-library/react';
import ListPerson from '../index';
import axios from 'axios';

jest.mock('axios');

// Clean all promises
const flushPromises = () => new Promise(setImmediate);

describe("ListPerson tests", () => {
    test("ListPerson  test 1 with empty values", async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {results: []}}));

        const ListPersonComponent = render(<ListPerson/>);

        await act(() => flushPromises());

        expect(ListPersonComponent).toMatchSnapshot();
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://randomuser.me/api/?results=100');
    });

    test("ListPerson test 1 with some values", async () => {
        const exampleUser = {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Manon",
                "last": "Mercier"
            },
            "location": {
                "street": {
                    "number": 6568,
                    "name": "Rue Abel-Gance"
                },
                "city": "Créteil",
                "state": "Loiret",
                "country": "France",
                "postcode": 26811,
                "coordinates": {
                    "latitude": "-2.0184",
                    "longitude": "169.0919"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "manon.mercier@example.com",
            "login": {
                "uuid": "aa44a549-2cf4-4a79-ba48-141e8e7c7bf3",
                "username": "orangebutterfly352",
                "password": "devon",
                "salt": "V9qMCKTQ",
                "md5": "3ec307678275bbc461ac77594d88954b",
                "sha1": "e48f861b1b637ed921c458308e35fe9afe66719d",
                "sha256": "d55ecdeb6684ae0eb9f6864dadfdd1c5df490454873aca92890e679a1516f2fd"
            },
            "dob": {
                "date": "1950-06-03T04:29:02.829Z",
                "age": 70
            },
            "registered": {
                "date": "2018-06-17T21:38:38.921Z",
                "age": 2
            },
            "phone": "05-47-47-92-64",
            "cell": "06-11-87-25-86",
            "id": {
                "name": "INSEE",
                "value": "2NNaN92449944 92"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/53.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
            },
            "nat": "FR"
        };

        axios.get.mockImplementationOnce(() => Promise.resolve({data: {results: [exampleUser]}}));

        const ListPersonComponent = render(<ListPerson/>);

        await act(() => flushPromises());

        expect(ListPersonComponent).toMatchSnapshot();
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://randomuser.me/api/?results=100');
    });
});