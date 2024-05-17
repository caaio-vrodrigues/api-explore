import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

//components
import { ChangeCards } from '@/components/main/api-cards/ChangeCards';

describe('Renderering the ChangeCards component', () => {
  it('must render four articles', () => {
    render(<ChangeCards/>);

    const articles = screen.getAllByRole('article');

    expect(articles).toHaveLength(4);
  });
});