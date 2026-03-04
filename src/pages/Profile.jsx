import React from 'react';

const Profile = ({ name, age, city }) => {
  const userInfo = [
    { label: 'Name', value: name, icon: '👤' },
    { label: 'Age', value: `${age} years old`, icon: '🎂' },
    { label: 'City', value: city, icon: '🏙️' },
    { label: 'Status', value: 'Active', icon: '✅' },
  ];

  return (
    <div className="animate-fadeIn min-h-[calc(100vh-8rem)]">
      <header className="py-10 sm:py-12 md:py-16 lg:py-20 text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Profile Page
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          This page demonstrates simple props passing with mapped cards
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {userInfo.map((info, index) => (
            <div
              key={index}
              className={`
                p-5 sm:p-6 md:p-7 
                bg-card-bg border border-border 
                rounded-xl 
                shadow-sm hover:shadow-md 
                transition-all duration-300 
                hover:-translate-y-1.5 active:scale-[0.98]
              `}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0">
                    {info.icon}
                  </span>
                  <div>
                    <h3 className="font-medium text-text-muted text-sm sm:text-base">
                      {info.label}
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-text">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 p-5 sm:p-6 bg-primary/5 sm:bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-center text-text-muted text-sm sm:text-base">
            These props were passed from the App component:
            <code className="block mt-3 sm:mt-4 p-3 sm:p-4 bg-bg/80 border border-border/50 rounded text-left text-xs sm:text-sm font-mono overflow-x-auto">
              &lt;Profile name="{name}" age={age} city="{city}" /&gt;
            </code>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;