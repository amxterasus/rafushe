import { createFileRoute } from "@tanstack/react-router";
import { orpc } from "@/utils/orpc";
import { useQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});


const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "roblox"
    })
}

function HomeComponent() {
	const healthCheck = useQuery(orpc.healthCheck.queryOptions());

	return (
		<div className="mx-auto max-w-2xl sm:mx-0">
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="font-700 text-5xl text-white leading-[1.3] tracking-normal sm:text-5xl sm:leading-[1.1] md:text-6xl">
          The <span className="text-white/90 italic">only </span>
          <svg role="img" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="inline-block h-12">
            <title>Roblox</title>
            <g clip-path="url(#clip0_10_85)"><path d="M31.6984 0L0 118.302L118.302 150L150 31.6984L31.6984 0ZM87.1031 95.9652L54.0454 87.1031L62.9075 54.0454L95.9784 62.9075L87.1031 95.9652Z" fill="white"></path></g>
            <defs><clipPath id="clip0_10_85"><rect width="150" height="150" fill="white"></rect></clipPath></defs>
          </svg>
          {" "}biolinks platform you'll ever need
        </h1>
        <p className="mx-auto max-w-lg font-500 text-lg text-white/40 leading-[1.2] tracking-tight sm:mx-0 sm:text-lg md:text-xl">
          Create stunning <span className="text-white/90">bio links</span>, showcase your content, and <span className="text-white/90">connect</span> with your audience.
        </p>
      </div>
    </div>
	);
}
