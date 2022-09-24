import React from "react";
import "./webpage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Webpage extends React.Component {
    render() {
        return (
            <div>
            <div>
            <body>
                <div class="col-2">
                    <header class="headerContainer">
                        <h1>CLOUD COMPUTING</h1>
                    </header>
                    <main class="content">
                    <article>
                        <h2>IAAS</h2>
                        <p>Introduced in 2012 by Oracle, infrastructure as a service (IaaS) is a cloud computing service model by means of which computing resources are hosted in a public, private, or hybrid cloud. </p>
                        </article>
                        
                        <article>
                        <h2>PAAS</h2>
                        <p>Platform as a service (PaaS) or application platform as a service (aPaaS) or platform-based service is a category of cloud computing services that allows customers to provision, instantiate, run, and manage a modular bundle comprising a computing platform </p>
                        </article>
                        
                        <article>
                        <h2>SAAS</h2>
                        <p>Software as a service is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted. SaaS is also known as "on-demand software" and Web-based/Web-hosted software.</p>
                    </article>
                    <aside><h4>Benifits</h4>
                    <p>Cost Savings
                        Security
                        Flexibility
                        Mobility
                        Insight
                        Increased Collaboration
                        Quality Control
                        Disaster Recovery
                        Loss Prevention
                        Automatic Software Updates
                    </p>
                    </aside>
                    </main>
                    <footer class="footerContainer"><p><a href="mailto:cloud@example.com">cloud@example.com</a></p></footer>
                </div>
                </body>
          </div>
          </div>
        );
    }
}

export default Webpage;