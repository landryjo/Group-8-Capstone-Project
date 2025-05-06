"use client"
import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

import { useEffect, useState } from "react";

type NewsItem = {
  news_id: number;
  news_content: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data.news || []);
    }
    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      {news.map((item) => (
        <div key={item.news_id} className="mb-4">
          <p>{item.news_content}</p>
        </div>
      ))}
    </div>
  );
}