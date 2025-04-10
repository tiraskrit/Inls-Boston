// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [latestEvents, setLatestEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, these would be API calls
    // Simulating API calls with setTimeout
    setTimeout(() => {
      setAnnouncements([
        {
          id: 1,
          title: "Annual Literary Festival 2025",
          date: "April 15, 2025",
          content: "Join us for our annual celebration of Nepali literature featuring renowned poets and authors from Nepal and around the world.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIybrDo63n24xjJm5w-aEHwsbHr8322G9_bw&s"
        },
        {
          id: 2,
          title: "Poetry Workshop Series",
          date: "Starting May 5, 2025",
          content: "A six-week workshop series focusing on contemporary Nepali poetry. Open to all levels of experience.",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/526405437.jpg?k=ea92c1d5aaa0ea67900cdbe2678bc500f43c0eabc587a3c18262038982dbe196&o=&hp=1"
        },
        {
          id: 3,
          title: "New Committee Election Results",
          date: "March 1, 2025",
          content: "We're pleased to announce our newly elected committee members who will serve for the 2025-2026 term.",
          image: "https://i.ytimg.com/vi/qrljzwU1xNI/maxresdefault.jpg"
        }
      ]);

      setLatestEvents([
        {
          id: 1,
          title: "Winter Poetry Gathering",
          date: "February 10, 2025",
          description: "A cozy evening of poetry readings and discussions.",
          image: "https://i.ytimg.com/vi/qrljzwU1xNI/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "Nepali New Year Celebration",
          date: "January 15, 2025",
          description: "Cultural performances and literary presentations to welcome the new year.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIybrDo63n24xjJm5w-aEHwsbHr8322G9_bw&s"
        },
        {
          id: 3,
          title: "Book Launch: 'Echoes of Himalayas'",
          date: "December 12, 2024",
          description: "Launch event for the anthology featuring Boston-based Nepali writers.",
          image: "https://i.ytimg.com/vi/qrljzwU1xNI/maxresdefault.jpg"
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
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gray-900 h-96 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold mb-4">International Nepali Literary Society</h1>
              <h2 className="text-3xl mb-6">Boston Chapter</h2>
              <p className="text-xl mb-8">Preserving and promoting Nepali literature and culture in New England</p>
              <div className="flex space-x-4">
                <Link to="/about" className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg">
                  Learn More
                </Link>
                <Link to="/events" className="bg-transparent hover:bg-white hover:text-red-700 text-white font-semibold py-3 px-6 rounded-lg border-2 border-white">
                  Upcoming Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="https://inls.org/inls/images/logo-ilns.png" alt="INLS Boston Community" className="w-18 rounded-lg shadow-xl" />
            </div>
            <div className="px-8 md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to INLS Boston</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Boston Chapter of the International Nepali Literary Society (INLS) was established in 2010 with a mission to preserve, promote, and advance Nepali literature, language, and culture in the New England region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We organize various literary events, workshops, and cultural programs throughout the year to bring together Nepali writers, poets, and literature enthusiasts in the Boston area.
              </p>
              <Link to="/about" className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Latest Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map(announcement => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <img src={announcement.image} alt={announcement.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-red-700 font-semibold text-sm mb-2">{announcement.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{announcement.title}</h3>
                  <p className="text-gray-600 mb-4">{announcement.content}</p>
                  <a href="#" className="text-red-700 font-semibold hover:text-red-800">Read More →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">
              View All Announcements
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Events Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestEvents.map(event => (
              <div key={event.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Literary Community</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Become a member of INLS Boston Chapter and connect with fellow literature enthusiasts, writers, and poets in the Boston area.
          </p>
          <button className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;