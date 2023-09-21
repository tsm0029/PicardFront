"use client"
import Image from 'next/image'
import React  from 'react';
import Menu from "./components/menu";
import { ChangeEvent, useState } from "react";
import Link from 'next/link';
import './styles.css';

// style={{
          
//   background: 'black',
// }}>

function sayHello() {
  alert('Loading');
}

// metadata doesnt work with use client
// export const metadata = {
//   title: "PICARD",
//   description: "hdbhbdcs",
// }


export default function Home() {
  
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        {/* The following code shows the logo in the top left corner and takes you back to the login page when clicked*/}
       <Link href="/">
           <button  style={{
          background: 'dark-grey',
        }}>
          
         <Image
      src="/logo.png"
      width={100}
      height={100}
      alt=""
    /></button> </Link>
       
        
        
        
        
         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
        </div> 
        
      </div>


        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
        {/* The following code makes the input field for the email*/}
        <p className="input1">
          <input type="text"  id="email" placeholder='email' style={{
          background: 'black',
        }}>
        </input>
        </p>
        {/* The following code makes the input field for the password*/}
        <p className="input1">
          <input type="password" color='text-gray-950' id="password" placeholder='password' style={{
          background: 'black',
        }}></input> 
        </p>
        <div>
          {/* The following code makes sign up button that will take you to the sign up page*/}
        <Link href="/signup">
        <button  style={{
          background: 'dark-grey',
        }}> 
        <p className="button">
           Sign up</p></button> </Link>
           {/* The following code makes the login button that will take you to the homepage*/}
           <Link href="/homepage">
           <button  style={{
          background: 'dark-grey',
        }}>
        <p className="button">
           Log in</p></button> </Link> </div>
      

       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
      </div> 
    </main>
  )
    }
  