import React, { useState } from "react";

function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [teacher, setTeacher] = useState({
    name: "John Smith",
    role: "Mathematics Teacher",
    email: "johnsmith@gmail.com",
    phone: "+91 9876543210",
    subject: "Mathematics",
    qualification: "M.Sc Mathematics",
    experience: "8 Years",
    gender: "Male",
    address: "Hyderabad, Telangana",
    students: 128,
    classes: 8,
    tests: 14,
    assignments: 25,
    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setTeacher({
        ...teacher,
        image: imageUrl,
      });
    }
  };

  return (
    <>
      <style>
        {`
        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        .profile-page{
          padding:25px;
          background:#f5f7fb;
          min-height:100vh;
        }

        .page-title{
          margin-bottom:20px;
          color:#1e293b;
        }

        .profile-header{
          background:white;
          padding:25px;
          border-radius:20px;
          display:flex;
          gap:25px;
          align-items:center;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .profile-img{
          width:140px;
          height:140px;
          border-radius:50%;
          border:5px solid #2563eb;
          object-fit:cover;
        }

        .profile-info h2{
          margin-bottom:8px;
        }

        .profile-info p{
          color:#666;
          margin-bottom:10px;
        }

        .edit-btn{
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          cursor:pointer;
          font-weight:600;
        }

        .stats{
          margin-top:25px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .card{
          background:white;
          padding:25px;
          border-radius:15px;
          text-align:center;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .card h2{
          color:#2563eb;
          margin-bottom:8px;
        }

        .info-section{
          margin-top:25px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .info-card{
          background:white;
          padding:20px;
          border-radius:15px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .info-card h3{
          margin-bottom:15px;
        }

        .row{
          display:flex;
          justify-content:space-between;
          padding:12px;
          margin-bottom:10px;
          background:#f3f4f6;
          border-radius:10px;
        }

        .activity-card{
          margin-top:25px;
          background:white;
          padding:20px;
          border-radius:15px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .activity{
          background:#f3f4f6;
          padding:12px;
          border-radius:10px;
          margin-top:10px;
        }

        .modal{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.5);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:1000;
        }

        .modal-content{
          background:white;
          width:90%;
          max-width:650px;
          border-radius:15px;
          padding:25px;
          max-height:90vh;
          overflow-y:auto;
        }

        .modal-content h2{
          margin-bottom:20px;
        }

        .form-group{
          margin-bottom:15px;
        }

        .form-group label{
          display:block;
          margin-bottom:6px;
          font-weight:600;
        }

        .form-group input,
        .form-group textarea{
          width:100%;
          padding:12px;
          border:1px solid #ddd;
          border-radius:8px;
        }

        .form-group textarea{
          height:100px;
        }

        .form-buttons{
          display:flex;
          gap:10px;
          margin-top:20px;
        }

        .save-btn{
          flex:1;
          background:#16a34a;
          color:white;
          border:none;
          padding:12px;
          border-radius:8px;
          cursor:pointer;
        }

        .cancel-btn{
          flex:1;
          background:#dc2626;
          color:white;
          border:none;
          padding:12px;
          border-radius:8px;
          cursor:pointer;
        }

        @media(max-width:768px){

          .profile-header{
            flex-direction:column;
            text-align:center;
          }

          .stats{
            grid-template-columns:1fr;
          }

          .info-section{
            grid-template-columns:1fr;
          }

          .row{
            flex-direction:column;
            gap:5px;
          }

          .edit-btn{
            width:100%;
          }

          .form-buttons{
            flex-direction:column;
          }
        }
        `}
      </style>

      <div className="profile-page">
        <h1 className="page-title">My Profile</h1>

        <div className="profile-header">
          <img
            src={teacher.image}
            alt="Teacher"
            className="profile-img"
          />

          <div className="profile-info">
            <h2>{teacher.name}</h2>
            <p>{teacher.role}</p>

            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <h2>{teacher.students}</h2>
            <p>Students</p>
          </div>

          <div className="card">
            <h2>{teacher.classes}</h2>
            <p>Classes</p>
          </div>

          <div className="card">
            <h2>{teacher.tests}</h2>
            <p>Tests</p>
          </div>

          <div className="card">
            <h2>{teacher.assignments}</h2>
            <p>Assignments</p>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <h3>Personal Information</h3>

            <div className="row">
              <span>Name</span>
              <strong>{teacher.name}</strong>
            </div>

            <div className="row">
              <span>Email</span>
              <strong>{teacher.email}</strong>
            </div>

            <div className="row">
              <span>Phone</span>
              <strong>{teacher.phone}</strong>
            </div>

            <div className="row">
              <span>Gender</span>
              <strong>{teacher.gender}</strong>
            </div>

            <div className="row">
              <span>Address</span>
              <strong>{teacher.address}</strong>
            </div>
          </div>

          <div className="info-card">
            <h3>Professional Information</h3>

            <div className="row">
              <span>Subject</span>
              <strong>{teacher.subject}</strong>
            </div>

            <div className="row">
              <span>Qualification</span>
              <strong>{teacher.qualification}</strong>
            </div>

            <div className="row">
              <span>Experience</span>
              <strong>{teacher.experience}</strong>
            </div>
          </div>
        </div>

        <div className="activity-card">
          <h3>Recent Activity</h3>

          <div className="activity">📚 Uploaded Algebra Notes</div>
          <div className="activity">📝 Created Weekly Test</div>
          <div className="activity">👨‍🎓 Added New Student</div>
          <div className="activity">📊 Published Results</div>
        </div>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Profile</h2>

            <div className="form-group">
              <label>Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={teacher.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                value={teacher.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={teacher.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                name="subject"
                value={teacher.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Qualification</label>
              <input
                name="qualification"
                value={teacher.qualification}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Experience</label>
              <input
                name="experience"
                value={teacher.experience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={teacher.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-buttons">
              <button
                className="save-btn"
                onClick={() => {
                  alert("Profile Updated Successfully");
                  setIsEditing(false);
                }}
              >
                Save Changes
              </button>

              <button
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyProfile;