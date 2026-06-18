import "./Announc.css";

import { useState } from "react";

import {
  FaBullhorn,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaEllipsisV,
} from "react-icons/fa";

const Announcements = () => {
  const [search, setSearch] =
    useState("");

  const [activeTab, setActiveTab] =
    useState("all");

  const [announcements,
    setAnnouncements] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "announcements"
        )
      ) || [
        {
          id: 1,
          title:
            "Final Exam Schedule",

          desc:
            "Final exams will begin from next Monday. Please check the schedule and prepare accordingly.",

          class:
            "Class 10A",

          status:
            "Active",

          views:
            128,

          date:
            "20 May 2024",

          color:
            "#7b55ff",
        },

        {
          id: 2,

          title:
            "Holiday Notice",

          desc:
            "School will remain closed on 25th May.",

          class:
            "Class 9A",

          status:
            "Active",

          views:
            96,

          date:
            "19 May 2024",

          color:
            "#ffb21c",
        },

        {
          id: 3,

          title:
            "Science Project Submission",

          desc:
            "Submit projects before deadline.",

          class:
            "Class 8A",

          status:
            "Active",

          views:
            78,

          date:
            "18 May 2024",

          color:
            "#34c759",
        },

        {
          id: 4,

          title:
            "Parent Teacher Meeting",

          desc:
            "PTM scheduled on 28th May.",

          class:
            "Class 10B",

          status:
            "Scheduled",

          views:
            0,

          date:
            "22 May 2024",

          color:
            "#7b55ff",
        },

        {
          id: 5,

          title:
            "Sports Day",

          desc:
            "Annual sports day announced.",

          class:
            "All Classes",

          status:
            "Draft",

          views:
            0,

          date:
            "-",

          color:
            "#ff4f7c",
        },
      ]
    );

  const remove = (id) => {
    const updated =
      announcements.filter(
        (a) =>
          a.id !== id
      );

    setAnnouncements(
      updated
    );

    localStorage.setItem(
      "announcements",

      JSON.stringify(
        updated
      )
    );
  };

  const filtered =
announcements
.filter((a)=>{

if(
activeTab !== "all"
&&
a.status
.toLowerCase()
!== activeTab
){
return false;
}

return a.title
.toLowerCase()
.includes(
search
.toLowerCase()
);

});

  return (
    <div className="announcement-page">

      {/* TOP */}

      <div className="top-row">

        <div>

          <h1>
            Announcement
          </h1>

          <p>
            Create, manage and view all announcements
          </p>

        </div>

        <div className="top-actions">

          <div className="search">

            <FaSearch />

            <input
              placeholder="Search announcements..."
              value={search}
              onChange={(e)=>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

          <button className="new-btn">

            <FaPlus />

            Create Announcement

          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="stats">

        <div className="stat">

          <FaBullhorn />

          <div>

            <h2>
              {
                announcements.length
              }
            </h2>

            <span>
              Total
            </span>

          </div>

        </div>

        <div className="stat">

          <FaEye />

          <div>

            <h2>
              248
            </h2>

            <span>
              Views
            </span>

          </div>

        </div>

        <div className="stat">

          <FaBullhorn />

          <div>

            <h2>
              5
            </h2>

            <span>
              Classes
            </span>

          </div>

        </div>

        <div className="stat">

          <FaBullhorn />

          <div>

            <h2>
              3
            </h2>

            <span>
              Today
            </span>

          </div>

        </div>

      </div>

      {/* TABS */}

      <div className="tabs">

        {[
          "all",
          "active",
          "scheduled",
          "drafts",
        ].map(
          (tab)=>(
            <button
              key={tab}
              className={
                activeTab ===
                tab
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab(
                  tab
                )
              }
            >
              {tab}
            </button>
          )
        )}

      </div>

      {/* LIST */}

      <div className="list">

        {filtered.map(
          (item)=>(
            <div
              className="announcement-card"
              key={
                item.id
              }
            >

              <div
                className="icon"
                style={{
                  background:
                    item.color,
                }}
              >
                <FaBullhorn />
              </div>

              <div className="content">

                <h3>
                  {
                    item.title
                  }
                </h3>

                <p>
                  {
                    item.desc
                  }
                </p>

              </div>

              <div className="class">

                {
                  item.class
                }

              </div>

              <div className="status">

                {
                  item.status
                }

              </div>

              <div className="views">

                👁
                {
                  item.views
                }

              </div>

              <div className="actions">

                <button>
                  <FaEdit/>
                </button>

                <button
                  onClick={() =>
                    remove(
                      item.id
                    )
                  }
                >
                  <FaTrash/>
                </button>

                <button>
                  <FaEllipsisV/>
                </button>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default Announcements;