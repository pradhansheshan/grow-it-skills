export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
        Welcome to <span className="text-blue-500">Grow IT Skills</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl">
        Your ultimate playground for manual and automated web testing.
      </p>
      <p className="text-md text-gray-500 max-w-xl">
        Select a test category from the sidebar menu to begin practicing with various interactive UI components, complex elements, and simulated scenarios.
      </p>
    </div>
  );
}
