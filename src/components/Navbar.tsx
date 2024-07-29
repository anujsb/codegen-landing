"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "Documentation", link: "/documentation" },
    { name: "Blog", link: "/blog" },
    { name: "Security", link: "/security" },
  ];

  return (
    <div className="relative w-full mx-10">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
