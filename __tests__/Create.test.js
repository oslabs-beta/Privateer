import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../client/App';
import Create from '../client/pages/Create';

describe('Create app rendering', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Create />
      </MemoryRouter>
    );
  });

  it('should render the header compnent', () => {
    const header = screen.getByTitle('header');
    expect(header).toBeInTheDocument();
  });

  it('should render the create container component', () => {
    const createContainer = screen.getByTitle('create-container');
    expect(createContainer).toBeInTheDocument();
  });
});

describe('Proper routing of components', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('should render deployment tab when create is intially pressed', async () => {
    userEvent.click(screen.getByText('Create'));
    const configMap = await screen.findByTitle('deploy');
    expect(configMap).toBeInTheDocument();
  });

  it('should render Secret component when secret is clicked', async () => {
    userEvent.click(screen.getByText('Create'));
    userEvent.click(screen.getByText('Secret'));
    const secret = await screen.findByTitle('secret');
    expect(secret).toBeInTheDocument();
  });

  it('should render Secret component when secret is clicked', async () => {
    userEvent.click(screen.getByText('Create'));
    userEvent.click(screen.getByText('Deployment'));
    const deployment = await screen.findByTitle('deployment');
    expect(deployment).toBeInTheDocument();
  });
  it('should render Secret component when secret is clicked', async () => {
    userEvent.click(screen.getByText('Create'));
    userEvent.click(screen.getByText('Service'));
    const service = await screen.findByTitle('service');
    expect(service).toBeInTheDocument();
  });
});
