import React from 'react';
import { Form } from './Form';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Form', () => {
  it('Render component', () => {
    render(<Form />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Entering username', () => {
    render(<Form />);
    fireEvent.change(screen.getByPlaceholderText('Введите имя...'), {
      target: { value: 'TestUsername' },
    });
    expect(screen.getByPlaceholderText('Введите имя...').value).toBe(
      'TestUsername'
    );
  });

  it('Remember username', () => {
    render(<Form />);
    fireEvent.change(screen.getByPlaceholderText('Введите имя...'), {
      target: { value: 'TestUsername' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));
    expect(screen.getByPlaceholderText('Введите имя...').value).toBe(
      'TestUsername'
    );
  });

  it('Entering message', () => {
    render(<Form />);
    fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
      target: { value: 'TestMessage' },
    });
    expect(screen.getByPlaceholderText('Введите текст...').innerHTML).toBe(
      'TestMessage'
    );
  });

  it('Cleansing message field', () => {
    render(<Form />);
    fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
      target: { value: 'TestMessage' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));
    expect(screen.getByPlaceholderText('Введите текст...').innerHTML).toBe('');
  });

  it('Displaying user`s message', () => {
    render(<Form />);
    fireEvent.change(screen.getByPlaceholderText('Введите имя...'), {
      target: { value: 'TestUsername' },
    });
    fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
      target: { value: 'TestMessage' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));
    expect(screen.getByRole('listitem').firstChild.innerHTML).toBe(
      'TestUsername'
    );
    expect(screen.getByRole('listitem').lastChild.innerHTML).toBe(
      'TestMessage'
    );
  });

  it('Bot`s response', async () => {
    render(<Form />);
    fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
      target: { value: 'TestMessage' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));
    expect(await screen.findByText('Chatbot', {}, { timeout: 2000 })).toBeVisible;
  });
});
