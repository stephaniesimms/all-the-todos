import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from './TodoList';

it('renders without crashing', function () {
  shallow(<TodoList />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<TodoList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});