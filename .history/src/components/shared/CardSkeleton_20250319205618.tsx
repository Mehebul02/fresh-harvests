import { Skeleton } from "@/components/ui/skeleton";
import Container from "./Container";

export function SkeletonCard() {
  return (
    <Container className={twMerge("max-w-[1240px] mx-auto px-4 lg:px-0", className)} className="">
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
