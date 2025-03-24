import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName+' ' +user.studentID;
}

const user = {
    firstName: 'Huang',
    lastName: 'Hong Yi',
    studentID:'C111156124'
};

const Greeting = () => (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

export default Greeting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;