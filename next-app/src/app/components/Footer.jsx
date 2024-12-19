import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex  justify-between align-items gap-2  bg-slate-50  p-4">
      <p className="font-bold  text-blue-600">
        <Link href="https://github.com/alperenbekci/forever-messages">
          Open Source
        </Link>
      </p>
      <p className="text-black">Builded in JSM Hackathon💙</p>
    </footer>
  );
};

export default Footer;
