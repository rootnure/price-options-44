import { useEffect, useState } from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    const [studentScores, setStudentScores] = useState([]);

    useEffect(() => {
        fetch('my-data.json')
            .then(res => res.json())
            .then(data => setStudentScores(data.students))
    }, []);

    return (
        <LChart width={720} height={500} data={studentScores}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Line dataKey="mathScore" stroke="blue" />
            <Line dataKey="physicsScore" stroke="red" />
            <Line dataKey="chemistryScore" stroke="green" />
        </LChart>
    );
};

export default LineChart;