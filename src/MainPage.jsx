import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import React from "react";
import { FaPhoneAlt, FaReact } from 'react-icons/fa';
import { FaFigma, FaGithub } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import myImg from './Assets/Me.JPG';
import narenjPreviwDoc from './Assets/Narenj.pdf';
import devImg from './Assets/icon-dev.svg';
import educationImg from './Assets/icon-education.svg';
import experiencesImg from './Assets/icon-experience.svg';
import skillImg from './Assets/icon-skills.svg';
import starImg from './Assets/star.svg';
import './Mainpage.css';


const MainPage = () => {

    const wid = [
        { id: 1, title: "Front end Developer", icon: <FaReact />, des: "using Latest Technologies Of front-End" },
        { id: 2, title: "Web Development", img: devImg, des: "Developing website with React, Next js ,and javascript" },
        { id: 3, title: "", icon: <FaFigma />, des: "knowledgeable about user experience and basic design principles" },
    ]

    const skills = {
        programmingLanguages: [
            { title: "React Js" },
            { title: "JavaScript" },
            { title: "Next Js" },
            { title: "TypeScript" },
            { title: "Node Js" },
        ],

        others: [
            { title: "HTML5" },
            { title: "CSS3" },
            { title: "git" },
            { title: "github" },
            { title: "Tailwind CSS" },
            { title: "Bootstrap" },
            { title: "Material UI" },
            { title: "Prime React" },
            { title: "Chakra UI" },
        ],

        stateManagement: [
            { title: "Redux" },
            { title: "Redux Toolkit" },
            { title: "React Query" },
        ],

        npmPackages: [
            { title: "axios" },
            { title: "formik" },
            { title: "React Hook Form" },
            { title: "aos" },
            { title: "framer motion" },
            { title: "ThreeJs" },
            { title: "gsap" },
            { title: "ReCharts" },
            { title: "leaflet" },
            { title: "Yup" },
            // Add the correct title for the last item
            { title: "SomeOtherPackage" },
        ],
    };

    const educations = [
        { title: 'Imam Khomeini International University', ed: "B.Sc. in Computer Engineering", fromDate: '2013 - 2017', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    ];

    const experiences = [{
        id: 1,
        company: "Narenj Restaurant LTD",
        jobTitle: "Front-End Developer",
        role: "FreeLancer",
        link: narenjPreviwDoc,
        preview: true,
        tasks: [{
            _id: 10,
            content: "Build admin panel for better order handling, managing customers, table reservation handling, monthly income, and managing foods and menus at the moment"
        }, {
            _id: 12,
            content: "Using UX guidelines, the site's home page is being redesigned for improved usability and user experience."
        }, {
            _id: 13,
            content: "Creating a database with a back-end programmer to manage users faster, including applying discounts in special events or for a group of special customers."
        }],
        technologies: [{
            title: "React Js"
        }, {
            title: "Node Js"
        }, {
            title: "React Query"
        }, {
            title: "Redux"
        }, {
            title: "Redux-Persist"
        }, {
            title: "Tailwind"
        }, {
            title: "Formik"
        }, {
            title: "Framer-Motion"
        }],
        notes: "We are awaiting the final payment before launching the website for the customer.However, you can see a project preview.  "

    },
    {
        id: 2,
        company: "Saman Electronic Payment",
        jobTitle: "Front-End Developer",
        role: "Employee",
        link: "https://www.sep.ir/",
        notes: "The projects for SEP Company cannot be accessed or published due to legal difficulties. However, references are accessible upon request.",
        tasks: [{
            content: "Transformed outdated code in company projects by integrating new libraries and implementing cutting-edge React trends such as Next js"
        }, {
            content: "Developing reporting pages that provide access level limits for each company employee in various positions makes using the site easier and improves user experience."
        }, {
            content: "Six user administration and reporting portals were created and put into operation with the assistance of front-end programmers in order to optimize and view each recipient's bank activities."
        },
        {
            content: "Helping to create and re-building sms panel with React js."
        }

        ],
        technologies: [{
            title: "Next Js"
        }, { title: "React JS" }, {
            title: "Bootstrap"
        }],

    },
    {
        id: 3,
        company: "Novin-arzesh",
        jobTitle: "Junior Front-End Developer",
        role: "Employee",
        link: "https://plusmaad.com/",
        tasks: [{
            content: "creating plusmaad.com (single page application) for the introduction of the plusmaad mobile application"
        }, {
            content: "develop some admin panel features, such patient care and health improvement, with the assistance of other developers."
        }],
        technologies: [{
            title: "React Js"
        }, {
            title: "Node Js"
        }, {
            title: "Next Js"
        }, {
            title: "Swiper"
        }, {
            title: "Chakra UI"
        }, {
            title: "Tailwind CSS"
        }, {
            title: "Emotion"
        }]

    }
    ]


    const educationContent = (item) => {
        return (
            <Card className="text-white">
                <h1 className="text-2xl">{item.title}</h1>
                <h6 className="text-lg">{item.ed}</h6>
                <h6 className="text-sm">{item.fromDate}</h6>
            </Card>
        )
    }

    const customizedContent = (item) => {
        const projects = item.tasks

        return (
            <Card className="relative  pb-2 mb-20">
                <a href={item.link} download={item.link} className="bg-[#0d86ff] absolute top-0 rounded px-2 py-1 text-white right-4">Preview</a>
                <h1>{item.company}</h1>
                <h2>{item.jobTitle} - {item.role}</h2>
                <ul>
                    {projects && projects.map(task => (
                        <li key={task._id}>
                            <img src={starImg} alt='star' />
                            <p className="text-left "> {task.content}</p>
                        </li>
                    ))}
                </ul>
                <div className="my-2 flex flex-wrap gap-x-1 gap-y-2">

                    {item.technologies && item.technologies.map(x => (
                        <p key={x.title} className="bg-gray-300 inline-block px-1 rounded text-gray-700">#{x.title}</p>
                    ))}
                </div>
                {item.notes && <p className="text-white text-sm flex items-start"><span className="text-rose-600 text-xl mr-2">*</span>{item.notes}</p>}
            </Card>
        );
    };



    return (
        <div className="mainC flex-col lg:flex-row w-screen min-h-max z-20 flex items-start justify-center px-10 py-10 lg:px-48 lg:py-32 gap-2 ">
            <div className="mt-10 lg:my-0  bg-[#302c40] w-full lg:w-1/3 h-2/3 rounded-md">
                <div className=" w-full relative h-20 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full -top-20 absolute border-2 border-[#0d86ff] flex justify-center items-center overflow-hidden bg-red-500">
                        <img className=" w-full flex items-center justify-center  aspect-auto" src={myImg} alt="" />

                    </div>
                </div>
                <section>
                    <div className="w-full flex flex-col font-semibold p-4 items-center justify-center text-2xl text-white">
                        <h1>Seyed Mohammad</h1>
                        <h1>Mirhoseini</h1>
                        <p className="text-xl font-normal my-1 px-2 py-1 rounded bg-[#2c283a]">Front-End Developer</p>
                    </div>
                    <section className="lg:grid lg:grid-cols-1 lg:gap-1 lg:py-2 flex flex-col">
                        <div className="infoSection">
                            <i>{<MdLocationOn />}</i>
                            <p>Richmond, London</p>
                        </div>
                        <div className="infoSection">
                            <i>{<FaPhoneAlt />}</i>
                            <p>+44 7754 246276</p>
                        </div>
                        <div className="infoSection">
                            <i>{<MdEmail />}</i>
                            <a href="mailto:s.mirhoseini96@gmail.com">s.mirhoseini96@gmail.com</a>
                        </div>
                        <div className="infoSection">
                            <i>{<FaGithub />}</i>
                            <a href="https://github.com/realmowhamad">Realmowhamad</a>
                        </div>
                    </section>
                    <div className="w-full flex items-center justify-center">
                        <button className="mx-auto px-5 py-1 bg-[#0d86ff] my-2 rounded text-white" >Download Updated CV</button>
                    </div>
                </section>
            </div>



            {/* BOX2 */}
            <div className="bg-[#302c40] w-full lg:w-2/3 min-h-max rounded-md "  >
                {/* box */}
                <div className="headline flex flex-col items-start p-4 justify-start text-white">
                    <h1 className="sectionHeader">About Me</h1>
                    <p className="text-ellipsis w-full">I discovered my passion for programming as a teenager and since then gravitated toward front-end development due to my passion and attention to detail. Along the way, I completed various projects to further strengthen my grasp of programming concepts. I am always eager for new challenges and am highly motivated to continue learning and expanding my skill set. Collaboration and teamwork are my priorities. I don’t limit my relations to my career. I enjoy building constructive relationships with my colleagues and exchanging my knowledge and experience.</p>
                </div>

                {/* box */}
                <div className="flex flex-col items-start p-4 justify-start text-white ">
                    <h1 className="text-white font-semibold text-3xl mb-2">What i'm doing</h1>
                    <div className="flex flex-col   md:grid md:grid-cols-2 w-full gap-4">
                        {wid.map(item => (
                            <section key={item.id} className="bg-[#2c283a] rounded flex items-center justify-around gap-2 px-2 py-5">
                                <div className="w-1/3 flex items-center justify-center">
                                    {item.img ? <img className="w-4/6" src={item.img} alt="" /> : <i className="text-7xl text-[#0d86ff]">{item.icon}</i>}
                                </div>
                                <div className="w-2/3">
                                    <h1>{item.title}</h1>
                                    <p>{item.des}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="p-4 flex flex-col items-start justify-start">
                    <h1 className="sectionHeader">Resume</h1>
                    <div className="headline">
                        <img src={educationImg} alt="" />
                        <h1>Education</h1>
                    </div>
                    <div className="w-full flex items-start justify-start">

                        <Timeline
                            value={educations}
                            content={educationContent}

                            pt={{
                                marker: { className: 'border-2 rounded-full border-[#0d86ff]  w-4 h-4' },
                                connector: { className: 'bg-[#e5e7eb]  w-[2px]' },
                                opposite: { className: "hidden" }
                            }}
                        />
                    </div>

                    {/* Experience */}
                    <div className="flex items-center justify-center mt-10 headline">
                        <img src={experiencesImg} alt="" />
                        <h1>Experience</h1>
                    </div>
                    <div className="w-full flex items-start justify-start experiences">

                        <Timeline
                            value={experiences}
                            content={customizedContent}
                            className="my-5"
                            pt={{
                                marker: { className: 'border-2 rounded-full border-[#0d86ff]  w-4 h-4' },
                                connector: { className: 'bg-[#e5e7eb]  w-[2px]' },
                                opposite: { className: "hidden" },

                            }}
                        />
                    </div>
                    <div className="headline">
                        <img className="w-10" src={skillImg} alt="" />
                        <h1>Skills</h1>
                    </div>
                    <section className="skillSection flex flex-col lg:grid lg:grid-cols-2 gap-2">
                        <div className="bg-[#2c283a] rounded flex flex-col items-start justify-around p-2">
                            <h1>
                                Programming Languages
                            </h1>

                            <div className="flex gap-1 my-2 flex-wrap">
                                {skills.programmingLanguages.map(item => (

                                    <p key={item.title} className="bg-gray-300 inline-block px-1 rounded text-gray-700">#{item.title}</p>

                                ))}
                            </div>
                        </div>
                        <div className="bg-[#2c283a] rounded flex flex-col items-start justify-around p-2">
                            <h1>
                                Libraries
                            </h1>

                            <div className="flex gap-1 my-2 flex-wrap">
                                {skills.others.map(item => (

                                    <p key={item.title} className="bg-gray-300 inline-block px-1 rounded text-gray-700">#{item.title}</p>

                                ))}
                            </div>
                        </div>
                        <div className="bg-[#2c283a] rounded flex flex-col items-start justify-around p-2">
                            <h1>
                                State Management
                            </h1>

                            <div className="flex gap-1 my-2 flex-wrap">
                                {skills.stateManagement.map(item => (

                                    <p key={item.title} className="bg-gray-300 inline-block px-1 rounded text-gray-700">#{item.title}</p>

                                ))}
                            </div>
                        </div>
                        <div className="bg-[#2c283a] rounded flex flex-col items-start justify-around p-2">
                            <h1>
                                Packages
                            </h1>

                            <div className="flex gap-1 my-2 flex-wrap">
                                {skills.npmPackages.map(item => (

                                    <p key={item.title} className="bg-gray-300 inline-block px-1 rounded text-gray-700">#{item.title}</p>

                                ))}
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    )
};

export default MainPage;
