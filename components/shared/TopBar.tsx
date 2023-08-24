import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex gap-4 items-center">
        <div className="radius-100%">
          <Image src="/assets/logo.png" alt="logo" width={28} height={28} />
        </div>
        <p className="text-light-1 max-xs:hidden text-heading4-medium ">
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
                  width={20}
                  height={20}
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
