import Image from 'next/image'
import React  from 'react';
import Link from 'next/link';
import "./page.css";

export default function Results() {
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
                    <p className="my-element">
                        Return to Main
                    </p>
                    </button>
                </Link>
            </div>
            


            <div>
                <div style={{position:"absolute", float: "left", left:550, top:200}}>
                    <button
                        style={{
                            background: 'dark-grey',
                            width: 500,
                            marginRight: 15,
                        }}
                    >
                        <p className="my-element">
                            Experiment 1: Results and Metrics
                        </p>
                    </button>
                    <button
                        style={{
                            background: 'dark-grey',
                        }}
                    >
                        <p className="my-element">
                            Delete
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
                        <p className="my-element">
                            Experiment 2: Results and Metrics
                        </p>
                    </button>
                    <button
                        style={{
                            background: 'dark-grey',
                        }}
                    >
                        <p className="my-element">
                            Delete
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
                        <p className="my-element">
                            Experiment 3: Results and Metrics
                        </p>
                    </button>
                    <button
                        style={{
                            background: 'dark-grey',
                        }}
                    >
                        <p className="my-element">
                            Delete
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
                        <p className="my-element">
                            Experiment 4: Results and Metrics
                        </p>
                    </button>
                    <button
                        style={{
                            background: 'dark-grey',
                        }}
                    >
                        <p className="my-element">
                            Delete
                        </p>
                    </button>
                </div>

                <div style={{position:"absolute", float: "left", left:550, top:600}}>
                    <button
                    style={{
                        background: 'dark-grey',
                        width: 500,
                        marginRight: 15,
                    }}
                    >
                        <p className="my-element">
                            Experiment 5: Results and Metrics
                        </p>
                    </button>
                    <button
                        style={{
                            background: 'dark-grey',
                        }}
                    >
                        <p className="my-element">
                            Delete
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
    )
}
