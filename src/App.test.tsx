import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('CRM dashboard', () => {
  it('renders the dashboard shell with its icons', () => {
    const { container } = render(<App />);

    expect(screen.getAllByText(/Dashboard/i).length).toBeGreaterThan(0);
    // Icons come from @phosphor-icons/react and render as inline SVG. A near-empty
    // count here means the icon package resolved but produced nothing.
    expect(container.querySelectorAll('svg').length).toBeGreaterThan(10);
  });

  it('toggles a todo without mutating the other items', async () => {
    const user = userEvent.setup();
    render(<App />);

    const checkboxes = screen.getAllByRole('checkbox');
    const before = checkboxes.map((box) => (box as HTMLInputElement).checked);

    await user.click(checkboxes[1]);

    const after = screen
      .getAllByRole('checkbox')
      .map((box) => (box as HTMLInputElement).checked);

    expect(after[1]).toBe(!before[1]);
    // Every other item must be untouched. Note this guards the observable
    // behaviour only: the in-place mutation handleItemDone used to do produced
    // the same visible result, which is exactly why it went unnoticed.
    expect(after.filter((_, i) => i !== 1)).toEqual(
      before.filter((_, i) => i !== 1),
    );
  });
});
