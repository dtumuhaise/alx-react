import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).toBe(true);
    });
    it('render "CopyRight" text', () => {
      const wrapper = shallow(<Footer />);
      const text = wrapper.find('p').text();
      expect(text).toEqual('CopyRight');
    });
  });
