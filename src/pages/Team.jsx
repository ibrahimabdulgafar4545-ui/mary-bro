import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Abdulgafar Ibrahim', age: 28, city: 'San Francisco', role: 'Developer' },
    { name: 'Ololade Qozeem', age: 35, city: 'New York', role: 'Designer' },
    { name: 'Fawaz Shola ', age: 31, city: 'Lagos', role: 'Manager' },
    { name: 'David Akindele', age: 26, city: 'Ilorin', role: 'Analyst' },
  ];

  return (
    <div className="animate-fadeIn min-h-screen">
      <header className="py-10 sm:py-12 md:py-16 lg:py-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Team Members
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          Meet our amazing team members with different profiles
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-7 bg-card-bg border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-5 bg-primary/10 sm:bg-primary/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary/30">
                  <span className="text-3xl sm:text-4xl">👤</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-text">
                  {member.name}
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-text-muted">
                  <p>🧽 {member.age} years old</p>
                  <p>🏙️ {member.city}</p>
                  <p>📇 {member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 p-5 sm:p-6 bg-primary/5 sm:bg-primary/10 border border-primary/20 rounded-lg max-w-2xl mx-auto">
          <p className="text-center text-sm sm:text-base md:text-lg text-text-muted">
            This page demonstrates 4 cards with different values using array mapping
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;