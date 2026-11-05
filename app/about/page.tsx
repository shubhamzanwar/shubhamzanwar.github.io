import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"

export default function AboutPage() {
  return (
    <PageContainer>
      <section>
        <PageTitle page="about" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Placeholder content for the about page.
        </p>
      </section>
    </PageContainer>
  )
}
