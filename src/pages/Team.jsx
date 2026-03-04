import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Alice Johnson', age: 28, city: 'San Francisco', role: 'Developer', },
    { name: 'Bob Smith', age: 35, city: 'New York', role: 'Designer' },
    { name: 'Carol Williams', age: 31, city: 'Chicago', role: 'Manager' },
    { name: 'David Brown', age: 26, city: 'Austin', role: 'Analyst' }
  ];


  return (
    <div className="animate-fadeIn">
      <header className="py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">Team Members</h1>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          Meet our amazing team members with different profiles
        </p>
      </header>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-card-bg border border-border rounded-xl transition-transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="space-y-2 text-sm text-text-muted">
                  <p> 🧽{member.age} years old</p>
                  <p> 🏙️{member.city}</p>
                  <p> 📇{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-center text-text-muted">
            This page demonstrates 4 cards with different values using array mapping
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
