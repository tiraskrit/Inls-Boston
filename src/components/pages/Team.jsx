import React, { useState, useEffect } from 'react';
import  Abi from '../../assets/images/members/Abi Gajurel.jpg';
import  Sushil_Nepal from '../../assets/images/members/Sushil Nepal.jpg';
import  Bijay_Poudel from '../../assets/images/members/Bijay Sharma Paudel.jpg';
import  Manoj_Acharya from '../../assets/images/members/Manoj Acharya2.jpg';
import  Prakash_Khadka from '../../assets/images/members/Prakash Khadka.jpg';
import  Manohar_Dhital from '../../assets/images/members/Manahor Dhital.jpg';
import  Mamata_Karma from '../../assets/images/members/Mamata Karmacharya.jpg';
import  Maheshwor_Panta from '../../assets/images/members/Maheshwor panta.jpg';
import  Shanti_Joshi from '../../assets/images/members/Shanti Joshi.jpg';
import  Balkrishna_Subedi from '../../assets/images/members/Bal Krishna Subedi.jpg';
import  Jayaram_Regmi from '../../assets/images/members/Khagendra Regmi.jpg';
import  Nabin_Upreti from '../../assets/images/members/Nabin Upreti.jpg';
import  Deepa_Pun from '../../assets/images/members/Deepa rai poon.jpg';
import  Pratik_rawal from '../../assets/images/members/Pratik Rawal.jpg';
import  Dipendra_Pokharel from '../../assets/images/members/Dipendra Pokhrel.jpg';
import  Sujan_Kharel from '../../assets/images/members/Sujan Kharel.jpg';
import  Ramesh_Parajuli from '../../assets/images/members/Ramesh Parajuli.jpg';
import  Bhim_prasad_Upadhyaya from '../../assets/images/members/Bhim Padhya.jpg';
import  Guru_Adhikari from '../../assets/images/members/Guru Adhikari.jpg';
import  Prakash_Khanal from '../../assets/images/members/Prakash Khadka.jpg';
import  Sher_Bahadur_Bohara from '../../assets/images/members/Sher Bdr Bohara.jpg';
import  Thani_Ratna_Kandel from '../../assets/images/members/Thani ratna Kandel.jpg';
import  Ajit_Pokhrel from '../../assets/images/members/Ajit pokhrel.jpg';
import  Dipak_Khatri from '../../assets/images/members/Dipak Khatri.jpg';
import  Yama_Sharma_Poudel from '../../assets/images/members/Yem paudel.jpg';


const Team = () => {
  const [currentTeam, setCurrentTeam] = useState([]);
  const [pastTeams, setPastTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('current');
  const [selectedTerm, setSelectedTerm] = useState('2022-2024');

  useEffect(() => {
    // Simulating API calls
    setTimeout(() => {
      // Current Team Members
      setCurrentTeam([
        {
          id: 1,
          name: "अवी गजुरेल",
          position: "अध्यक्ष",
          bio: "Abi is a poet and educator with over 15 years of experience promoting Nepali literature in the US. He has published three poetry collections and is a regular contributor to various literary journals.",
          image: Abi,
          social: {
            email: "abi@inlsboston.org",
            twitter: "https://twitter.com/abi",
            linkedin: "https://linkedin.com/in/abi"
          }
        },
        {
          id: 2,
          name: "प्रकाश खड्का",
          position: "वरिष्ठ उपाध्यक्ष",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Prakash_Khadka,
          social: {
            email: "sarita@inlsboston.org",
            twitter: "https://twitter.com/sarita",
            linkedin: "https://linkedin.com/in/sarita"
          }
        },
        {
          id: 3,
          name: "नवीन उप्रेती",
          position: "उपाध्यक्ष",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Nabin_Upreti,
          social: {
            email: "ramesh@inlsboston.org",
            twitter: "https://twitter.com/ramesh",
            linkedin: "https://linkedin.com/in/ramesh"
          }
        },
        {
          id: 4,
          name: "प्रतीक रावल",
          position: "सचिव",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Pratik_rawal,
          social: {
            email: "sunita@inlsboston.org",
            twitter: "https://twitter.com/sunita",
            linkedin: "https://linkedin.com/in/sunita"
          }
        },
        {
          id: 5,
          name: "दिपेन्द्र पोखरेल",
          position: "सह सचिव",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Dipendra_Pokharel,
          social: {
            email: "dipesh@inlsboston.org",
            twitter: "https://twitter.com/dipesh",
            linkedin: "https://linkedin.com/in/dipesh"
          }
        },
        {
          id: 6,
          name: "सुजन खरेल",
          position: "कोषाध्यक्ष",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Sujan_Kharel,
          social: {
            email: "anita@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        },
        {
          id: 7,
          name: "रमेश पराजुली",
          position: "सदस्य",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Ramesh_Parajuli,
          social: {
            email: "member@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        },
        {
          id: 8,
          name: "भीमप्रसाद उपाध्याय",
          position: "सदस्य",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Bhim_prasad_Upadhyaya,
          social: {
            email: "member@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        },
          {
          id: 9,
          name: "गुरु अधिकारी",
          position: "सदस्य",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Guru_Adhikari,
          social: {
            email: "member@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        },
        {
          id: 10,
          name: "प्रकाश खनाल",
          position: "सदस्य",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Prakash_Khanal,
          social: {
            email: "member@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        },
        {
          id: 11,
          name: "शेर वहादुर बोहरा",
          position: "सदस्य",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: Sher_Bahadur_Bohara,
          social: {
            email: "member@inlsboston.org",
            twitter: "https://twitter.com/anita",
            linkedin: "https://linkedin.com/in/anita"
          }
        }
      ]);

      // Past Team Members by term
      setPastTeams([
        {
          term: "2022-2024",
          members: [
            {
              id: 101,
              name: "महेश्वर पन्त",
              position: "अध्यक्ष",
              image: Maheshwor_Panta,
            },
            {
              id: 102,
              name: "विजय शर्मा पौडेल",
              position: "वरिष्ठ उपाध्यक्ष",
              image: Bijay_Poudel,
            },
            {
              id: 103,
              name: "मनोज आचार्य",
              position: "उपाध्यक्ष",
              image: Manoj_Acharya,
            },
            {
              id: 104,
              name: "अवी गजुरेल",
              position: "उपाध्यक्ष",
              image: Abi,
            },
            {
              id: 105,
              name: "प्रकाश खड्का",
              position: "सचिव",
              image: Prakash_Khadka,
            },
            {
              id: 106,
              name: "प्रतीक रावल",
              position: "सह सचिव",
              image: Pratik_rawal,
            },
            {
              id: 108,
              name: "थानी रत्न कंडेल",
              position: "कोषाध्यक्ष",
              image: Thani_Ratna_Kandel,
            },
            {
              id: 108,
              name: "अजित पोख्रेल",
              position: "सदस्य",
              image: Ajit_Pokhrel,
            },
            {
              id: 108,
              name: "नवीन उप्रेती",
              position: "सदस्य",
              image: Nabin_Upreti,
            },
            {
              id: 108,
              name: "भीमप्रसाद उपाध्याय",
              position: "सदस्य",
              image: Bhim_prasad_Upadhyaya,
            },
            {
              id: 108,
              name: "दिपक खत्री",
              position: "सदस्य",
              image: Dipak_Khatri,
            },
            {
              id: 108,
              name: "नवीन उप्रेती",
              position: "सदस्य",
              image: Nabin_Upreti,
            }
          ]
        },

        {
          term: "2020-2022",
          members: [
            {
              id: 101,
              name: "दीपा राई पुन",
              position: "अध्यक्ष",
              image: Deepa_Pun,
            },
            {
              id: 102,
              name: "सुशील नेपाल",
              position: "वरिष्ठ उपाध्यक्ष",
              image: Sushil_Nepal,
            },
            {
              id: 103,
              name: "विजय शर्मा पौडेल",
              position: "उपाध्यक्ष",
              image: Bijay_Poudel,
            },
            {
              id: 104,
              name: "मनोज आचार्य",
              position: "उपाध्यक्ष",
              image: Manoj_Acharya,
            },
            {
              id: 105,
              name: "अवी गजुरेल (बैकुण्ठ)",
              position: "सचिव",
              image: Abi,
            },
            {
              id: 106,
              name: "प्रकाश खड्का",
              position: "सह सचिव",
              image: Prakash_Khadka,
            },
            {
              id: 107,
              name: "मनोहर धिताल",
              position: "सह सचिव",
              image: Manohar_Dhital,
            },
            {
              id: 108,
              name: "ममता कर्माचार्य",
              position: "कोषाध्यक्ष",
              image: Mamata_Karma,
            },
            {
              id: 108,
              name: "महेश्वर पन्त",
              position: "सदस्य",
              image: Maheshwor_Panta,
            },
            {
              id: 108,
              name: "जयराम रेग्मी",
              position: "सदस्य",
              image: Jayaram_Regmi,
            },
            {
              id: 108,
              name: "शान्ति जोशी",
              position: "सदस्य",
              image: Shanti_Joshi,
            },
            {
              id: 108,
              name: "वालकृष्ण सुवेदी",
              position: "सदस्य",
              image: Balkrishna_Subedi,
            },
            {
              id: 108,
              name: "नवीन उप्रेती",
              position: "सदस्य",
              image: Nabin_Upreti,
            }
          ]
        },
        
        {
          term: "2018-2020",
          members: [
            {
              id: 101,
              name: "यम शर्मा पौडेल",
              position: "अध्यक्ष",
              image: Yama_Sharma_Poudel,
            },
            {
              id: 102,
              name: "सुशील नेपाल",
              position: "वरिष्ठ उपाध्यक्ष",
              image: Sushil_Nepal,
            },
            {
              id: 103,
              name: "विजय शर्मा पौडेल",
              position: "उपाध्यक्ष",
              image: Bijay_Poudel,
            },
            {
              id: 104,
              name: "मनोज आचार्य",
              position: "उपाध्यक्ष",
              image: Manoj_Acharya,
            },
            {
              id: 105,
              name: "अवी गजुरेल (बैकुण्ठ)",
              position: "सचिव",
              image: Abi,
            },
            {
              id: 106,
              name: "प्रकाश खड्का",
              position: "सह सचिव",
              image: Prakash_Khadka,
            },
            {
              id: 107,
              name: "मनोहर धिताल",
              position: "सह सचिव",
              image: Manohar_Dhital,
            },
            {
              id: 108,
              name: "ममता कर्माचार्य",
              position: "कोषाध्यक्ष",
              image: Mamata_Karma,
            },
            {
              id: 108,
              name: "महेश्वर पन्त",
              position: "सदस्य",
              image: Maheshwor_Panta,
            },
            {
              id: 108,
              name: "जयराम रेग्मी",
              position: "सदस्य",
              image: Jayaram_Regmi,
            },
            {
              id: 108,
              name: "शान्ति जोशी",
              position: "सदस्य",
              image: Shanti_Joshi,
            },
            {
              id: 108,
              name: "वालकृष्ण सुवेदी",
              position: "सदस्य",
              image: Balkrishna_Subedi,
            },
            {
              id: 108,
              name: "नवीन उप्रेती",
              position: "सदस्य",
              image: Nabin_Upreti,
            }
          ]
        },
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

  const selectedTeam = pastTeams.find(team => team.term === selectedTerm);

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
                      <img src={member.image} alt={member.name} className="w-24 object-cover" />
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
          <div>
            {/* Term Dropdown */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <select
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-lg font-medium text-gray-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700"
                >
                  {pastTeams.map((team) => (
                    <option key={team.term} value={team.term}>
                      {team.term} Committee
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Selected Team Display */}
            {selectedTeam && (
              <div>
                <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center border-b pb-4">{selectedTeam.term} Committee</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {selectedTeam.members.map((member) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;