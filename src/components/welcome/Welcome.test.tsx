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
import { shallow, configure } from 'enzyme';
import { Welcome } from './Welcome';
import Adapter from 'enzyme-adapter-react-16';
import { CentralZone, EastZone, WestZone, NorthZone } from '@jda/lui-dashboard-scaffolding-layouts';
configure({ adapter: new Adapter() });
describe('Welcome', () => {
  it('should render', () => {
    const render = shallow(<Welcome />);
    expect(render.find(NorthZone).length).toBe(1);
    expect(render.find(WestZone).length).toBe(1);
    expect(render.find(EastZone).length).toBe(1);
    expect(render.find(CentralZone).length).toBe(1);
  });
});
