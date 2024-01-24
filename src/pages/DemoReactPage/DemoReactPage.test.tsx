import React from 'react';
import { render, screen } from '@testing-library/react';
import DemoReactPage from './DemoReactPage';

test('renders learn react link', () => {
    render(<DemoReactPage />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
