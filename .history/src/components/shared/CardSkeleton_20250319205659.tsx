import { Skeleton } from "@/components/ui/skeleton";
import Container from "./Container";
import { twMerge } from "tailwind-merge";

export function SkeletonCard({className}:{className?}) {
  return (
    <Container className={twMerge("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-300" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-300" />
            <Skeleton className="h-4 w-[200px] bg-gray-300" />
          </div>
        </div>
      ))}
    </Container>
  );
}
