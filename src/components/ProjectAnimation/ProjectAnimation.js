import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

const ProjectAnimation = () => {


    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })


    return (
        <div class="projectAnimation">
            <div onClick={() => toggle(!state)}>
                <animated.div
                    style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                        .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                    }}>
                    <h2 style={{textAlign:"center", marginTop:"50px", fontSize:"50px", fontWeight:"700", color:"goldenrod",marginBottom:"70px"}}>THIS ARE MY PROJECTS</h2>
                </animated.div>
            </div>
        </div>
    );
};

export default ProjectAnimation;