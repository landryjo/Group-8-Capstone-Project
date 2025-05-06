"use client"
import React, { useState, useEffect, ReactNode } from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

// Define a type for the member object
interface Member {
  projects: ReactNode;
  member_id: number;
  member_first_name: string;
  member_last_name: string;
  email: string;
  lab_status: string;
}

export default function LabMembers() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/members");
        const data = await res.json();
        if (data.members) {
          setMembers(data.members);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchData();
  }, []);

  // Group members by lab_status
  const groupedMembers = members.reduce<Record<string, Member[]>>((acc, member) => {
    const status = member.lab_status;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(member);
    return acc;
  }, {});

  // Order for display (custom order, not alphabetical)
  const statusOrder = [
    "Founder",
    "Co-Founder",
    "Graduate Student",
    "Undergraduate Student",
    "High School Student",
    "Alumni",
  ];

  return (
    <div className="m-4">
      <h1 className="text-4xl font-bold mb-6">Lab Members</h1>

      {statusOrder.map((status) => {
        const membersInStatus = groupedMembers[status];
        if (!membersInStatus) return null;

        return (
          <section key={status} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">{status}s</h2>
            {membersInStatus.map((member) => (
              <div key={member.member_id} className="mb-2">
                <p>
                  Name: {member.member_first_name} {member.member_last_name}
                </p>
                <p>
                  Email: {member.email}
                </p>
                <p>
                  Research Interest: {member.projects}
                </p>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}