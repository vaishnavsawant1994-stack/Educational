
import "./ReportsModal.css";

import {
FaTimes,
FaCalendarAlt,
FaFileExport,
FaClipboardCheck,
FaChartLine,
FaTasks,
FaDownload,
FaUsers,
FaUserCheck,
FaUserTimes,
FaClock,
FaPercentage,
FaArrowRight,
} from "react-icons/fa";

export default function ReportsModal({
open,
onClose,
}){

if(!open) return null;

const stats=[

{
icon:<FaUserCheck/>,
value:"46",
label:"Present",
percent:"85.19%",
className:"green",
},

{
icon:<FaUserTimes/>,
value:"6",
label:"Absent",
percent:"11.11%",
className:"red",
},

{
icon:<FaClock/>,
value:"2",
label:"Late",
percent:"3.70%",
className:"orange",
},

{
icon:<FaPercentage/>,
value:"85.19%",
label:"Attendance",
percent:"Overall",
className:"purple",
},

];

const months=["Jan","Feb","Mar","Apr","May","Jun"];

const summary=[

["June 2026","85.19%","78.4%","↗"],
["May 2026","82.41%","75.2%","↗"],
["April 2026","79.63%","72.1%","↗"],
["March 2026","76.45%","70.3%","↗"],
["February 2026","74.07%","68.8%","↓"],

];

return(

<div className="reports-overlay">

<div className="reports-modal">

<button
className="reports-close"
onClick={onClose}
>
<FaTimes/>
</button>

<div className="reports-header">

<div className="reports-title">

<div className="reports-icon">

<FaChartLine/>

</div>

<div>

<h1>Reports</h1>

<p>
Analytics and performance overview.
</p>

</div>

</div>

<div className="reports-header-actions">

<button>

<FaCalendarAlt/>

June 2026

</button>

<button>

<FaFileExport/>

Export PDF

</button>

</div>

</div>

<div className="reports-body">

<div className="reports-sidebar">

<button className="active">
<FaClipboardCheck/>
Attendance
</button>

<button>
<FaChartLine/>
Performance
</button>

<button>
<FaTasks/>
Assignments
</button>

<button>
<FaDownload/>
Export
</button>

<div className="class-overview">

<div className="overview-icon">

<FaUsers/>

</div>

<h3>
Class Overview
</h3>

<p>
Class 10 - A
</p>

<div>

<span>Total Students</span>

<h2>54</h2>

</div>

</div>

</div>

<div className="reports-content">

<div className="stats-grid">

{

stats.map((s,i)=>(

<div
key={i}
className={`stat-card ${s.className}`}
>

<div className="stat-icon">

{s.icon}

</div>

<div className="stat-value">

{s.value}

</div>

<div className="stat-label">

{s.label}

</div>

<div className="stat-percent">

{s.percent}

</div>

<svg
className="mini-chart"
viewBox="0 0 100 30"
>

<path
d="M0 20 Q20 10 40 18 T80 12 T100 15"
/>

</svg>

</div>

))

}

</div>

<div className="chart-grid">

<div className="chart-card">

<div className="card-top">

<h3>
Attendance Overview
</h3>

<select>

<option>
Monthly
</option>

</select>

</div>

<div className="bar-chart">

{

months.map((m)=>(

<div
key={m}
className="bar-item"
>

<div className="bars">

<div className="bar green"/>

<div className="bar red"/>

<div className="bar orange"/>

</div>

<span>

{m}

</span>

</div>

))

}

</div>

</div>

<div className="chart-card">

<div className="card-top">

<h3>
Attendance % Trend
</h3>

<select>

<option>
6 Months
</option>

</select>

</div>

<svg
className="trend-chart"
viewBox="0 0 500 250"
>

<polyline
points="
40,180
120,120
200,130
280,70
360,140
450,90
"
/>

</svg>

</div>

</div>

<div className="bottom-grid">

<div className="bottom-card">

<h3>

Subject Performance

</h3>

<div className="donut"/>

<button>

View Detailed Report

<FaArrowRight/>

</button>

</div>

<div className="bottom-card">

<h3>

Student Activity

</h3>

<div className="activity"/>

<button>

View Activity Report

<FaArrowRight/>

</button>

</div>

<div className="bottom-card">

<h3>

Monthly Summary

</h3>

<div className="summary-table">

{

summary.map((r)=>(

<div
className="summary-row"
key={r[0]}
>

<span>{r[0]}</span>

<span>{r[1]}</span>

<span>{r[2]}</span>

<span>{r[3]}</span>

</div>

))

}

</div>

<button>

View Full Summary

<FaArrowRight/>

</button>

</div>

</div>

</div>

</div>

</div>

</div>

);

}

