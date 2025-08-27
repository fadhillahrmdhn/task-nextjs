"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  // const params = useParams<{ id: string }>();
  // return <div>User ID: {params.id}</div>;

  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex min-h-screen items-center justify-center">
      User ID: {id}
    </div>
  );
}
