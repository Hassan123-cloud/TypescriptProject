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

import React, { useContext } from 'react';
import { act } from 'react-dom/test-utils';
import { PortalMessageService, MockPortalMessageService, ThemeSwitchResponseMessage } from '@jda/lui-portal-utilities';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EventsHandler } from './EventsHandler';
import { EventContext } from '../../context';

configure({ adapter: new Adapter() });
const ConsumerComponent = () => {
  const { theme } = useContext(EventContext);
  return (
    <div data-testid="consumer-component" className={theme.palette.type}>
      {JSON.stringify(theme)}
    </div>
  );
};

describe('EventsHandlers', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    jest.spyOn(PortalMessageService, 'getInstance').mockReturnValue(new MockPortalMessageService());
  });

  afterEach(() => {
    jest.clearAllMocks();
    windowSpy.mockRestore();
  });

  it('should render', () => {
    const render = shallow(
      <EventsHandler>
        <ConsumerComponent />
      </EventsHandler>,
    );

    expect(render.find('ConsumerComponent').length).toBe(1);
  });

  it('should update the theme on ThemeSwitchResponseMessage', async () => {
    const render = mount(
      <EventsHandler>
        <ConsumerComponent />
      </EventsHandler>,
    );

    await act(async () => {
      const message = new ThemeSwitchResponseMessage();
      message.theme = 'dark';
      // @ts-ignore:disable-next-line
      PortalMessageService.getInstance().listener.call(null, message);
    });

    render.update();
    expect(render.find('div.dark').length).toBe(1);
  });
  
  it('should update the theme on ThemeSwitchResponseMessage to light', async () => {
    const render = mount(
      <EventsHandler>
        <ConsumerComponent />
      </EventsHandler>,
    );

    await act(async () => {
      const message = new ThemeSwitchResponseMessage();
      message.theme = 'dark';
      // @ts-ignore:disable-next-line
      PortalMessageService.getInstance().listener.call(null, message);
      
      const message2 = new ThemeSwitchResponseMessage();
      message.theme = 'light';
      // @ts-ignore:disable-next-line
      PortalMessageService.getInstance().listener.call(null, message2);
    });

    render.update();
    expect(render.find('div.light').length).toBe(1);
  });
});
