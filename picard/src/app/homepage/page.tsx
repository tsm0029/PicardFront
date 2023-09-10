import Image from 'next/image'; // Importing the Image component from 'next/image'
import React from 'react';
import Link from 'next/link';
import './styles.css'; // Importing a CSS file

export default function Home() {
  return (
    <main className="main-container">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        {/* The following code shows the logo in the top right corner and takes you back to the login page when clicked*/}
        <Link href="/homepage">
          <button className="logo-button">
            <Image src="/logo.png" width={100} height={100} alt="" />
          </button>
        </Link>

        {/* The following div contains the Log Out button */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link href="/">
            <button
              style={{
                background: 'dark-grey',
              }}
            >
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Log Out
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div>
        {/* the following code makes the button that will take you to the experiment page */}
        <Link href="/experiment">
          <button
            style={{
              background: 'dark-grey',
            }}
          >
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Create Experiment
            </p>
          </button>
        </Link>
        {/* the following code makes the button that will take you to the algorithm page */}
        <Link href="/algorithm">
          <button
            style={{
              background: 'dark-grey',
            }}
          >
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Description of Algorithms
            </p>
          </button>
        </Link>
        {/* the following code makes the button that will take you to the pastResults page */}
        <Link href="./pastResults">
          <button
            style={{
              background: 'dark-grey',
            }}
          >
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Past Results
            </p>
          </button>
        </Link>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
