import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppDark from "./themes/dark/AppDark";
import AppCorporate from "./themes/corporate/AppCorporate";
import AppVibrant from "./themes/vibrant/AppVibrant";

// Temporary Landing/Switcher (Optional, or just route to Dark by default)
function ThemeSwitcher() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <h1 className="text-3xl font-bold text-gray-800">Select Theme</h1>
      <div className="flex gap-8">
        <Link to="/dark" className="px-8 py-4 bg-black text-white rounded-lg shadow-xl hover:scale-105 transition-transform">
          Theme 1: Dark Premium
        </Link>
        <Link to="/corporate" className="px-8 py-4 bg-white text-blue-900 border border-blue-900 rounded-lg shadow-xl hover:scale-105 transition-transform">
          Theme 2: Corporate Clean
        </Link>
        <Link to="/vibrant" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-xl hover:scale-105 transition-transform">
          Theme 3: Vibrant & Modern
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThemeSwitcher />} />
        <Route path="/dark" element={<AppDark />} />
        <Route path="/corporate" element={<AppCorporate />} />
        <Route path="/vibrant" element={<AppVibrant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
