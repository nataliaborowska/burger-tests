import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Backdrop from './Backdrop';

it('render correctly Backdrop component', () => {
  const tree = renderer.create(<Backdrop />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a div when props show is set to true', () => {
  const props = {
    show: true,
  };

  const BackdropComponent = shallow(<Backdrop {...props} />);
  const backdropNode = BackdropComponent.find('[data-test]');

  expect(backdropNode.length).toBe(1);
});

it('runs clicked prop when onClick', () => {
  const clicked = jest.fn();
  const props = {
    show: true,
    clicked: clicked,
  };

  const BackdropComponent = shallow(<Backdrop {...props} />);
  const backdropNode = BackdropComponent.find('[data-test]');
  backdropNode.simulate('click');

  expect(clicked).toHaveBeenCalledTimes(1);
});