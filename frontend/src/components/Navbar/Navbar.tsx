import {
  Search,
  Bell,
  Moon,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <header
      className="
      h-16
      px-6
      flex
      items-center
      justify-between
      bg-white/5
      backdrop-blur-xl
      border-b
      border-white/10
      sticky
      top-0
      z-50
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-2xl">🤖</div>

        <h1 className="font-bold text-lg">
          AI DevOps Engineer
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-slate-900 rounded-xl px-4 py-2 w-[420px]">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search projects..."
          className="bg-transparent outline-none ml-3 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <Moon className="cursor-pointer hover:text-cyan-400 transition" />

        <Bell className="cursor-pointer hover:text-cyan-400 transition" />

        <div className="flex items-center gap-2 cursor-pointer">

          <div
            className="
            h-10
            w-10
            rounded-full
            bg-violet-600
            flex
            items-center
            justify-center
            "
          >
            M
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">
              Manikandan
            </p>

            <p className="text-xs text-slate-400">
              DevOps Engineer
            </p>
          </div>

          <ChevronDown size={18} />

        </div>

      </div>

    </header>
  );
}

export default Navbar;