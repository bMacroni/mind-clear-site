// next/link stands in as a plain anchor outside the Next runtime.
import * as React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
