import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      Created by{' '}
      <Button variant="link" className="text-primary p-0 font-medium">
        <a href="https://www.goat.africa/carlos-araujo">Carlos Araújo</a>
      </Button>
    </footer>
  );
};
