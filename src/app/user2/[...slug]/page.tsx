"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams<{ slug: string[] }>();
  const id: string = params.slug[0];
  const username: string = params.slug[1];

  return (
    <div className="flex min-h-screen items-center justify-center">
      User ID: {id}, Username: {username}
    </div>
  );
}
