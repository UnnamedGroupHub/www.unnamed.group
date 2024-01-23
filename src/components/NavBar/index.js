"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "https://shop.unnamed.group" },
  { name: "Donate", href: "/donate" },
];

const socials = [
  {
    name: "GitLab",
    href: "https://gitlab.com/unnamed.group",
    icon: "https://cdn.simpleicons.org/gitlab",
  },
  {
    name: "Discord",
    href: "https://discord.gg/JnDGdHp9JV",
    icon: "https://cdn.simpleicons.org/discord",
  },
  {
    name: "Twitter/X",
    href: "https://twitter.com/UnnamedGroupX",
    icon: "https://cdn.simpleicons.org/twitter",
  },
];

export default function NavBar() {
  let active = usePathname().toLowerCase().replace("/", "");
  if (active === "") active = "home";

  return (
    <>
      <nav className="flex flex-col items-center justify-between p-4 space-y-4 mb-8">
        <img src="/logo.gif" alt="Unnamed Group" className="h-32" />
        <div id="NavBar_Links" className="flex-grow text-2xl space-x-4">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`${
                  active.toLowerCase() === link.name.toLowerCase()
                    ? "underline"
                    : "hover:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div id="NavBar_Socials" className="flex flex-row space-x-4 pt-4">
          {socials.map((social, index) => {
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`${social.icon}`} alt={social.name} className="h-8" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
