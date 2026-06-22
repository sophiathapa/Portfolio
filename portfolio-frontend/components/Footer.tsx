
const Footer = () => {
  return (
    <footer className="py-5 text-foreground border-t border-foreground/20">
      <div className="container mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold">
            SophiaTM
          </span>

          <p className="text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
