import React from 'react';
import { MessageList } from './MessageList';
import { render, screen } from '@testing-library/react';

const testmessages = [{ id: 'id', username: 'TestUser', text: 'TestMessage' }];

describe('MessageList', () => {
  it('Render component', () => {
    render(<MessageList messages={testmessages} />);
  });

  it('To match snapshot', () => {
    const { asFragment } = render(<MessageList messages={testmessages} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('To have username and message fields', () => {
    render(<MessageList messages={testmessages} />);
    expect(screen.getByRole('list')).toBeInTheDocument;
    expect(screen.getByRole('heading').innerHTML).toBe('TestUser');
    expect(screen.getByTestId('testmessage').innerHTML).toBe('TestMessage');
  });
});
