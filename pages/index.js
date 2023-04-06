import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Executive Summary:
        In our initial proposal, we decided to redesign four different educational games for children aged pre-kindergarten to grade 8 and bundle them into one consolidated website. These games were primarily focused on counting. The problems with the initial games included the following issues: overly verbose instructions, little to no feedback on errors, and poor controls that were un-intuitive to use. In our redesign, we aimed to correct these issues, and implement new ideas attuned with good human-computer interaction principles.
      </p>
    </main>
  )
}
