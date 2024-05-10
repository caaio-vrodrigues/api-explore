import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//component
import { MenuMessage } from '@/components/menu/MenuMessage';

describe('renderization', () => {
  it('must render message', () => {
    render(<MenuMessage/>);

    const message = `"This application was created to explore different types of API's"`;
    const h2 = screen.getByRole('heading', {
      level: 2,
    });

    expect(h2).toHaveTextContent(message);
  });
});