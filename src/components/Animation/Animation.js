import React, { useState } from 'react';
import './Animation.css';
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'



function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div className="trails-main" {...props}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    )
  }




const Animation = () => {

    const [open, set] = useState(true)

    return (
        <div class="animation">
            <h2>Hello, I'm <span style={{color:"#08fdd8"}}>Mahmudur Rahman.</span><br/> I'm a front-end web developer.</h2>
            {/* <h3>start our project</h3> */}
            <Trail open={open} onClick={() => set((state) => !state)}>
            <h4>Get ready to turn ideas into reality</h4>
            <h3>Take a look at my most resent projects</h3>
            </Trail>
        </div>
    );
};

export default Animation;