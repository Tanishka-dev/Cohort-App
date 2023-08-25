"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
function LeftBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="leftsidebar custom-scrollbar">
      <div className="flex flex-col w-full flex-1 gap-2 px-4">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={"leftsidebar_link"}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={18}
                height={18}
              />
              <p
                className={`${
                  isActive ? "text-[#38BDF8]" : "text-[#c4c4c8]"
                } max-lg:hidden text-small-regular hover:text-[#98989a] `}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-4">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer p-4 gap-4 ">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={18}
                height={18}
              />
              <p className="max-lg:hidden text-[#c4c4c8] text-small-regular hover:text-[#38BDF8]">
                Logout
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftBar;
