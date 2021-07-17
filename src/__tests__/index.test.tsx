import Index from '../modules/index';
import { render, screen, waitFor } from '@testing-library/react';

describe('about page', () => {
  test('correct text is shown', () => {
    render(<Index />);
    expect(
      screen.getByText(
        'Simple starter aimed at providing the barebones to start an awesome project.'
      )
    ).toBeInTheDocument();
  });
  test('title is shown', () => {
    render(<Index />);
    expect(screen.getByText('About this starter')).toBeInTheDocument();
  });
});
