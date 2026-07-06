import { ReactNode } from "react";
import Background from "../components/Background/Background";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen relative">

      <Background />

      {children}

    </div>
  );
}

export default MainLayout;