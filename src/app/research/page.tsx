"use client"
import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";


import { useEffect, useState } from 'react';

type Project = {
  project_id: number;
  project_name: string;
  project_content: string;
};

export default function ResearchPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch('/api/research');
      const data = await res.json();
      setProjects(data.projects);
    }

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Research Projects</h1>
      {projects.map((project) => (
        <div key={project.project_id} className="mb-6">
          <h2 className="text-2xl font-semibold capitalize">{project.project_name}</h2>
          <p> {project.project_content} </p>
        </div>
      ))}
    </div>
  );
}