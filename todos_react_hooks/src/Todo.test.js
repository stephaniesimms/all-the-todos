import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from './Todo';

it('renders without crashing', function () {
  shallow(<Todo />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<Todo />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});