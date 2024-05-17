import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//component
import { SocialList } from '@/components/menu/SocialList';

describe('renderization menu', () => {
  it(`must render a list with 5 li's and links`, () => {
    render(<SocialList footer={false}/>);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);

    screen.getAllByRole('link');
  });
});

describe('renderization footer', () => {
  it(`must render a list with 5 li's and links`, () => {
    render(<SocialList footer={true}/>);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(5);

    screen.getAllByRole('link');
  });
});