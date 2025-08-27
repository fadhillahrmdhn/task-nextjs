"use client";

import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams<{ slug: string[] }>();

  if (!params?.slug) {
    return (
      <div className="flex min-h-screen items-center justify-center ">
        Halaman ini menggunakan optional catch-all route. Silakan berikan ID dan
        username di URL.
      </div>
    );
  }

  const id: string = params.slug[0];
  const username: string = params.slug[1];

  return (
    <div className="flex min-h-screen items-center justify-center">
      User ID: {id}, Username: {username}
    </div>
  );
}
