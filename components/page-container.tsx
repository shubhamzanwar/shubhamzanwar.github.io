export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-[800px] flex-col gap-16 px-4 pt-16 sm:px-[100px]">
      {children}
    </main>
  )
}
