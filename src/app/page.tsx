import Image from 'next/image'
import List from './_components/List'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List/>
    </main>
  )
}
