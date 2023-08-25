"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function BottomBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={"bottombar_link"}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={18}
                height={18}
                className="object-contain"
              />
              <p
                className={`${
                  isActive ? "text-[#38BDF8]" : "text-[#c4c4c8]"
                }  max-sm:hidden text-small-regular hover:text-[#98989a] `}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BottomBar;
