import "../../pages/Dashboard/sections/StudyMaterial.css";
const demoData = [
{
id:1,
title:"Algebra Notes",
class:"Class 10",
subject:"Mathematics",
type:"PDF",
upload:"2 hours ago",
},

{
id:2,
title:"Motion Chapter",
class:"Class 9",
subject:"Science",
type:"DOC",
upload:"1 day ago",
},

{
id:3,
title:"Grammar Practice",
class:"Class 8",
subject:"English",
type:"PDF",
upload:"4 days ago",
},

{
id:4,
title:"Chemical Bonding",
class:"Class 11",
subject:"Chemistry",
type:"PPT",
upload:"1 week ago",
},
];

const MaterialTable = ({
data=[],
search=""
})=>{

const rows=
data.length
?
data
:
demoData;

const filtered=
rows.filter(
(item)=>

item.title
.toLowerCase()

.includes(

(search || "")
.toLowerCase()

)

);

return(

<div className="material-table">

<h2>

Uploaded Materials

</h2>

<table>

<thead>

<tr>

<th>Title</th>

<th>Class</th>

<th>Subject</th>

<th>Type</th>

<th>Upload</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

filtered.map(
(item)=>(

<tr
key={item.id}
>

<td>
{item.title}
</td>

<td>
{item.class}
</td>

<td>
{item.subject}
</td>

<td>

<span
className="type"
>

{item.type}

</span>

</td>

<td>
{item.upload}
</td>

<td>

<button
onClick={()=>
alert(
"Viewing"
)
}
>

View

</button>

<button
onClick={()=>
alert(
"Downloading"
)
}
>

Download

</button>

<button
onClick={()=>
alert(
"Deleted"
)
}
>

Delete

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

);

};

export default MaterialTable;