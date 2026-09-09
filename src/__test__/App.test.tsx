import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from '../App';

describe('App', () => {
  it('lists every country once loaded', async () => {
    render(<App />);

    expect(await screen.findByText('Colombia')).toBeInTheDocument();
    expect(screen.getByText('Venezuela')).toBeInTheDocument();
    expect(screen.getByText('Japan')).toBeInTheDocument();
  });

  it('filters the list by search keyword', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findByText('Colombia');

    await user.type(screen.getByPlaceholderText('Search for a country...'), 'japan');

    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.queryByText('Colombia')).not.toBeInTheDocument();
  });

  it('navigates to a country detail page and lists its borders', async () => {
    const user = userEvent.setup();
    render(<App />);
    await screen.findByText('Colombia');

    await user.click(screen.getByText('Colombia'));

    expect(await screen.findByText('Border countries :')).toBeInTheDocument();
    expect(screen.getByText('Venezuela')).toBeInTheDocument();
  });
});
