import { useState } from "react";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  name: string;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ name, darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ["about", "services", "skills", "projects", "contact"];

  const handleScroll = (id: string) => {
    setOpen(false);

    // If not on homepage → go to homepage with hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // If already on homepage → scroll directly
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow-md">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-white"
        >
          {name}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="text-white hover:text-yellow-300 transition capitalize"
            >
              {item}
            </button>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 px-3 py-2 bg-yellow-400 text-black rounded-lg"
          >
            <FileText size={18} /> Resume
          </a>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="block text-white w-full text-left capitalize hover:text-yellow-300"
            >
              {item}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="block text-yellow-400 font-semibold"
          >
            Download Resume
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 text-white"
          >
            {darkMode ? (
              <>
                <Sun size={18} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={18} /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
