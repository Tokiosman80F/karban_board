import { useState } from "react";

const DashboardIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 3v12m6-12v12M3 9h18"
    ></path>
  </svg>
);

const WorkspaceIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    ></path>
  </svg>
);

const BoardIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    ></path>
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    ></path>
  </svg>
);

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: <DashboardIcon />, href: "#" },
  { id: "workspace", label: "Workspace", icon: <WorkspaceIcon />, href: "#" },
  { id: "board", label: "Board", icon: <BoardIcon />, href: "#" },
  { id: "calendar", label: "Calendar", icon: <CalendarIcon />, href: "#" },
  { id: "settings", label: "Settings", icon: <SettingsIcon />, href: "#" },
];

export default function Sidebar() {
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <aside className="w-full lg:w-64 bg-white border-gray-200 flex flex-col border-b lg:border-b-0 lg:border-r">
      <div className="px-4 py-6 sm:px-6">
        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Kanban</span>
        </div>

        {/*Dynamic Navigation Header */}
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isItemActive = isActive === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isItemActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* User profile footer */}
      <div className="mt-auto px-4 py-6 sm:px-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            AT
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">Anna Taylor</p>
            <p className="text-xs text-gray-500 truncate">
              anna.taylor@mail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
