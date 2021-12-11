import React from 'react';
import { render, screen } from '@testing-library/react';
import Monitor from '../client/pages/Monitor';

describe('Network page', () => {
  it('renders Graph component', () => {
    render(<Monitor />);
    const grafanaDashboard = screen.getByTitle(/grafana-dashboard/);
    expect(grafanaDashboard).toBeInTheDocument();
  });
});
