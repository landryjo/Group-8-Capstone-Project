import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Pulbications() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Publications</h2>
      <section>
        <h2 className="text-2xl font-bold mb-2">2025</h2>
        <p className="mb-6">
          2025 Publications
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2024</h2>
        <p className="mb-6">
          2024 Publications
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2023</h2>
        <p className="mb-6">
          2023 Publications
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2022</h2>
        <p className="mb-6">
          2022 Publications
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2021</h2>
        <p className="mb-6">
          2021 Pulications
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">PRE-2021</h2>
        <p className="mb-6">
          Pre-2021 Publications
        </p>
      </section>
    </div>
  );
}