"use client"; // For Next.js 13 app directory - make component client-side

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </>
  );
}
