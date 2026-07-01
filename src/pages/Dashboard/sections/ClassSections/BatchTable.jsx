import "../Classes.css";

import {
  FaPlus,
  FaChevronDown,
  FaFilter,
  FaGraduationCap,
  FaUsers
} from "react-icons/fa";
export default function BatchTable({
  selectedClass,
  showAddButton,
}) {
  const rows =
    selectedClass?.batches || [];

  return (
    <div className="batch-card">

      <div className="batch-header">

  <div className="batch-title">
    <h2>Batch Schedule</h2>
  </div>

  <div className="batch-actions">

    {/* View Dropdown */}

    <div className="dropdown">

      <button className="dropdown-btn">

        View

        <FaChevronDown />

      </button>

      <div className="dropdown-menu">

        <div className="dropdown-item">

          <FaGraduationCap />

          View All Batches

        </div>

        <div className="dropdown-item">

          <FaUsers />

          View All Students

        </div>

      </div>

    </div>


    {/* Filter Dropdown */}

    <div className="dropdown">

      <button className="dropdown-btn">

        <FaFilter />

        Filter

        <FaChevronDown />

      </button>

      <div className="dropdown-menu">

        <div className="dropdown-item">Batch A</div>

        <div className="dropdown-item">Batch B</div>

        <div className="dropdown-item">Batch C</div>

        <div className="dropdown-item">Batch D</div>

      </div>

    </div>


    {showAddButton && (

      <button className="batch-add-btn">

        <FaPlus />

        Add

      </button>

    )}

  </div>

</div>
      <div className="batch-table-wrapper">

        <table className="batch-table">

          <thead>

            <tr>

              <th>
                Batch
              </th>

              <th>
                Timing
              </th>

              <th>
                Students
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {

              rows.length > 0

                ?

                rows.map(
                  (
                    item,
                    index
                  ) => (

                    <tr
                      key={index}
                    >

                      <td>
                        {
                          item.batch
                        }
                      </td>

                      <td>
                        {
                          item.timing
                        }
                      </td>

                      <td>
                        {
                          item.students
                        }
                      </td>

                      <td>

                        <span
                          className={`status ${item.status?.toLowerCase()}`}
                        >

                          {
                            item.status
                          }

                        </span>

                      </td>

                    </tr>

                  )
                )

                :

                Array
                  .from({
                    length: 8,
                  })
                  .map(
                    (
                      _,
                      i
                    ) => (

                      <tr
                        key={i}
                      >

                        <td>
                        </td>

                        <td>
                        </td>

                        <td>
                        </td>

                        <td>
                        </td>

                      </tr>

                    )
                  )

            }

          </tbody>

        </table>

      </div>

    </div>
  );
}