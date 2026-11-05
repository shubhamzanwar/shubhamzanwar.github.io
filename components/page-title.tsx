import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Renders "shubhamzanwar/<page>", with "shubhamzanwar" linking home.
export function PageTitle({ page }: { page: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 text-base leading-7">
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>
            shubhamzanwar
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
