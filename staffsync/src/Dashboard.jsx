import React from 'react';

function Dashboard (){
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>
            <main className="dashboard-content">
                <section className="dashboard-section">
                    <h2>Section 1</h2>
                    <p>Content for section 1 goes here.</p>
                </section>
                <section className="dashboard-section">
                    <h2>Section 2</h2>
                    <p>Content for section 2 goes here.</p>
                </section>
            </main>
            <footer className="dashboard-footer">
                <p>&copy; 2023 Your Company</p>
            </footer>
        </div>
    );
};

export default Dashboard;