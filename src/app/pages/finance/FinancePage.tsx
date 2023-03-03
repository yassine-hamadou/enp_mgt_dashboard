import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection, ColumnSeries, AxisModel
}
    from '@syncfusion/ej2-react-charts';
import {KTCard, KTCardBody} from "../../../_metronic/helpers";
import DemoDualAxes from "./Chart";
// import { data } from 'datasource.ts';

const data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
const primaryxAxis: AxisModel = { valueType: 'Category' };
function FinancePage() {


    return (
    <>
        <KTCard>
            <KTCardBody>
                <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
                    <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'/>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </KTCardBody>
        </KTCard>
        <br/>
        
        <KTCard>
            <KTCardBody>
                <DemoDualAxes/>
            </KTCardBody>
        </KTCard>
    </>
)
}
export default FinancePage;
