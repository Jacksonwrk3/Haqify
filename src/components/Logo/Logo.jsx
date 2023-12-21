import React from "react";
import Link from "next/link";
function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <a>Haqify</a>
      </Link>
    </>
  );
}

export default Logo;
