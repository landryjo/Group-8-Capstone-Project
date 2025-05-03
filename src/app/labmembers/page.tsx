"use client"
import React, { useState, useEffect } from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

// Define a type for the member object
interface Member {
  member_id: number;
  member_first_name: string;
  member_last_name: string;
  email: string;
  lab_status: string;
}

export default function LabMembers() {
  const [members, setMembers] = useState<Member[]>([]) // Specify the type for the members state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/members')
        const response = await data.json()
        setMembers(response.members) // Assuming the response contains a 'members' field with an array of members
        console.log(response.members)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      Lab Members Page
      {members.map((member) => (
        <div key={member.member_id}>
          {member.member_first_name} {member.member_last_name} - {member.lab_status}
        </div>
      ))}
    </div>
  );
}