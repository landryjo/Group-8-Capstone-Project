import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Research() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Research Interests</h2>

      <section>
        <p className="mb-10">Crowdsourcing, deep learning, data science, data mining, machine learning, big data analytics, natural language processing, spatial database, information retrieval, data privacy and security, and decision support, and their applications in business, industry, medical informatics, and software engineering.</p>
      </section>

      <h2 className="text-4xl font-bold mb-6">Ongoing Projects</h2>
      <section>

      <p className="mb-2">Crowdsourcing</p>
      <p className="mb-2">deep learning</p>
      <p className="mb-2">data science</p>

      </section>

    </div>
  );
}