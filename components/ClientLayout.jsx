"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar whenever route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 container mx-auto px-4 w-full">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 p-6 w-full max-w-full overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
}
