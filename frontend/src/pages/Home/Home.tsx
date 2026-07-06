import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AIWorkspace from "../../components/AIWorkspace/AIWorkspace";
import MainLayout from "../../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <AIWorkspace />

      </div>

    </MainLayout>
  );
}

export default Home;