import Link from "next/link";

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Hamburger (mobile only) + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="text-xl font-bold text-blue-500 tracking-tight hover:text-blue-400 transition-colors">
            Grow IT Skills
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Courses</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Tutorials</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Community</a>
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">About</a>
        </nav>

        {/* Action button */}
        <div className="flex gap-4">
          <button className="text-sm font-medium text-gray-300 hover:text-white">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition">
            Start Learning
          </button>
        </div>
      </div>
    </header>
  );
}
