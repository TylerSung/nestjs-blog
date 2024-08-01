"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Posts } from "@/lib/contents";
export function MainNav({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex  items-center  justify-between  pt-10 z-50",
        className
      )}
    >
      <Link href="/" className="flex items-center justify-center gap-2  ">
        <Icons.Logo size={24} />
        <span className="font-bold">Tyler song</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {Posts.map((Post) => (
                  <ListItem
                    key={Post.title}
                    title={Post.title}
                    href={Post.href}
                  >
                    {Post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* 左边 */}
      <div className=" flex items-center justify-between gap-2">
        <ModeToggle />
        <Link href="/rss" className="hidden md:block">
          <Icons.rss size={24} />
        </Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
