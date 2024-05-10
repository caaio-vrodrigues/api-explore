import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

//icon
import { IconBrandGithub } from '@tabler/icons-react';

//components
import { SocialIcon } from '@/components/menu/SocialIcon';

const mockLink = 'any-link';

describe('renderization', () => {
  it('must render a link with a icon', () => {
    render(<SocialIcon Icon={IconBrandGithub} link={mockLink}/>);

    const iconLink = screen.getByRole('link');
    
    expect(iconLink).toBeInTheDocument();
  });
});