const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8 border-t border-slate-200">
      <div className="align-element text-center">
        <p className="text-slate-600">
          © {new Date().getFullYear()} G.P. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
