import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//components
import { Menu } from '@/components/menu/Menu';

describe('Rendering the complete Menu component', () => {
  it(`rendering the SocialList component in the Menu`, () => {
    render(<Menu/>);

    const listItems = screen.getAllByTestId('socialListItem-Menu');
    expect(listItems).toHaveLength(5);

    screen.getAllByRole('link');
  });

  it('rendering the MenuMessage component in the Menu', () => {
    render(<Menu/>);

    const message = `"This application was created to explore different types of API's"`;
    const h2 = screen.getByRole('heading', {
      level: 2,
    });

    expect(h2).toHaveTextContent(message);
  });

  it('rendering the techs images', () => {
    render(<Menu/>);

    const techsImgs = screen.getAllByTestId('techImg');

    expect(techsImgs).toHaveLength(6);
  });

  it('redering main image in the Menu', () => {
    render(<Menu/>);

    const img = screen.getByTestId('mainMenuImg');
  });
});