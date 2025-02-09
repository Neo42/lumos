import Landing from "@/app/(nondashboard)/landing/page";
import { Footer } from "@/components/footer";
import { NonDashboardNavbar } from "@/components/nondashboard-navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NonDashboardNavbar />
      <main className="flex h-full w-full flex-grow items-center justify-center">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
