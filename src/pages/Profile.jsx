import React from 'react';

const Profile = ({ name, age, city }) => {
  const userInfo = [
    { label: 'Name', value: name, icon: '👤' },
    { label: 'Age', value: `${age} years old`, icon: '🎂' },
    { label: 'City', value: city, icon: '🏙️' },
    { label: 'Status', value: 'Active', icon: '✅' }
  ];


  return (
    <div className="animate-fadeIn">
      <header className="py-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">Profile Page</h1>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          This page demonstrates simple props passing with mapped cards
        </p>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userInfo.map((info, index) => (
            <div key={index} className="p-6 bg-card-bg border border-border rounded-xl transition-transform hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-text-muted">{info.label}</h3>
                    <p className="text-xl">{info.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-center text-text-muted">
            These props were passed from the App component:
            <code className="block mt-2 text-sm bg-bg p-2 rounded">
              &lt;Profile name="{name}" age={age} city="{city}" /&gt;
            </code>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
