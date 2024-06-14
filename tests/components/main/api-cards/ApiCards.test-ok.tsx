import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

//components
import { ApiCards } from '@/components/main/api-cards/ApiMainComp';

describe('Rendering the ApiCards component', () => {
  it('must render two buttons and four articles', () => {
    render(<ApiCards/>);

    const buttons = screen.getAllByRole('button');
    const articles = screen.getAllByRole('article');

    expect(buttons).toHaveLength(2);
    expect(articles).toHaveLength(4);
  });
})