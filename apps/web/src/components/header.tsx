import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";

export default function Header() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/dashboard", label: "Dashboard" },
	] as const;

	return (
		<div>
			<div className="w-full border-border border-dotted border-b fixed top-0 left-0 right-0 z-50 bg-background">
				<nav className="flex h-14 w-full items-center px-4">
					<ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
          {links.map(({ to, label }) => {
						return (
							<li>
                <Link key={to} to={to}>
                  {label}
                </Link>
              </li>
						);
					})}
          </ul>
          <div className="flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden">
            <ModeToggle />
            <UserMenu />
          </div>
				</nav>
			</div>
		</div>
	);
}
