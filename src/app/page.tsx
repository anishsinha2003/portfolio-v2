"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentPageContext } from "@/components/CurrentPageContext";

export default function Home() {
  const router = useRouter();
  const {page, setPage} = useCurrentPageContext();

  useEffect(() => {
    router.push("/aboutMe");
  }, [router]);

  return (
    <div>
    </div>
  );
}
