"use client"

import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getSession } from "next-auth/react"

export default function HomePage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    )
  }

  if (session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center space-y-4">
          <p className="text-xl font-semibold text-gray-800">
            Signed in as <span className="text-blue-600">{session.user?.email}</span>
          </p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6">
        <p className="text-lg font-medium text-gray-700">Not signed in</p>
        <div className="space-x-4">

          <button
            onClick={() => signIn("github")}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Sign in with GitHub
          </button>

          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-white-100 border transition"
          >
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Sign in with Facebook
          </button>

        </div>
      </div>
    </div>
  )
}
