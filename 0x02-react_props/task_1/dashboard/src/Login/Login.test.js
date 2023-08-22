import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders 2 input and 2 label tags', () => {
      const wrapper = shallow(<Login />);
      const inputElements = wrapper.find('input');
      const labelElements = wrapper.find('label');
  
      expect(inputElements).toHaveLength(2);
      expect(labelElements).toHaveLength(2);
    });
  });