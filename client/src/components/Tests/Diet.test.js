import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Diet from "../Section-Main/Diet";

configure({adapter: new Adapter()});
test('message box', ()=> {
    shallow(<Diet />);
})