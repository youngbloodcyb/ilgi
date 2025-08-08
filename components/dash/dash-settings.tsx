import { Settings, Key, Database, Palette, Bell } from 'lucide-react';

export function DashSettings() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Settings</h3>
      <div className="flex flex-col gap-1">
        <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <Settings size={16} />
          <span>General</span>
        </button>
        <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <Key size={16} />
          <span>API Keys</span>
        </button>
        <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <Database size={16} />
          <span>Storage</span>
        </button>
        <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <Palette size={16} />
          <span>Theme</span>
        </button>
        <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <Bell size={16} />
          <span>Notifications</span>
        </button>
      </div>
    </div>
  );
}