// src/components/UserInfo.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session)
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );

  return (
    <div>
      <p>Signed in as: {session.user?.email}</p>
      <p>Access Token: {session.accessToken}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
