import Sidebar from "@/components/shared/Sidebar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-5 sm:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default CommonLayout;
