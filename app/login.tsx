'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { UserCard } from "./userCard"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as <UserCard user={session?.user}/> <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}