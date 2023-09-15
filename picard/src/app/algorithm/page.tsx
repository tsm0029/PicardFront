"use client"
import Image from 'next/image'
import React  from 'react';
import Link from 'next/link';
import { ChangeEvent, useState } from "react";
import './algor.css'; // Importing a CSS file

function sayHello() {
  alert('Loading');
}



export default function Home() {
  
  return (
    
    <main className="">
      <ul className="logo-button">
         {/* The following code shows the logo in the top left corner and takes you back to the login page when clicked*/}
      <Link href="/homepage">
           <button  style={{
          background: 'dark-grey',
        }}>
         <Image className='backgroundColor: rgba(52, 52, 52, 0.8)'
      src="/logo.png"
      width={100}
      height={100}
      alt=""
      
    /></button> </Link>
      </ul>
      <div className='spacing'></div>
      <div className='spacing'></div>

        <div className="justify-content:right place-items-center before:absolute before:h-[100px] before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
        <div className='spacing'></div>
        {/* the following code makes the algorithm 1 button that currently just displays a loading message */}
        <button onClick={sayHello} style={{
          background: 'dark-grey',
        }}>
        <p className="algo">
        Algorithm 1</p></button> 
           <button onClick={sayHello} style={{
          background: 'dark-grey',
        }}>
          <div className='spacing'></div>
          {/* the following code makes the algorithm 2 button that currently just displays a loading message */}
          <p className="algo">
        Algorithm 2</p></button> 
        
        <button onClick={sayHello} style={{
          background: 'dark-grey',
        }}> 
        <div className='spacing'></div>
       {/* the following code makes the algorithm 3 button that currently just displays a loading message */}
       <p className="algo">
        Algorithm 3</p></button> 
       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
      </div> 
    
        <div className='justify-center'>
        {/* <button onClick={sayHello} style={{
          background: 'dark-grey',
        }}>
        <p className="fixed center-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Return to Main</p></button>  */}

        </div>

    </main>
  )
    }
  