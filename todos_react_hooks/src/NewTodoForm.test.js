import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', function () {
  shallow(<NewTodoForm />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<NewTodoForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});