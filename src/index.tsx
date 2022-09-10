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
import ReactDOM from 'react-dom';
import App from './App';
import { EventsHandler } from './components/events-handler/EventsHandler';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <EventsHandler>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EventsHandler>,
  document.getElementById('root'),
);
