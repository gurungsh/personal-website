import React, { Component } from 'react';
import resumefile from '../Shishir_Gurung_Resume.pdf';
import './resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume-container">
                <h1>RESUME</h1>
                <a href={resumefile} download>
                    <button type="button" className="btn btn-success btn-download" >
                        <i className="fas fa-file-download"></i> Download Resume
                    </button>
                </a>
                <div className="resume-education">
                    <h2>Education</h2>
                    <div className="resume-tile">
                        <div className="resume-date">
                            08/2015 - 08/2017
                        </div>
                        <div className="resume-heading">
                            Masters in Software Engineering
                        </div>
                        <div className="resume-subheading">
                            Regis University, Denver, CO
                        </div>
                        <div className="resume-content">
                            Graduated with 3.97 GPA
                        </div>
                    </div>
                    <div className="resume-tile">
                        <div className="resume-date">
                            08/2010 - 12/2012
                        </div>
                        <div className="resume-heading">
                            Bachelors in Computer Science
                        </div>
                        <div className="resume-subheading">
                            Minnesota State University Moorhead, Moorhead, MN
                        </div>
                    </div>
                </div>
                <div className="resume-work">
                    <h2>Work Experience</h2>
                    <div className="resume-tile">
                        <div className="resume-date">
                            02/2015 - 07/2015
                        </div>
                        <div className="resume-heading">
                            Consultant
                        </div>
                        <div className="resume-subheading">
                            Vastika Inc, Dallas, TX
                        </div>
                        <div className="resume-content">
                        </div>
                        <div className="resume-date">
                            04/2015 - 05/2015
                        </div>
                        <div className="resume-heading">
                            .Net Developer
                        </div>
                        <div className="resume-subheading">
                            Contracted to Innovate Auto Finance, Fort Worth, TX
                        </div>
                        <div className="resume-content">
                            Was part of a two-man team to analyze if the company had the necessary resources and the need to rewrite Bulk Acquisition Tool (BAT). The company used various applications to determine bulk loan purchases. BATv5 was a project to rewrite BATv4. After six weeks, we concluded that it was not feasible to rewrite BAT at that time.
                        </div>
                    </div>
                    <div className="resume-tile">
                        <div className="resume-date">
                            10/2013 - 01/2015
                        </div>
                        <div className="resume-heading">
                            Consultant
                        </div>
                        <div className="resume-subheading">
                            Pioneer Technologies, Dallas, TX
                        </div>
                        <div className="resume-content">
                        </div>
                        <div className="resume-date">
                            10/2013 - 01/2015
                        </div>
                        <div className="resume-heading">
                            .Net Developer
                        </div>
                        <div className="resume-subheading">
                            Contracted to AAA Auto Insurance Mid-Atlantic, Mt. Laurel, NJ
                        </div>
                        <div className="resume-content">
                            At AAA, I worked on three different applications: RIC, Membership, and Membership Admin page. Roadside Information Center (RIC) was an ASP.Net web application that aggregated data for AAA’s Roadside Service and displayed them as charts. RIC had two data sources, AAA National’s database which was an Oracle8i database and AAA Mid-Atlantic’s database which was a SQL Server 2008R2 database. The charts were powered by FusionCharts. Other features included calendar, overtime signup, fleet management, service center management, events, accounts, and reports. The two other applications were also a .Net web applications. On Membership I worked on New Membership Signup. Membership Admin page was a single page built for AAA Customer Service Representatives.
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Resume;