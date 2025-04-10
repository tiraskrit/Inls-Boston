import React, { useState, useEffect } from 'react';

const Team = () => {
  const [currentTeam, setCurrentTeam] = useState([]);
  const [pastTeams, setPastTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('current');

  useEffect(() => {
    // Simulating API calls
    setTimeout(() => {
      // Current Team Members
      setCurrentTeam([
        {
          id: 1,
          name: "Prakash Sharma",
          position: "President",
          bio: "Prakash is a poet and educator with over 15 years of experience promoting Nepali literature in the US. He has published three poetry collections and serves as a visiting lecturer at Boston University.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-GuncdVxfs7qS5CuIGXIjDJzmovfrMzmFQ&s",
          social: {
            email: "prakash@inlsboston.org",
            twitter: "https://twitter.com/prakash",
            linkedin: "https://linkedin.com/in/prakash"
          }
        },
        {
          id: 2,
          name: "Sarita Adhikari",
          position: "Vice President",
          bio: "Sarita is a novelist and literary critic. She has been with INLS Boston since its founding and has played a key role in organizing the annual literary festival.",
          image: "https://media.licdn.com/dms/image/v2/C5603AQEATnoeSlx0zQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1642927314149?e=2147483647&v=beta&t=yc2RSCySv5jLMQEJvpeMvC0k4efi8iiC6k_80s2Gt-A",
          social: {
            email: "sarita@inlsboston.org",
            twitter: "https://twitter.com/sarita",
            linkedin: "https://linkedin.com/in/sarita"
          }
        },
        {
          id: 3,
          name: "Ramesh Poudel",
          position: "Secretary",
          bio: "Ramesh is an accomplished translator and short story writer. He works as a language instructor at Harvard University and has translated several important English works into Nepali.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQXraXJSAcwvbEFc8Kzd9rvYT5G81s3sHSw&s",
          social: {
            email: "ramesh@inlsboston.org",
            twitter: "https://twitter.com/ramesh",
            linkedin: "https://linkedin.com/in/ramesh"
          }
        },
        {
          id: 4,
          name: "Sunita Rai",
          position: "Treasurer",
          bio: "Sunita is a poet and financial analyst. She manages INLS Boston's finances and fundraising efforts while also contributing to the organization's literary magazine.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kLs3ApZqna2pwY5SMRomA3--8KwCqrXAgA&s",
          social: {
            email: "sunita@inlsboston.org",
            twitter: "https://twitter.com/sunita",
            linkedin: "https://linkedin.com/in/sunita"
          }
        },
        {
          id: 5,
          name: "Dipesh Gurung",
          position: "Media Coordinator",
          bio: "Dipesh is a journalist and documentary filmmaker. He manages INLS Boston's social media presence and produces multimedia content for the organization.",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQEPZIt3OvszSw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707180467903?e=2147483647&v=beta&t=61ICWx_u3HYdLTnEAuIlg7_BpTfaMwP0xEMn9sJwiw4",
          social: {
            email: "dipesh@inlsboston.org",
            twitter: "https://twitter.com/dipesh",
            linkedin: "https://linkedin.com/in/dipesh"
          }
        },
        {
          id: 6,
          name: "Anita Tamang",
          position: "Event Coordinator",
          bio: "Anita is a cultural program organizer and poet. She coordinates INLS Boston's events and serves as a liaison with other cultural organizations in New England.",
          image: "https://cdnbbsr.s3waas.gov.in/s3ec05ddf9029977a61241841edeae15e9/uploads/2024/08/2024081316.jpeg",
          social: {
            email: "anita@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        }
      ]);

      // Past Team Members by term
      setPastTeams([
        {
          term: "2023-2024",
          members: [
            {
              id: 101,
              name: "Bikash Thapa",
              position: "President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 102,
              name: "Meena Gurung",
              position: "Vice President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 103,
              name: "Rajan KC",
              position: "Secretary",
              image: "/api/placeholder/300/300"
            },
            {
              id: 104,
              name: "Prabha Sharma",
              position: "Treasurer",
              image: "/api/placeholder/300/300"
            }
          ]
        },
        {
          term: "2021-2022",
          members: [
            {
              id: 201,
              name: "Shanta Bista",
              position: "President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 202,
              name: "Binod Rai",
              position: "Vice President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 203,
              name: "Kamala Thapa",
              position: "Secretary",
              image: "/api/placeholder/300/300"
            },
            {
              id: 204,
              name: "Nabin Poudel",
              position: "Treasurer",
              image: "/api/placeholder/300/300"
            }
          ]
        },
        {
          term: "2019-2020",
          members: [
            {
              id: 301,
              name: "Anil Bhattarai",
              position: "President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 302,
              name: "Sushma Karki",
              position: "Vice President",
              image: "/api/placeholder/300/300"
            },
            {
              id: 303,
              name: "Deepak Adhikari",
              position: "Secretary",
              image: "/api/placeholder/300/300"
            },
            {
              id: 304,
              name: "Kabita Sharma",
              position: "Treasurer",
              image: "/api/placeholder/300/300"
            }
          ]
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
        <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">Our Team</h1>
        <p className="text-xl text-gray-600 mb-10 text-center">Meet the dedicated volunteers behind INLS Boston Chapter</p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                activeTab === 'current'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Current Team
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                activeTab === 'past'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Past Teams
            </button>
          </div>
        </div>
        
        {/* Current Team */}
        {activeTab === 'current' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTeam.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img src={member.image} alt={member.name} className= "w-24 object-cover" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                    <p className="text-red-700 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-red-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.285-1.39-2.285-1.39 0-1.6 1.087-1.6 2.21v4.253H8.014v-8.59h2.558v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.7 0 3.205 1.778 3.205 4.092v4.71zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.333 9.763H6.34v-8.59H3.673v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Join Our Team</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're always looking for passionate volunteers to help us promote Nepali literature and culture in the Boston area. If you're interested in joining our team, please get in touch!
              </p>
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded">
                Contact Us
              </button>
            </div>
          </div>
        )}
        
        {/* Past Teams */}
        {activeTab === 'past' && (
          <div className="space-y-16">
            {pastTeams.map((team, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">{team.term} Committee</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {team.members.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                      <p className="text-red-700">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;