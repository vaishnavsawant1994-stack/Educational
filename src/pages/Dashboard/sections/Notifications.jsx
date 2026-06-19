import "./Notifications.css";

import NotificationStats from "./NotificationSections/NotificationStats";
import NotificationPanel from "./NotificationSections/NotificationPanel";
import RequestPanel from "./NotificationSections/RequestPanel";

export default function Notifications() {

return(

<div className="notification-page">

<div className="page-header">

<div>

<div className="title-row">

<div className="header-icon">
🔔
</div>

<div>

<h1>
Notifications & Requests
</h1>

<p>
Stay updated with important alerts and manage student requests
</p>

</div>

</div>

</div>

<div className="breadcrumb">

Dashboard

/

Notifications & Requests

</div>

</div>


<NotificationStats />


<div className="content-grid">

<NotificationPanel />

<RequestPanel />

</div>


<div className="note-box">

ℹ️ You can mark notifications as read,
delete them,
and manage requests using action buttons.

</div>

</div>

);

}