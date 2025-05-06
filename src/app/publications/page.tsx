"use client"
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
// components/Publications.tsx
import { useEffect, useState } from 'react';

type Publication = {
  publication_id: number;
  pyear: number;
  content: string;
};

export default function PublicationsPage() {
  const [publicationsByYear, setPublicationsByYear] = useState<Record<number, Publication[]>>({});

  useEffect(() => {
    async function fetchPublications() {
      const res = await fetch('/api/publications');
      const data = await res.json();
      const pubs: Publication[] = data.publications;

      // Group by year
      const grouped: Record<number, Publication[]> = {};
      for (const pub of pubs) {
        if (!grouped[pub.pyear]) {
          grouped[pub.pyear] = [];
        }
        grouped[pub.pyear].push(pub);
      }

      // Sort years in descending order (2024 -> 2005)
      const sortedYears = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a); // Sort years in descending order

      // Sort publications within each year in ascending order based on publication_id
      const sortedGrouped: Record<number, Publication[]> = {};
      for (const year of sortedYears) {
        sortedGrouped[year] = grouped[year].sort((a, b) => a.publication_id - b.publication_id); // Sort publications in ascending order
      }

      setPublicationsByYear(sortedGrouped);
    }

    fetchPublications();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      {Object.entries(publicationsByYear).map(([year, publications]) => (
        <div key={year} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{year}</h2>
          <ul className="list-none space-y-2">
            {publications.map((pub) => (
              <li key={pub.publication_id}>{pub.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}