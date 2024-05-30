import React from 'react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { store } from './app/store';
import Reports from './features/reports/Reports';

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <NotificationsProvider>
          <Reports />
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default App;
