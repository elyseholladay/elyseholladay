import React from "react"
import styles from "./resume.module.css";

class Resume extends React.Component {
    render() {
        return (
            <div className={styles.resume}>
                <div className={styles.employment}>

                    <div className={styles.employmentjob}>
                        <div className={styles.jobmeta}>
                            <div className={styles.jobtitle}>
                                Design System Engineer,
                                <div className={styles.jobcompany}>
                                    <a href="http://indeed.com/about">Indeed</a>
                                </div>
                            </div>
                            <div className={styles.joblocation}>
                                Austin, TX
                            </div>
                            <div className={styles.jobduration}>
                                July 2017—Present
                            </div>
                        </div>

                        <div className={styles.jobdescription}>
                            <p>
                                Front end development and CSS architecture for Indeed's Design System, enabling Engineers to quickly create pages and components while following a consistent design.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, neque libero illum veritatis quisquam dignissimos molestias eius, in minus ex et ratione quod ducimus aspernatur magni fuga ullam.
                            </p>
                        </div>

                    </div>


                    <div className={styles.employmentjob}>
                        <div className={styles.jobmeta}>
                            <div className={styles.jobtitle}>
                                Senior UI Engineer,
                                <div className={styles.jobcompany}>
                                    <a href="http://retailmenot.com/corp">RetailMeNot</a>
                                </div>
                            </div>
                            <div className={styles.joblocation}>
                                Austin, TX
                            </div>
                            <div className={styles.jobduration}>
                                November 2014—July 2017
                            </div>
                        </div>

                        <div className={styles.jobdescription}>
                            <p>
                                Front end development and leadership of the Roux ecosystem, a design systems toolset that enables RMN’s UI Engineers to quickly create pages and components while following a consistent design. Led the effort to open source Roux, feature roadmap, and planning.
                                In 2016, contributed 41% of all code committed to the front end pattern library.
                            </p>
                            <p>
                                Over the past two years, created new components for the pattern library while simultaneously redesigning retailmenot.com; worked with teams on successful A/B tests of the store page, a new “stackable” offer concept, and more. Support Designers and engineers
                                from all teams to improve their HTML, CSS and Sass skills, and using the Roux ecosystem.
                            </p>
                        </div>

                    </div>
                </div>

                <div className={styles.employmentjob}>
                    <div className={styles.jobmeta}>
                        <div className={styles.jobtitle}>
                            Developer/Designer, Instructor
                            <div className={styles.jobcompany}>
                                <a href="http://makersquare.com">MakerSquare (HackReactor)</a>
                            </div>
                        </div>
                        <div className={styles.joblocation}>
                            Austin, TX
                        </div>
                        <div className={styles.jobduration}>
                            April 2014—Nov 2014
                        </div>
                    </div>
                </div>

                    <div className={styles.employmentjob}>
                    <div className={styles.jobmeta}>
                        <div className={styles.jobtitle}>
                            FrontEnd Developer
                            <div className={styles.jobcompany}>
                                <a href="http://square-root.com">Square Root, Inc.</a>
                            </div>
                        </div>
                        <div className={styles.joblocation}>
                            Austin, TX
                        </div>
                        <div className={styles.jobduration}>
                            May 2012—April 2014
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Resume
