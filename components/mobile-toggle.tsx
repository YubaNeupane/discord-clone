import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationSideBar from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

export const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex gap-0 p-0">
        <div className="w=[72px]">
          <NavigationSideBar />
        </div>
        <ServerSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};
