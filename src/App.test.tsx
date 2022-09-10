/*
 * ===============================================================================================================
 *                                Copyright 2021, Blue Yonder Group, Inc.
 *                                           All Rights Reserved
 *
 *                               THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF
 *                                          BLUE YONDER GROUP, INC.
 *
 *
 *                         The copyright notice above does not evidence any actual
 *                                 or intended publication of such source code.
 *
 * ===============================================================================================================
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });
describe('App', () => {
  it('should render correctly', () => {
    const render = shallow(<App />);
    expect(render.find('Route').length).toBe(1);
    expect(render.find('Breadcrumbs').length).toBe(1);
  });
});
