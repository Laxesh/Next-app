import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1>Dashboard</h1>
      <Button>
        <Link href="/dashboard/settings">Settings</Link>
      </Button>
    </>
  );
}
