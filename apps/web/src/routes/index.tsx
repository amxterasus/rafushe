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
    <div className="relative flex min-h-150 h-[70vh] max-h-225 border-b border-dotted overflow-hidden mx-auto w-full max-w-350">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />

      <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
        <h1 className="text-4xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12">
          The <span className="text-foreground/90 italic">only </span>
          <svg role="img" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="inline-block h-12">
            <title>Roblox</title>
            <g clipPath="url(#clip0_10_85)">
              <path
                d="M31.6984 0L0 118.302L118.302 150L150 31.6984L31.6984 0ZM87.1031 95.9652L54.0454 87.1031L62.9075 54.0454L95.9784 62.9075L87.1031 95.9652Z"
                className="fill-foreground"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_85">
                <rect width="150" height="150" fill="white" />
              </clipPath>
            </defs>
          </svg>{" "}
          biolinks platform you'll ever need
        </h1>
        <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-fit">
          <Button>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
