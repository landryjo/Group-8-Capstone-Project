import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function News() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">News/Announcements</h2>
      <section>

        <h2 className="text-2xl font-bold mb-2">News</h2>
        <p className="mb-6">June 2022, Ph.D. student Xi Wang attended IPDPS'22 and won the Best Paper Award at IPDPS'22 for the research paper of “xBGAS: A Global Address Space Extension on RISC-V for High Performance Computing”.</p>
        <p className="mb-6">November 2021, Ph.D. student Wei Zhang attended SC'21 in St. Louis, MO and presented his research study “Exploiting User Activeness for Data Retention in HPC Systems”.</p>
        <p className="mb-6">January 2021, We are the co-organizer of The 50th International Conference on Parallel Processing. ICPP is one of the oldest computer science conferences and a premier venue for presenting the latest research on all aspects of parallel processing. Please consider to make submissions of your high-quality research work there.</p>
        <p className="mb-6">November 2019, Ph.D. student Wei Zhang attended SC'19 in Denver, CO and presented his research study “MIQS: Metadata Indexing and Querying Service for Self-describing File Formats”.</p>
        <p className="mb-6">July 2019, Ph.D. student Misha Ahmadian won the Best Student Poster Award at PEARC'19 for the research study of “Reducing Faulty Jobs by Job Submission Verifier in Grid Engine”. Congratulations to him!</p>
        <p className="mb-10">May 2019, We are organizing The 3rd Industry/University Joint International Workshop on Data-Center Automation, Analytics, and Control (DAAC) at SC'19 in Denver, CO. Please consider to make submissions of your high-quality research work there.</p>

      </section>

      <section>

        <h2 className="text-2xl font-bold mb-2">Announcements</h2>
        <p className="mb-6">Check Back for Lab updates including position openings, research opportunites, and scholorship opportunities</p>

      </section>

    </div>
  );
}