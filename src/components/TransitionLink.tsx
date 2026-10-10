"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { cover } from "@/lib/transition";

type Props = ComponentProps<typeof Link> & { href: string };

export function TransitionLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function handle(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    const external = /^https?:|^mailto:|^tel:/.test(href);
    const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (external || modified || href === pathname) return;
    e.preventDefault();
    cover(() => router.push(href));
  }

  return <Link href={href} onClick={handle} {...rest} />;
}
