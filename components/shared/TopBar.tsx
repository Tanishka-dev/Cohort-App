import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex gap-4 items-center">
        <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
        <p className="text-light-1 max-xs:hidden text-heading3-bold">
          {"Co->Hort"}
        </p>
      </Link>

      <div className="flex items-center gap-2">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={28}
                  height={28}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default TopBar;
