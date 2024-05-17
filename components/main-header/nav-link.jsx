'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from "@/components/main-header/nav-link.module.css";

function NavLink({href, children}) {
    const path = usePathname();
    return (
        <Link
            href={href}
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
            /*path === href   =>  path.startsWith(href) */
        >
            {children}
        </Link>
    );
}

export default NavLink;