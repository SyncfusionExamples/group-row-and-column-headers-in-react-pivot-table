# Group Row and Column Headers in React Pivot Table

This sample demonstrates how to **group row and column field items in a React Pivot Table** using [Syncfusion's PivotView component](https://ej2.syncfusion.com/react/documentation/pivotview/grouping/). It covers grouping based on **date, time, number, and string types**, making it easier to analyze and summarize data.

## 📖 Overview

The **Syncfusion React Pivot Table (PivotView)** is a powerful component for visualizing and analyzing large datasets. In this example:

- **Data Source:** A sample dataset with fields like `Date`, `Product_ID`, `Products`, `Sold`, and `Amount`.
- **Rows:** `Date` (grouped by **Years** and **Months**).
- **Columns:** `Product_ID` and `Products`.
- **Values:** 
  - `Sold` (Units Sold)
  - `Amount` (Sold Amount)
- **Grouping Features:**
  - **Date Grouping:** Group by years and months with a custom range.
  - **Custom Grouping:** Combine specific product IDs under a custom group name.
  - **Number Grouping:** (Optional) Group numeric fields by range intervals.

## ✅ Key Features

- **Date Grouping:**  
  Group dates by intervals such as Years, Months, Quarters, etc.
  ```tsx
  groupSettings: [{
    name: "Date",
    type: "Date",
    groupInterval: ['Years', 'Months'],
    startingAt: new Date(2015, 6, 1),
    endingAt: new Date(2017, 6, 31)
  }]
  ```

- **Custom Grouping:**  
  Create custom groups for string fields.
  ```tsx
  { name: "Product_ID", type: "Custom", caption: 'Unsold Products',
    customGroups: [{ groupName: 'Unsold Products', items: ['1004', '1005', '1006'] }]
  }
  ```

- **Number Grouping:**  
  Group numeric fields by range intervals (uncomment in code).
  ```tsx
  { name: "Product_ID", type: "Number", rangeInterval: 3,
    startingAt: 1001, endingAt: 1003 }
  ```

## 🛠 Prerequisites

Before running this project, ensure you have:

- [Node.js](https://nodejs.org/) (latest version recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SyncfusionExamples/group-row-and-column-headers-in-react-pivot-table
   ```

2. **Navigate to the project folder:**
   ```bash
   cd group-row-and-column-headers-in-react-pivot-table
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open your browser at `http://localhost:3000` to view the Pivot Table.

## 📂 Project Structure

```
group-row-and-column-headers-in-react-pivot-table/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx      # Main component with Pivot Table configuration
│   ├── data.js      # Sample data used in the Pivot Table
│   └── ...
├── package.json
├── README.md
└── tsconfig.json
```

## 📚 Learn More

- [Syncfusion React Pivot Table Documentation](https://ej2.syncfusion.com/react/documentation/pivotview/grouping)
- [Live Demos](https://ej2.syncfusion.com/react/demos/#/bootstrap5/pivot-table/grouping)

## 💬 Support

For questions or feedback, visit:

- [Syncfusion Support Portal](https://support.syncfusion.com)
- [Syncfusion Community Forums](https://www.syncfusion.com/forums)

## 📜 License

This project uses Syncfusion components, which require a valid license for production use.  
[View Syncfusion License Terms](https://www.syncfusion.com/license/studio/22.2.5/syncfusion_essential_studio_eula.pdf)
