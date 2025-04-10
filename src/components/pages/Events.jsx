import React, { useState, useEffect } from 'react';

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setUpcomingEvents([
        {
          id: 1,
          title: "Annual Literary Festival 2025",
          date: "April 15, 2025",
          time: "1:00 PM - 6:00 PM",
          location: "Boston Public Library, Copley Square",
          description: "Join us for our annual celebration of Nepali literature featuring renowned poets and authors from Nepal and around the world. The event will include poetry readings, panel discussions, and book signings.",
          image: "https://i.ytimg.com/vi/qrljzwU1xNI/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "Poetry Workshop Series",
          date: "Starting May 5, 2025",
          time: "6:30 PM - 8:30 PM",
          location: "Nepali Community Center, Cambridge",
          description: "A six-week workshop series focusing on contemporary Nepali poetry. Open to all levels of experience. Each session will focus on different aspects of poetry writing and will include guided exercises.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIybrDo63n24xjJm5w-aEHwsbHr8322G9_bw&s"
        },
        {
          id: 3,
          title: "Author Talk: Manjushree Thapa",
          date: "June 10, 2025",
          time: "7:00 PM - 9:00 PM",
          location: "Harvard Bookstore, Cambridge",
          description: "Join us for an evening with acclaimed Nepali-Canadian author Manjushree Thapa as she discusses her latest novel and the state of contemporary Nepali literature.",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526405437.jpg?k=ea92c1d5aaa0ea67900cdbe2678bc500f43c0eabc587a3c18262038982dbe196&o=&hp=1"
        }
      ]);

      setPastEvents([
        {
          id: 1,
          title: "Winter Poetry Gathering",
          date: "February 10, 2025",
          location: "Nepal Cultural Center, Somerville",
          description: "A cozy evening of poetry readings and discussions featuring local Nepali poets from the Boston area.",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526405437.jpg?k=ea92c1d5aaa0ea67900cdbe2678bc500f43c0eabc587a3c18262038982dbe196&o=&hp=1"
        },
        {
          id: 2,
          title: "Nepali New Year Celebration",
          date: "January 15, 2025",
          location: "Nepali Community Hall, Boston",
          description: "Cultural performances and literary presentations to welcome the new year. The event featured traditional music, dance, and readings from classic and contemporary Nepali literature.",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526405437.jpg?k=ea92c1d5aaa0ea67900cdbe2678bc500f43c0eabc587a3c18262038982dbe196&o=&hp=1"
        },
        {
          id: 3,
          title: "Book Launch: 'Echoes of Himalayas'",
          date: "December 12, 2024",
          location: "Boston University, GSU",
          description: "Launch event for the anthology featuring Boston-based Nepali writers. The anthology includes poetry, short stories, and essays exploring themes of identity, migration, and cultural heritage.",
          image: "https://i.ytimg.com/vi/qrljzwU1xNI/maxresdefault.jpg"
        },
        {
          id: 4,
          title: "Literary Translation Workshop",
          date: "November 8, 2024",
          location: "MIT Building 4, Room 231",
          description: "A workshop focused on the challenges and techniques of translating Nepali literature into English. Participants worked on translating poems and short prose pieces.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIybrDo63n24xjJm5w-aEHwsbHr8322G9_bw&s"
        }
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">Events</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">Join us for literary events, workshops, and cultural celebrations</p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                activeTab === 'upcoming'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                activeTab === 'past'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
        
        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div className="space-y-10">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h2>
                        <div className="text-red-700 font-semibold mb-4">{event.date} • {event.time}</div>
                      </div>
                      <div className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Upcoming
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="flex space-x-3">
                      <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded">
                        Register
                      </button>
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded border border-gray-300">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Past Events */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
                <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h2>
                  <div className="text-red-700 font-semibold mb-4">{event.date}</div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="text-red-700 hover:text-red-800 font-semibold">
                    View Event Photos →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;