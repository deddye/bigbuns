import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-1/5 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <button className="rounded h-full text-lg text-center dark:md:hover:bg-zinc-900 ">
          Dashboard
        </button>
        <button className="rounded text-lg dark:md:hover:bg-zinc-900 text-center">
          Button 2
        </button>
      </div>
    </div>
  );
}
