import React from "react"
import styles from "./bio.module.css";


class Bio extends React.Component {
    render() {
        return (

            <div className={styles.bio}>
                <p>Elyse works as a Design System Engineer at Indeed. There, she works with a small team creating components and a front-end culture code. She writes a lot of CSS for scale, puts emoji in her bash prompt, and encourages writing friendly documentation.</p>
                
                <p>To balance the computer hours, Elyse spends her mornings doing squats and deadlifts, and her evenings cooking elaborate weeknight meals and reading. She lives in sunny (and sweaty) downtown Austin, TX with her husband.</p>

                <p>She has spent her ten-year career writing and refactoring CSS/Sass, with a focus on Sass architecture and systems. Previously, she worked at RetailMeNot on a design system called Roux, and at Square Root and Bazaarvoice on Sass architectures for their enterprise apps.</p>

                <p>Elyse is an experienced conference speaker and teacher: she’s taught Girl Develop It classes and led MakerSquare’s part-time front end course; in 2014 she keynoted Front End Design Conf with her “I Have No Idea What I’m Doing” talk and co-led a Sass Refactoring workshop with Jina. In 2016 she was on the organizing team for SassConf, where she was responsible for speaker selection and mentoring.</p>

                <p>She has a Communication and Design B.S. from Rensselaer Polytechnic (the joke is that spelling it is the graduation exam), dabbles in design and typography, and is on the journey of learning JavaScript.</p>
            </div>
        )
    }
}

export default Bio
