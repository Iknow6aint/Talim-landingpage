"use client";

import { useState } from 'react';

const WhySchoolsChoose = () => {
  const [activeTab, setActiveTab] = useState('schools');

  const tabs = [
    { 
      id: 'schools', 
      label: 'For Schools',
      title: 'Run Your School Easily, Make Learning Effortless',
      description: 'TALIM helps schools manage everything from classes and teachers to announcements and attendance — all in one connected platform. Create classes, assign teachers, manage students, and share updates instantly. Spend less time on paperwork and more time improving education quality.'
    },
    { 
      id: 'teachers', 
      label: 'For Teachers',
      title: 'Teach Smarter, Not Harder',
      description: 'Empower teachers with tools to create lessons, share resources, track student progress, and communicate with parents effortlessly. TALIM streamlines classroom management so teachers can focus on what matters most — inspiring students and delivering quality education.'
    },
    { 
      id: 'students', 
      label: 'For Students',
      title: 'Learn Anywhere, Anytime',
      description: 'Give students access to their classes, assignments, and learning materials in one place. TALIM makes it easy for students to stay organized, submit work, track their progress, and engage with teachers and peers — all from a simple, intuitive platform.'
    },
    { 
      id: 'parents', 
      label: 'For Parents',
      title: 'Stay Connected to Your Child\'s Learning Journey',
      description: 'Keep parents informed with real-time updates on assignments, attendance, grades, and school announcements. TALIM bridges the gap between home and school, making it easy for parents to support their child\'s education and stay involved every step of the way.'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Schools Choose TALIM
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            One platform to manage classes, share resources, track progress,
            and keep everyone connected — simple, fast, and reliable.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col h-full">
            {/* Tab Navigation */}
            <div className="flex flex-wrap border border-gray-200 p-2 rounded-2xl gap-0 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-7 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-black'
                      : 'bg-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="mb-8">
              <img
                src="/aim.png"
                alt="TALIM Platform"
                className="object-contain w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="text-center md:text-center mt-auto">
              <h3 className="text-2xl md:text-2xl font-bold text-black mb-2">
                {activeTabData?.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activeTabData?.description}
              </p>
            </div>
          </div>

          {/* Right Section - Dashboard Preview */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-lg">
              <img
                src="/tlim.png"
                alt="TALIM Dashboard"
                className="object-contain w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsChoose;