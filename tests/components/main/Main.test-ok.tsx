import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

//components
import { Main } from '@/components/main/Main';

describe('Rendering the Main component', () => {
  it('must render two buttons and four articles', () => {
    render(<Main/>);

    const buttons = screen.getAllByRole('button');
    const articles = screen.getAllByRole('article');

    expect(buttons).toHaveLength(2);
    expect(articles).toHaveLength(4);
  });
})