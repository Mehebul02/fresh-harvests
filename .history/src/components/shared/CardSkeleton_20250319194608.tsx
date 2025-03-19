import { Skeleton } from "@/components/ui/skeleton"
import Container from "./Container"

export function SkeletonCard() {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    </Container>
  )
}
