import { useState } from "react";
import "../Notifications.css";
export default function NotificationStats() {

const [filter,setFilter]=
useState("All");

return(

<div className="stats-grid">

{/* CARD 1 */}

<div className="stat-card">

<div className="stat-icon purple">

🔔

</div>

<div>

<p>
Total Notifications
</p>

<h2>
24
</h2>

<span className="purple-text">
8 Unread
</span>

</div>

</div>


{/* CARD 2 */}

<div className="stat-card">

<div className="stat-icon green">

📋

</div>

<div>

<p>
Total Requests
</p>

<h2>
16
</h2>

<span className="green-text">
5 Pending
</span>

</div>

</div>


{/* CARD 3 */}

<div className="stat-card">

<div className="stat-icon orange">

📩

</div>

<div>

<p>
Total Read
</p>

<h2>
32
</h2>

<span>
This Month
</span>

</div>

</div>


{/* CARD 4 */}

<div className="stat-card">

<div className="stat-icon blue">

🗑️

</div>

<div>

<p>
Total Deleted
</p>

<h2>
7
</h2>

<span>
This Month
</span>

</div>

</div>


{/* FILTER */}

<div className="filter-card">

<div className="filter-head">

⚲

<span>
Filter
</span>

</div>

<select

value={filter}

onChange={(e)=>

setFilter(
e.target.value
)

}

>

<option>
All
</option>

<option>
Unread
</option>

<option>
Read
</option>

<option>
Deleted
</option>

<option>
Requests
</option>

</select>

</div>

</div>

);

}