export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Grow IT Skills. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
