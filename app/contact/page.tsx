import { PageContainer } from "@/components/page-container"
import { PageTitle } from "@/components/page-title"

export default function ContactPage() {
  return (
    <PageContainer>
      <section>
        <PageTitle page="contact" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Placeholder content for the contact page.
        </p>
      </section>
    </PageContainer>
  )
}
