import React, { useEffect } from 'react';
import AnimatedNumber from '../components/AnimatedNumber';
import './AnimatedNumberDemo.css';

function AnimatedNumberDemo(props) {
    const [targetNumber, setTargetNumber] = React.useState(0);

    useEffect(() => {
        //In a real case you would probably do an API call here
        setTargetNumber(630);
    }, [])

    console.log("AnimatedNumberDemo render")
    return (
        <div>
            <h1>Scroll down</h1>
            <button onClick={() => setTargetNumber(targetNumber + 5000)}>Increase</button>
            <div style={{height: "100vh"}}></div>
            <div className="number-container">
                <AnimatedNumber
                    baseTargetNumber={targetNumber}
                    customisedClass="my-animated-number"
                    suffix="M"
                    decimal={1}/>
            </div>
            <div style={{height: "130vh"}}></div>
        </div>
    );
}

export default AnimatedNumberDemo;