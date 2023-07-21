"use client";
import Image from "next/image";
import React, { useState } from "react";

const Menu = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;
