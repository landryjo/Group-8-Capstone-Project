import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Research() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Lab Members</h2>
      <section>
        <h2 className="text-2xl font-bold mb-2">Research Project 1</h2>
        <p className="mb-6">
          Research Project Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Research Project 2</h2>
        <p className="mb-6">
          Research Project Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Research Project 3</h2>
        <p className="mb-6">
          Research Project Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Research Project 4</h2>
        <p className="mb-6">
          Research Project Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Research Project 5</h2>
        <p className="mb-6">
          Research Project Information
        </p>
      </section>
    </div>
  );
}