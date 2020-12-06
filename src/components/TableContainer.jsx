// import React from 'react';
// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
// import { gridData } from '../data/appData';
//
// export const GridContainer = () => (
//
//     <div>
//         <Grid style={{ height: '300px' }} data={gridData}>
//             <Column field="awbno" title="AWB NUMBER" width="40px" />
//             <Column field="carrier" title="TRANSPORTER" width="160px" />
//             <Column field="from" title="SOURCE" width="80px" />
//             <Column field="to" title="DESTINATION" width="80px" />
//             <Column field="carrier" title="BRAND" width="90px" />
//             <Column field="pickup_date" title="START DATE" width="90px" />
//             <Column field="expected_delivery_date" title="ETD" width="90px" />
//             <Column field="status_detail" title="STATUS" width="90px" />
//
//             <Column field="Discontinued" width="130px"
//                     cell={(props) => (
//                         <td>
//                             <input className="k-checkbox" type="checkbox" disabled defaultChecked={props.dataItem[props.field]} />
//                             <label className="k-checkbox-label"></label>
//                         </td>
//                     )} />
//         </Grid>
//     </div>
// );
import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from './appData';

function TableContainer() {
    return (
        <div className="ordersgrid">
            <Grid style={{height: '300px'}} data={gridData}>
                <Column field="awbno" title="AWB NUMBER" width="80px" />
                <Column field="carrier" title="TRANSPORTER" width="160px"/>
                <Column field="from" title="SOURCE" width="80px"/>
                <Column field="to" title="DESTINATION" width="80px"/>
                <Column field="carrier" title="BRAND" width="90px"/>
                <Column field="pickup_date" title="START DATE" width="90px"/>
                <Column field="expected_delivery_date" title="ETD" width="90px"/>
                <Column field="current_status_code" title="STATUS" width="90px"/>

            </Grid>
        </div>
    );
}
export default TableContainer;