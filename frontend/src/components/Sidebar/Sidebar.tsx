import { navigation } from "../../utils/navigation";

function Sidebar() {
  return (
    <aside
      className="
      w-72
      h-[calc(100vh-64px)]
      bg-white/5
      backdrop-blur-xl
      border-r
      border-white/10
      flex
      flex-col
      justify-between
      "
    >
      {/* Logo */}
      <div>
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold">
            🤖 AI DevOps
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            Intelligent DevOps Engineer
          </p>
        </div>

        {/* Navigation */}
        <nav className="px-3">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                w-full
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-2xl
                text-left
                text-slate-300
                hover:bg-violet-600/20
                hover:text-white
                transition-all
                duration-300
                mb-2
                "
              >
                <Icon size={20} />

                <span>{item.title}</span>

              </button>
            );
          })}

        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="p-5 border-t border-white/10">

        <div className="flex items-center gap-3">

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-violet-600
            flex
            items-center
            justify-center
            text-lg
            font-bold
            "
          >
            M
          </div>

          <div>

            <p className="font-semibold">
              Manikandan
            </p>

            <p className="text-slate-400 text-sm">
              DevOps Engineer
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;