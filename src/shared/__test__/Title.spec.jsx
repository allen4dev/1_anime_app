import React from 'react';
import { shallow } from 'enzyme';

import Title from './../Title';

test('Title should have the text passed', () => {
  const title = shallow(<Title />);
  expect(title).toMatchSnapshot();
});
