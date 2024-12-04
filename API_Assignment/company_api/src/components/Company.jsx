// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./style.css";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [expandedCompany, setExpandedCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          "https://student-api.acpt.lk/api/companies"
        );
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanies();
  }, []);

  const toggleDetails = (companyName) => {
    setExpandedCompany((prev) => (prev === companyName ? null : companyName));
  };

  return (
    <div className="container">
      <h1 className="title">Company Details</h1>
      <div className="cards-container">
        {companies.map((company) => (
          <div key={company.company} className="company-card">
            <div className="card-header">
              <h2 className="company-name">{company.company}</h2>
              <p className="company-location">{company.location}</p>
              <button
                className="dropdown-button"
                onClick={() => toggleDetails(company.company)}
              >
                {expandedCompany === company.company
                  ? "Hide Details"
                  : "Show Details"}
              </button>
            </div>
            {expandedCompany === company.company && (
              <div className="card-details">
                {company.departments && company.departments.length > 0 ? (
                  company.departments.map((dept, index) => (
                    <div key={index} className="department">
                      <h3>{dept.name}</h3>
                      <ul>
                        {dept.employees.map((employee, empIndex) => (
                          <li key={empIndex} className="employee">
                            <strong>{employee.name}</strong> -{" "}
                            {employee.position}
                            <p>Skills: {employee.skills.join(", ")}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p>No departments available.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
