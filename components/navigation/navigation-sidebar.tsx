import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import NavigationAction from "./navigation-action";

const NavigationSideBar = async () => {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex flex-col items-center h-full space-y-4 text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
    </div>
  );
};

export default NavigationSideBar;