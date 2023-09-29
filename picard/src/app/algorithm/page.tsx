// "use client"
// import Image from 'next/image'
// import React  from 'react';
// import Link from 'next/link';
// import { ChangeEvent, useState } from "react";
// import './algor.css'; // Importing a CSS file

// function sayHello() {
//   alert('Loading');
// }



// export default function Home() {
  
//   return (
    
//     <main className="">
//       <ul className="logo-button">
//          {/* The following code shows the logo in the top left corner and takes you back to the login page when clicked*/}
//       <Link href="/homepage">
//            <button  style={{
//           background: 'dark-grey',
//         }}>
//          <Image className='backgroundColor: rgba(52, 52, 52, 0.8)'
//       src="/logo.png"
//       width={100}
//       height={100}
//       alt=""
      
//     /></button> </Link>
//       </ul>
//       <div className='spacing'></div>
//       <div className='spacing'></div>

//         <div className="justify-content:right place-items-center before:absolute before:h-[100px] before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         </div>
//         <div className='spacing'></div>
//         {/* the following code makes the algorithm 1 button that currently just displays a loading message */}
//         <button onClick={sayHello} style={{
//           background: 'dark-grey',
//         }}>
//         <p className="algo">
//         Algorithm 1</p></button> 
//            <button onClick={sayHello} style={{
//           background: 'dark-grey',
//         }}>
//           <div className='spacing'></div>
//           {/* the following code makes the algorithm 2 button that currently just displays a loading message */}
//           <p className="algo">
//         Algorithm 2</p></button> 
        
//         <button onClick={sayHello} style={{
//           background: 'dark-grey',
//         }}> 
//         <div className='spacing'></div>
//        {/* the following code makes the algorithm 3 button that currently just displays a loading message */}
//        <p className="algo">
//         Algorithm 3</p></button> 
//        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
//       </div> 
    
//         <div className='justify-center'>
//         {/* <button onClick={sayHello} style={{
//           background: 'dark-grey',
//         }}>
//         <p className="fixed center-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//         Return to Main</p></button>  */}

//         </div>

//     </main>
//   )
//     }
import Image from 'next/image'
import React  from 'react';
import Link from 'next/link';
import "./algor.css";

export default function Results() {
    return (
        <main className="main-container">

            <div  style={{position:"absolute", float: "left", left:250, top:30}}>
                <Link href="/homepage">
                <button className="">
                    <Image src="/logo.png" width={100} height={100} alt="" />
                </button>
                </Link>
                

               
            </div>
            <div style={{position:"absolute", float: "left", left:1100, top:100}}>
            <Link href="/homepage">
            <button
              style={{
                background: 'dark-grey',
              }}
            >
              <p className="button">
                Return to Main
              </p>
            </button>
          </Link></div>

            <div>
                <div style={{position:"absolute", float: "left", left:550, top:200}}>
                    <button
                        style={{
                            background: 'dark-grey',
                            width: 500,
                            marginRight: 15,
                        }}
                    >
                        <p className="button">
                            Algorithm 1: Description
                        </p>
                    </button>
                   
                </div>
                
                <div style={{position:"absolute", float: "left", left:550, top:300}}>
                    <button
                    style={{
                        background: 'dark-grey',
                        width: 500,
                        marginRight: 15,
                    }}
                    >
                        <p className="button">
                        Algorithm 2: Description
                        </p>
                    </button>
                   
                </div>

                <div style={{position:"absolute", float: "left", left:550, top:400}}>
                    <button
                    style={{
                        background: 'dark-grey',
                        width: 500,
                        marginRight: 15,
                    }}
                    >
                        <p className="button">
                        Algorithm 3: Description
                        </p>
                    </button>
                    
                </div>

                <div style={{position:"absolute", float: "left", left:550, top:500}}>
                    <button
                    style={{
                        background: 'dark-grey',
                        width: 500,
                        marginRight: 15,
                    }}
                    >
                        <p className="button">
                        Algorithm 4: Description
                        </p>
                    </button>
                    
                </div>

                <div style={{position:"absolute", float: "left", left:230, top:170}}>
                <Link href="/addalgorithm">
            <button
              style={{
                background: 'dark-grey',
              }}
            >
              <p className="button">
                Add Algorithm
              </p>
            </button>
          </Link>
                   
                </div>
                                
            </div>

            <div 
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            </div>

            <div 
                className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            </div>

        </main>
    )
}

  