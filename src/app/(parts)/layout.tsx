/** @format */

import { AppBreadcrumb } from "./breadcrumb";

export default function PartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <AppBreadcrumb />
      {children}
    </div>
  );
}
