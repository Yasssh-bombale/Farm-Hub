import OrbitingCirclesDemo from "@/components/OrbitingCirclesDemo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col  items-center">
      <OrbitingCirclesDemo />
      <div className="max-w-xl flex items-center justify-between gap-10">
        <Link href={"/sign-up"}>
          <Button>Sign up</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  );
}
