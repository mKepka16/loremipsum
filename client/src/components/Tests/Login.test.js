import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Login from "../Section-Login/Login";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Login />);
})
