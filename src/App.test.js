import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test suite for the App component.
 */
describe('App component', () => {
  /**
   * Test that the "Learn React" link is rendered.
   */
  it('renders learn react link', () => {
    // Render the App component.
    render(<App />);

    // Get the link element by its text content.
    const linkElement = screen.getByText(/learn react/i);

    // Assert that the link element is present in the document.
    expect(linkElement).toBeInTheDocument();
  });
});