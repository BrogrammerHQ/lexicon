import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);

    return (
      <>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        {/* <Link href="/app"> */}
        <Button colorScheme="facebook" onClick={() => signOut()}>
          {/* <Button colorScheme="facebook" leftIcon={<FaGoogle />}> */}
          Continute as {session?.user?.email}
        </Button>
        {/* </Link> */}
      </>
    );
  }
  return (
    <>
      <Button
        colorScheme="facebook"
        onClick={() => signIn()}
        leftIcon={<FaGoogle />}
      >
        Sign in with Google
      </Button>
    </>
  );
}
