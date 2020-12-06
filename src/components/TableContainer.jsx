import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import  gridData from './Tabledata';

function TableContainer() {
    return (
        <div className="ordersgrid">
            <Grid style={{height: '300px'}} data={gridData}>
                <Column field="awbno" title="AWB NUMBER" width="100px" />
                <Column field="carrier" title="TRANSPORTER" width="130px"/>
                <Column field="from" title="SOURCE" width="120px"/>
                <Column field="to" title="DESTINATION" width="120px"/>
                <Column field="carrier" title="BRAND" width="100px"/>
                <Column field="pickup_date" title="START DATE" width="150px"/>
                <Column field="extra_fields.expected_delivery_date" title="ETD" width="150px"/>
                <Column field="current_status_code" title="STATUS" width="100px"/>

            </Grid>
        </div>
    );
}
export default TableContainer;