import React from "react";
import Link from "next/link";
function Logo() {
  return (
    <>
      <Link
        href="/"
        className="text-2xl tracking-wide uppercase md:text-4xl font-roboto"
      >
        HAQIFY
      </Link>
    </>
  );
}

export default Logo;
