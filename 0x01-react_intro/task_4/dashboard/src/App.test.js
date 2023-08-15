import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });

    it('renders a div with class "App-header"', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-header')).toBeDefined();
    });
    
    it('renders div with class "App-body"', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-body')).toBeDefined();
    });

    it('renders a div with class "App-footer"', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-footer')).toBeDefined();

    });
});
