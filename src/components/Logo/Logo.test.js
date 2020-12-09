import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Logo from './Logo';

it('render correctly Logo component', () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('sets correct height when prop height is passed', () => {
  const props = {
    height: 50,
  };
  const LogoComponent = shallow(<Logo {...props} />);
  const logoNode = LogoComponent.find('[data-test]');

  expect(logoNode.prop('style')).toHaveProperty('height', 50);
});