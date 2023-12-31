"use client"
import Image from 'next/image'
import React  from 'react';
import Link from 'next/link';
import { ChangeEvent, useState } from "react";
import "./page.css";
import Menu from "./Menu";

function sayHello() {
  alert('Loading');
}

export default function Home() {
  return (
    <main className="main-container">

      <div className="max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        <Link href="/homepage">
          <button className="logo-button">
            <Image src="/logo.png" width={100} height={100} alt="" />
          </button>
        </Link>

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
          </Link>
      </div>

      <div style={{position:"absolute", float: "left", left:525, top:465}}> 
        <div className="card">
          <div className="chat-header">Results of Current Experiment</div>
          <div className="chat-window">
              <ul className="message-list"></ul>
          </div>    
        </div>
      </div>

      <div style={{position:"absolute", float: "left", left:525, top:100}}>
        <button
          style={{
              background: 'dark-grey',
              width: 350,
          }}
        >
          <p className="button">
              Environment
          </p>
        </button>
        <button
            style={{
                background: 'dark-grey',
            }}
        >
            <p className="button">
                Distribute
            </p>
        </button>
      </div>

      <div style={{position:"absolute", float: "left", left:1020, top:280}}>
      <button
          style={{
            background: 'dark-grey',
            width: 275,
          }}
        >
          <div className="button">
            <Menu />
            
          </div>
        </button>
      </div>  
        
      <div style={{position:"absolute", float: "left", left:525, top:280}}>
        <button
          style={{
            background: 'dark-grey',
            width: 250,
          }}
        >
          <p className="button">   <label className="white text-sm">
                Number of Nodes
            </label>
            <input type="number" min={0}  className="node" >
              </input> 
          </p>
         
            
          
        </button>
      </div>

      <div style={{position:"absolute", float: "left", left:800, top:370}}>
        <button
          style={{
            background: 'dark-grey',
            width: 200,
          }}
        >
          <p className="button">
            Run Experiment
          </p>
        </button>
      </div>

      <div >
        <div style={{position:"absolute", float: "left", left:1200, top:500}}>
          <button
            style={{
              background: 'dark-grey',
              width: 160,
            }}
          >
            <p className="button">
              Save Locally
            </p>
          </button>
        </div>

        <div style={{position:"absolute", float: "left", left:1200, top:650}}>
          <button
            style={{
              background: 'dark-grey',
              width: 160,
            }}
          >
            <p className="button">
              Delete Results
            </p>
          </button>
        </div>
      </div>

      <div 
        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div 
        className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>

    </main>
  );
}