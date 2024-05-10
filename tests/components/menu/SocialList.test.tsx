import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//component
import { SocialList } from '@/components/menu/SocialList';

describe('renderization', () => {
  it(`must render a list with 5 li's and links`, () => {
    render(<SocialList/>);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);

    screen.getAllByRole('link');
  });
});

describe('behavior', () => {
  it('', () => {
    render(<SocialList/>)
  });

  expect('');
});