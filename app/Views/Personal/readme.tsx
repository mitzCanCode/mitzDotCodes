import { useState } from "react";
import { Link } from "react-router";

import { OldTVFrame } from "../../tv/OldTVFrame";

export function ReadMe() {

    return (
        <OldTVFrame>
            <>
                <Link className="desktop-home" to="/boot" aria-label="Return to boot">
                    <img src="/globe.gif" style={{ width: "5rem", height: "5rem" }} alt="" />
                </Link>
                <main className="desktop fade-in readme-content" aria-label="mitzCanCode about text">
                    <div className="readme-intro">
                    <img className="readme-portrait" src="/me.png" alt="The thought of mitz" />

                    <div className="readme-intro-copy">
                        <h1 className="readme-title">About me!</h1>
                        <p>
                            Hello! It seems you have stumbled upon my little corner on the internet, make yourself comfortable and take a look around! This is a personal portfolio website that I have built to showcase my work and skills as a software developer.
                        </p>

                    </div>
                                </div>

                        <p>
                            My name is Dimitris Chatzigeorgiou, I am a Computer Science undergraduate at the University of Piraeus, and in my part-time I enjoy creating other little spaces on the internet such as this one! My software development journey started back in February 22, 2023, when I first started writing code in high school.
                        </p>
                        <p>
                            Coding is more than just a technical skill for me, it is a creative outlet where I can explore ideas, solve complex problems and build useful software from the ground up. 
                        </p>
                        <p>
                            I develop several kinds of software, all the way from the frontend to the backend of a system. From websites, e-commerce stores, mobile applications, APIs, automation tools, you name it chances are I can build it. 
                        </p>

                        <p>
                            My skill set is constantly evolving wether that is the programming languages I know, software engineering practices, cybersecurity practices, I am always evolving with the tech world whilst trying to learn everything I can about building secure and scalable applications.
                        </p>

                </main>
            </>
        </OldTVFrame>
    );
}
