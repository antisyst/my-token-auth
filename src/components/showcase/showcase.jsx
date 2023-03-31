import { Container, Row, Col, Spacer } from "@nextui-org/react";
import { Grid, Card, Text, Link } from "@nextui-org/react";
import { RiHtml5Fill, RiCss3Fill, RiReactjsFill, RiGatsbyFill, RiGitBranchLine } from 'react-icons/ri';
import { MdOutlineJavascript } from 'react-icons/md';
import TypeScriptIcon from "@/icons/typescript";
import $ from 'jquery';
import { useEffect } from "react";
import React from "react";
import { HiOutlineArrowRight } from 'react-icons/hi'
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiBootstrap, SiVite, SiRedux, SiMui, SiWebpack, SiReactrouter, SiStorybook, SiSemanticuireact, SiAntdesign, SiChakraui, SiPostcss, SiFigma, SiJest, SiScrollreveal, SiDaisyui } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb'
import { DiSass, DiJqueryLogo, DiNpm } from 'react-icons/di';
import ZastCarsIcon from "@/icons/zastcars";
import VathAppIcon from "@/icons/vath";
import CdnverseIcon from "@/icons/cdnverse";
import DevolveIcon from "@/icons/devolve";
import NastupIcon from "@/icons/nastup";
import LandsenseIcon from "@/icons/landsense";
import StokenIcon from "@/icons/stoken";
import ExoWearIcon from "@/icons/exowear";
import JamesRobert from "@/icons/james";
import dynamic from "next/dynamic";





export default function Showcase() {
    return(
        <>
        <div className="extended-showcase-element">
            <div className="inline-showcase-element_1">
                <Text h3 className="m-0 animate__animated animate__fadeIn" >Hi, my name is</Text>
                <Text h1  className="m-0 animate__animated animate__fadeIn">Ramazan Azimli<span>.</span></Text>
                <Text h2  className="m-0 animate__animated animate__fadeIn">I'am Frontend <span>UI</span> Developer <b>.</b></Text>
                <div className="inline-showcase-element">
                    <Text p className="animate__animated animate__fadeIn">Scroll Down</Text>
                </div>
            </div>
        </div>
        <div className="extended-component-about">
             <Text h1 className="first-section-item-content">About <span>me</span></Text>
            <div className="extended-inline-item-about-content">
              <Text p>
                I'am a passionate <Text span> Frontend Developer</Text> in building visually appealing and user-friendly websites. I have a strong understanding of modern web development technologies and frameworks such as <Text span>HTML</Text>, <Text span>CSS</Text>, <Text span>JavaScript</Text>, <Text span>React</Text> and etc. I have a keen eye for design and a solid understanding of user experience principles.
                I have worked on various projects, from small-scale websites to large-scale enterprise prjects. I'am a skilled communicator who excels at collaborating with designers, developers, and project managers to ensure that projects are delivered on time and within budget. I'am always looking for new challenges and opportunities to improve My skills and knowledge in the field of web development.
              </Text>
           </div>
        </div>
        <div className="extended-component-skills">
        <Text h1 className="first-section-item-content">Skills</Text>
            <div className="extended-skills-section-container">
                <div className="const-skills-section_item">
                    <RiHtml5Fill/>
                    <Text h2>HTML5</Text>
                </div>
                <div className="const-skills-section_item">
                    <RiCss3Fill/>
                    <Text h2>CSS3</Text>
                </div>
                <div className="const-skills-section_item">
                    <MdOutlineJavascript/>
                    <Text h2>JavaScript</Text>
                </div>
                <div className="const-skills-section_item">
                    <RiReactjsFill/>
                    <Text h2>ReactJS</Text>
                </div>
                <div className="const-skills-section_item">
                    <TbBrandNextjs/>
                    <Text h2>NextJS</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiVite/>
                    <Text h2>ViteJS</Text>
                </div>
                <div className="const-skills-section_item custom-prototype-skills">
                    <br />
                    <TypeScriptIcon/>
                    <Text h2>TypeScript</Text>
                </div>
                <div className="const-skills-section_item">
                    <DiSass/>
                    <Text h2>SASS</Text>
                </div>
                <div className="const-skills-section_item">
                    <RiGitBranchLine/>
                    <Text h2>Git</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiTailwindcss/>
                    <Text h2>TailwindCSS</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiPostcss/>
                    <Text h2>PostCSS</Text>
                </div>
                <div className="const-skills-section_item">
                    <DiJqueryLogo/>
                    <Text h2>jQuery</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiBootstrap/>
                    <Text h2>Bootstrap</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiRedux/>
                    <Text h2>Redux</Text>
                </div>
                <div className="const-skills-section_item">
                    <RiGatsbyFill/>
                    <Text h2>Gatsby</Text>
                </div>
                <div className="const-skills-section_item">
                    <DiNpm/>
                    <Text h2>NPM</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiWebpack/>
                    <Text h2>Webpack</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiMui/>
                    <Text h2>MaterialUI</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiReactrouter/>
                    <Text h2>Router</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiStorybook/>
                    <Text h2>StoryBook</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiSemanticuireact/>
                    <Text h2>SemanticUI</Text>
                </div>
                <div className="const-skills-section_item">
                    <TbBrandFramerMotion/>
                    <Text h2>Framer Motion</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiScrollreveal/>
                    <Text h2>Reveal</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiFigma/>
                    <Text h2>Figma</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiAntdesign/>
                    <Text h2>Ant Design</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiDaisyui/>
                    <Text h2>DaisyUI</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiChakraui/>
                    <Text h2>ChakraUI</Text>
                </div>
                <div className="const-skills-section_item">
                    <SiJest/>
                    <Text h2>Jest</Text>
                </div>
            </div>
        </div>
        <div className="extended-router-projects">
        <Text h1 className="first-section-item-content">Projects</Text>
        <div className="projects-extended-container">
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <DevolveIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">devolve.netlify.app</Text>
                <Text p className="extended-project-sub_content">We bring you closer to becoming a programmer through our special learning methodology. This method saves you time.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ViteJS, SASS, jQuery, Git, NPM, Jest, Router, Webpack</Text>
                </div>
                <Link href="https://devolve.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <NastupIcon className='custom-navigation-component-svg'/>
                </div>
                <Text h3 className="extended-project-domain-router_item">nastup.netlify.app</Text>
                <Text p className="extended-project-sub_content">It is now very easy to take your idea online. Growing your project will be fully supported by our professional team </Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, jQuery, Framer Motion, NPM, Reveal, Router</Text>
                </div>
                <Link href="https://nastup.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <StokenIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">stoken.netlify.app</Text>
                <Text p className="extended-project-sub_content">Explore New Crypto World. Discover the next generation in sending cryptocurrencies. Use the New Blockchain Technology.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, Blockchain, Context API, TailwindCSS</Text>
                </div>
                <Link href="https://stoken.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <VathAppIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">vathapp.netlify.app</Text>
                <Text p className="extended-project-sub_content">Do you need last day delivery? We are here to rescue you. If using our shipping service, your goods will arrive in less than a day.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, TypeScript, SASS, Framer Motion, Reveal.</Text>
                </div>
                <Link href="https://vathapp.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <JamesRobert/>
                </div>
                <Text h3 className="extended-project-domain-router_item">jamesrobert.netlify.app</Text>
                <Text p className="extended-project-sub_content">James Robert is Junior Backend Developer. He needed portfolio. This project is to show his skills.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ViteJS, SASS, Framer Motion, PostCSS, Reveal</Text>
                </div>
                <Link href="https://jamesrobert.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <ExoWearIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">exowear.netlify.app</Text>
                <Text p className="extended-project-sub_content">We attract young people from all over the world with our fashionable and quality clothes. Free Worldwide Shipping :)</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, Router, jQuery, Context, SPA</Text>
                </div>
                <Link href="https://exowear.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <CdnverseIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">cdnverse.netlify.app</Text>
                <Text p className="extended-project-sub_content">Access over 100 of the most popular libraries and APIs with a single tap.
                <br /><br /></Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, Context API, NPM, Chakra UI, Router</Text>
                </div>
                <Link href="https://cdnverse.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <ZastCarsIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">zastcars.netlify.app</Text>
                <Text p className="extended-project-sub_content">The Europe's Top Popular Cars Marketplace.
You are the only place to have luxury, used, beautiful and budget-friendly cars.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, Router, Reveal, Redux</Text>
                </div>
                <Link href="https://zastcars.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
            <div className="extended-project_item">
                <div className="element-svg-i-project">
                <LandsenseIcon/>
                </div>
                <Text h3 className="extended-project-domain-router_item">landsense.netlify.app</Text>
                <Text p className="extended-project-sub_content">See rare sights and monuments in the world with one touch and get information about them.</Text>
                <div className="extended-project_item-stack">
                    <Text h4>ReactJS, SASS, Core UI, Material UI, Animation</Text>
                </div>
                <Link href="https://landsense.netlify.app/" target={"_blank"} className='project-visit-router-inline-element'>Visit Project</Link>
            </div>
        </div>
        </div>
        <div className="extended-bottom-element_contact">
        <Text h1 className="last-section-item-content">Contact</Text>
        <Text p className="extended-content-last">I'am always open to new chances and projects. And I support all projects. My inbox is always active and you can tell me your suggestion. Tell Something <span>:)</span></Text>
        <br />
        <a href="" className="last-gmail-router-component">Say Something</a>
        <br /><br />
        <Text p className="footer-info-component">Designed & Developed by <span>Ramazan Azimli</span></Text>
        <Text p className="copyright-info-component">Copyright 2023 ©</Text>
        </div>
        </>
    )
}