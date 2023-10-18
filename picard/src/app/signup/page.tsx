"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import "./styles.css";
import { Auth, UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { initFirebase } from "../api/router";
import { GoogleAuthProvider } from "firebase/auth";



const app = initFirebase;
console.log(app);
// const provider = new GoogleAuthProvider();
// const auth = getAuth();

// const signIn =async () => {
//   const result = await signInWithPopup(auth, provider)
//   console.log(result.user)
// }

// function sayHello() {
//   alert("Loading");
// }

export default function Home() {
  // const auth: Auth = getAuth();
  // const signUp = async () => {
  //   async function createUserWithEmailAndPassword(auth:Auth, email: string, password: string): Promise<void> {
    
  //     try {
  //       const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     } catch (error: any) {
  //       const errorCode: string = error.code;
  //       const errorMessage: string = error.message;
  //       // Handle the error as needed
  //     }
  //   }
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        {/* The following code shows the logo in the top left corner and takes you back to the login page when clicked*/}
        <Link href="/">
          <button
            style={{
              background: "dark-grey",
            }}
          >
            <Image src="/logo.png" width={100} height={100} alt="" />
          </button>{" "}
        </Link>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      {/* The following code makes the input field for the email*/}
      <p className="input1">
        <input
          type="text"
          id="email"
          placeholder="email"
          style={{
            background: "black",
          }}
        ></input>
      </p>

      {/* The following code makes the input field for the password*/}
      <p className="input1">
        <input
          type="password"
          color="text-gray-950"
          id="password"
          placeholder="password"
          style={{
            background: "black",
          }}
        ></input>
      </p>
      {/* The following code makes the sign up button that will take you to the homepage*/}
        <button
          style={{
            background: "dark-grey",
          }}
        >
          <p className="button">Sign up</p>
        </button>{" "}


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
