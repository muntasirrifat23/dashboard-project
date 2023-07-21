import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const CompoChart = () => {
    const data = [
        { name: '20', Employer: 10, Employee: 13, Interest: 20 },
        { name: '25', Employer: 21, Employee: 23, Interest: 30 },
        { name: '30', Employer: 25, Employee: 30, Interest: 45 },
        { name: '35', Employer: 35, Employee: 45, Interest: 55 },
        { name: '40', Employer: 45, Employee: 50, Interest: 70 },
        { name: '45', Employer: 60, Employee: 60, Interest: 85 },
        { name: '50', Employer: 65, Employee: 65, Interest: 100 },
        { name: '55', Employer: 70, Employee: 70, Interest: 110 },
        { name: '60', Employer: 75, Employee: 75, Interest:120 },
        { name: '65', Employer: 80, Employee: 80, Interest: 130 },
    ];
    const yAxisTickValues = [0, 100, 200, 300];
    const formatYAxis = (tick) => `$${tick}`;
    
    return (
        <div className='lg:w-full'>
              <BarChart width={500} height={400} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxis} domain={[0, 'dataMax']} ticks={yAxisTickValues} />
            <Tooltip></Tooltip>
            {/* <Legend></Legend> */}
            <Bar dataKey="Employer" stackId="a" fill="#161b70" />
            <Bar dataKey="Employee" stackId="a" fill="#363db5" />
            <Bar dataKey="Interest" stackId="a" fill="#7d82d1" />
        </BarChart>
        </div>
    );
};

export default CompoChart;