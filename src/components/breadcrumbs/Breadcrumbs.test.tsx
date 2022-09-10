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
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Breadcrumbs } from './Breadcrumbs';
import * as utils from '@jda/lui-portal-utilities';
import * as eventEmmiters from '../events-handler/EventEmmiters';

configure({ adapter: new Adapter() });
describe('Breadcrumbs', () => {
  let isIframeSpy: jest.SpyInstance<Boolean>;

  beforeEach(() => {
    jest.clearAllMocks();
    isIframeSpy = jest.spyOn(utils, 'isIFrame');
    jest.spyOn(eventEmmiters, 'handleBreadcrumbs').mockReturnValue([]);
  });

  it('should not render BreadcrumbsComponent', () => {
    isIframeSpy.mockReturnValue(false);
    const render = mount(<Breadcrumbs />);
    expect(render.find('BreadcrumbsComponent').length).toBe(0);
  });

  it('should render BreadcrumbsComponent', () => {
    isIframeSpy.mockReturnValue(true);
    const render = mount(<Breadcrumbs />);
    expect(render.find('Breadcrumbs').length).toBe(1);
  });
});
