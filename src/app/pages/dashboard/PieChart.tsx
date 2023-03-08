import { Pie } from "@ant-design/plots";

const PieChart = () => {
    const data = [
        {
            type: 'Dry Payload',
            value: 40,
        },
        {
            type: 'Wet Payload',
            value: 60,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'Wet and Dry\nPayload',
            },
        },
    };
    return <Pie {...config}/>;
}

export default PieChart
