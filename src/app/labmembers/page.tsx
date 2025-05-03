import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function LabMembers() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Lab Members</h2>
      <section>
        <h2 className="text-2xl font-bold mb-2">Founder/Director</h2>
        <p className="mb-6">
          Founder/Director Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Faculty Members</h2>
        <p className="mb-6">
          Faculty Member Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Graduate Students</h2>
        <p className="mb-6">
          Graduate Student Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Undergraduate Studetns</h2>
        <p className="mb-6">
          Undergraduate Student Information
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Alumni Members</h2>
        <p className="mb-6">
          Alumni Member Information
        </p>
      </section>
    </div>
  );
}