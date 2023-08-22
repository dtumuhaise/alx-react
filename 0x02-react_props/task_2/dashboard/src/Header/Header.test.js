import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Testing <Header /> Component', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });
  
    it("Renders with out crashing", () => {
      expect(wrapper).toBeDefined();
    });
  
    it("Render an h1 tag", () => {
      expect(wrapper.find('h1')).toBeDefined();
    });
  
    it("Render an img tag", () => {
      expect(wrapper.find('img')).toBeDefined();
    });
  });
