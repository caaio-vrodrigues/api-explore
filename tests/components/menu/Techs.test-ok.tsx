import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//component
import { Techs } from '@/components/menu/Techs';

describe('renderization', () => {
  it('must render 6 images', () => {
    render(<Techs/>);
    const techsImgs = screen.getAllByRole('img');

    expect(techsImgs).toHaveLength(6);
  });
});