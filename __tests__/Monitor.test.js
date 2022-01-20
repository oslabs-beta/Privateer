import React from 'react';
import { render, screen } from '@testing-library/react';
import Monitor from '../client/pages/Monitor';

describe('Monitoring page', () => {
  it('renders Monitoring component', () => {
    render(<Monitor />);
    const grafanaDashboard = screen.getByTitle(/grafana-dashboard/);
    expect(grafanaDashboard).toBeInTheDocument();
  });
});
