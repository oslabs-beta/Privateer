import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../client/App';
import store from '../client/store';

describe('Full app rendering', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders sidenav component', () => {
    const privateerLogo = screen.getByAltText('Privateer Logo');
    expect(privateerLogo).toBeInTheDocument();
  });

  it('renders main div', () => {
    const mainContainer = screen.getByTitle('main-container');
    expect(mainContainer).toBeInTheDocument();
  });
});

describe('Full app routing', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  it('routes to Create page', () => {
    userEvent.click(screen.getByText('Create'));
    const createContainer = screen.getByTitle('create-container');
    expect(createContainer).toBeInTheDocument();
  });

  it('routes to Monitor page', () => {
    userEvent.click(screen.getByText('Monitor'));
    const monitorContainer = screen.getByTitle('monitor-container');
    expect(monitorContainer).toBeInTheDocument();
  });

  it('routes to Network page', () => {
    userEvent.click(screen.getByText('Network'));
    const networkGraph = screen.getByTitle('network-container');
    expect(networkGraph).toBeInTheDocument();
  });
});
