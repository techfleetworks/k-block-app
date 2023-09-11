import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import * as React from "react";
import Tablet from "./responsiveness/tablet";
import Desktop from "./responsiveness/desktop";
import Mobile from "./responsiveness/smartphone";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [isTablet, setIsTablet] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }

      if (window.innerWidth < 1024 && window.innerWidth > 670) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }

      if (window.innerWidth < 670) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="md:px-12 py-4 bg-neutral-n-0 px-3">
      <nav className="flex justify-between items-center gap-4">
        {isDesktop && <Desktop />}
        {isTablet && (
          <div className="items-center">
            <Tablet />
            <div className="relative lg:flex items-center border border-neutral-n-250 rounded-lg flex-grow flex-shrink mt-2 w-[90vw]">
              <Input
                type="text"
                id="search"
                placeholder="Search by Address / Request Key / Block / Token"
                className="text-neutral-n-400 text-xs rounded-lg border-none h-8"
              />
              <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-n-450 py-2 w-[45px] h-8" />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="items-center">
            <Mobile />
            <div className="relative lg:flex items-center border border-neutral-n-250 rounded-lg flex-grow flex-shrink mt-2 w-[95vw]">
              <Input
                type="text"
                id="search"
                placeholder="Search by Address / Request Key / Block / Token"
                className="text-neutral-n-400 text-xs rounded-lg border-none h-8"
              />
              <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-n-450 py-2 w-[45px] h-8" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
