import About from '../modules/about/index';
import { render, screen, waitFor } from '@testing-library/react';

describe('about page', () => {
  test('correct text is shown', () => {
    render(<About />);
    expect(
      screen.getByText(
        'Simple starter aimed at providing the barebones to start an awesome project.'
      )
    ).toBeInTheDocument();
  });
});
