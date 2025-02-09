import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { NonDashboardNavbar } from "@/components/nondashboard-navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NonDashboardNavbar />
      <main className="flex h-full w-full flex-grow items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
