import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { useSpring, animated } from 'react-spring';



function ActualNumber({targetNumber, decimal}) {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: targetNumber },
        delay: 0,
        config: { mass: 3, tension: 10, friction: 10 },
    })
    console.log("Actual Number render")
    return (
        <animated.div>
            {number.to(n => n.toFixed(decimal))}
        </animated.div>
    );
}

function AnimatedNumber({ baseTargetNumber, customisedClass, prefix, suffix, decimal }) {
    const [isInViewPort, setIsInViewPort] = useState(false);
    
    console.log("AnimatedNumber render")
    return (
        <ScrollTrigger onEnter={() => setIsInViewPort(true)} onExit={() => setIsInViewPort(false)}>
            <div style={{display: "flex", flexDirection: "row"}} className={customisedClass}>
                {prefix}
                {isInViewPort ?
                    <ActualNumber targetNumber={baseTargetNumber} decimal={decimal}/>
                : <span>0</span>}
                {suffix}
            </div>
        </ScrollTrigger>
    )
}

export default AnimatedNumber;