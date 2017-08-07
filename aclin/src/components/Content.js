import React, { Component } from "react";
import "../css/icons.css";
import GlimpzItImg from "../images/glimpzit.png";
import EnrichLALogo from "../images/enrichLA_logo.png";
import Thyme1 from "../images/thyme_app_screen1.png";
import Thyme2 from "../images/thyme_app_screen2.png";
import Demo from "./Demo";

export default class Content extends Component {
    render = () => {
        return (
            <div className="content">
                <section>
                    <h1>Hello. I hope you're having a great day.</h1>
                </section>
                <section id="skills">
                    <h3>What I Do</h3>
                    <p>
                        I am a full-stack software engineer with a keen interest on the modern web front-end.
                        I'm comfortable moving up and down the stack.
                    </p>
                    <p>
                        At the top of the stack, I have built theme CSS3 style sheets from scratch,
                        static and dynamic webpages (SPA's). Further down, I support these front-end components with REST-ful
                        API's backed by a Mongo or MySQL database.
                    </p>
                    <p>
                        I have worked with Java Spring Framework, LAMP and MERN stacks. I am especially interested in building
                        SPA's with modern Javascript tools like React, Redux and Node.js.
                    </p>
                    <div id="skills-list">
                        <div className="skill-group">
                            <div className="group-title">Web:</div>
                            <ul className="do-list">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JSP</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <div className="group-title">Frameworks/Tools:</div>
                            <ul className="do-list">
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>Sass</li>
                                <li>Backbone.js</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Spring Framework</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <div className="group-title">Languages:</div>
                            <ul className="do-list">
                                <li>JavaScript (ES5/6)</li>
                                <li>Java</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="skill-group">
                            <div className="group-title">Database:</div>
                            <ul className="do-list">
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="back-top"><a href="#home">Back to top</a></div>
                </section>
                <section id="experience">
                    <h3>What I Have Done Professionally</h3>
                    <article>
                        <h4>
                            <a href="https://www.glimpzit.com">GlimpzIt</a> - Software Engineer
                        </h4>
                        <p><img className="example" src={GlimpzItImg} alt="glimpzit-website-thumbnail" /></p>
                        <p>
                            Software engineer and lead front-end developer for all web presence of GlimpzIt.
                            This includes the company website, the customer portal, and the panel engagement portal.
                            Our users gather a lot of text and visual feedback through GlimpzIt, and working closely with
                            our UI/UX designer, I make sure all the data is presented nicely on the portal.
                        </p>
                        <Demo captionPosition="top" />
                        <p>
                            I designed and built GlimpzIt's filtering and tagging capabilities that lets users generate
                            custom segmentations of their data.
                        </p>
                        <p>
                            I also built and maintain the <a href="https://www.disruptivedecisionssummit.com">Disruptive Decisions Summit</a> homepage,
                            which is a conference sponsored by GlimpzIt.
                        </p>
                    </article>
                    <article>
                        <h4>
                            <a href="https://www.enrichla.org">EnrichLA</a> - Android Application Developer
                        </h4>
                        <p><img className="example" src={EnrichLALogo} alt="android_dev_enrichLA_logo" /></p>
                        <p><img className="example" src={Thyme1} alt="android_dev_app_screen1" /></p>
                        <p><img className="example" src={Thyme2} alt="android_dev_app_screen2" /></p>
                        <p>
                            Location-based Android application built for EnrichLA's staff to retrieve work site and affiliated staff contact information.
                            Uses mobile GPS and network location, and by employing the Haversine formula, lists the sites by distance closest to the user.
                        </p>
                        <p>
                            Users can use the application, Thyme, to search for their contact by name, role or group.
                            Thyme uses Zoho CRM's API to find the information users need.
                        </p>
                    </article>
                    <div className="back-top"><a href="#home">Back to top</a></div>
                </section>
                {/*<section>
                    <h3>What I Have Done Personally</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ratione sapiente doloremque veniam cupiditate nobis deserunt suscipit quasi, numquam, aliquam repudiandae sequi vero architecto alias, eum vitae cumque laudantium quibusdam.</p>
                    <p><img src="https://placehold.it/350x270" alt="" /></p>
                </section>*/}
                <section>
                    <h3>Where I Studied</h3>
                    <p><strong>University of California, Berkeley</strong> - B.A. Applied Mathematics</p>
                    <p><strong>National Taiwan University</strong> - M.Sc. Computer Science in Human-Computer Interaction (HCI)</p>
                    <div className="back-top"><a href="#home">Back to top</a></div>
                </section>
                <section id="other">
                    <h3>Links:</h3>
                    <p className="link">
                        <span className="icon-fa-file-pdf-o"></span>
                        <a href="https://drive.google.com/open?id=0BxCViSmsPQnLcGVkTDNZZk43UUU" target="_blank" rel="noopener noreferrer">View resume</a>
                    </p>
                    <p className="link">
                        <span className="icon-fa-linkedin-square"></span>
                        <a href="https://www.linkedin.com/in/allan-lin-8b744614/">LinkedIn</a>
                    </p>
                    <p className="link">
                        <span className="icon-fa-github"></span>
                        <a href="https://github.com/aclin">GitHub</a>
                    </p>
                    <div className="back-top"><a href="#home">Back to top</a></div>
                </section>
            </div>
        );
    };
}
