import React from 'react';
import { PivotViewComponent, Grouping, Inject } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
 return (
    <div id="wrapper">
      <PivotViewComponent allowGrouping={true}
        dataSourceSettings={{
          dataSource: pivotData,
          formatSettings: [{name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a'}],
          rows: [{ name: 'Date' }],
          columns: [{ name: 'Product_ID', dataType: "string" }, {name: 'Products'}],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ],
          groupSettings: [{name: "Date", type: "Date", groupInterval: ['Years', 'Months'], 
                            startingAt: new Date(2015, 6, 1), endingAt: new Date(2017, 6, 31)},
                            {name: "Product_ID", type: "Custom", caption: 'Unsold Products',
                          customGroups:[{groupName:'Unsold Products', items: ['1004', '1005', '1006']},
                        ]},
                        //To apply number grouping un comment below code and comment out custom grouping 
                        // {name: "Product_ID", type: "Number", rangeInterval: 3,
                        // startingAt: 1001, endingAt: 1003}
                          ]
        }}>
          <Inject services={[Grouping]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
