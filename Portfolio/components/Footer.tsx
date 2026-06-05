
const Footer = () => {
  return (
    <footer className="py-5 border-t border-secondary/50">
      <div className="container mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold text-secondary">
            SophiaTM
          </span>

          <p className="text-muted-foreground text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
