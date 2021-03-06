import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('render component', () => {
    render(<Button disabled />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button disabled />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument;
  });

  it('render component with button role', () => {
    render(<Button disabled />);
    expect(screen.getByTestId('submitbutton')).toBeInTheDocument;
  });

  it('Button is active', () => {
    render(<Button disabled />);
    expect(screen.getByTestId('submitbutton')).not.toBeDisabled;
  });
});
