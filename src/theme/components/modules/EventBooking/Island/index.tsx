import React, { useState } from "react";
import styles from "../event-booking.module.css";

export default function EventSearchPage() {
  const [showSearchModal, setShowSearchModal] = useState(true);
  const [showBrowseAllModal, setShowBrowseAllModal] = useState(false);
  const [showBrowseLocationModal, setShowBrowseLocationModal] = useState(false);

    const categories = [
    {
      title: "What's Your Scene?",
      subtitle: "Explore events tailored to every vibe and community",
      items: [
        {
          title: "Family Fun",
          subtitle: "Making memories together",
          icon: "👨‍👩‍👧‍👦",
          bgImage: "/images/family-fun.jpg",
        },
        {
          title: "Gospel & Faith",
          subtitle: "Uplifting music and spiritual connections",
          icon: "🙏",
          bgImage: "/images/gospel-faith.jpg",
        },
        {
          title: "Lifestyle & Wellness",
          subtitle: "Events that elevate your everyday",
          icon: "🧘",
          bgImage: "/images/lifestyle-wellness.jpg",
        },
        {
          title: "Live Music",
          subtitle: "Feel the beat, live the moment",
          icon: "🎵",
          bgImage: "/images/live-music.jpg",
        },
        {
          title: "Party",
          subtitle: "Party & Nightlife",
          icon: "🎉",
          bgImage: "/images/party.jpg",
        },
        {
          title: "Women's Events",
          subtitle: "Celebrating sisterhood and empowerment",
          icon: "👩",
          bgImage: "/images/womens-events.jpg",
        }
      ]
    }
  ];

  const featuredEvents = [
    {
      title: "Explore Exciting Events & Experiences",
      subtitle: "Variety of Events to suit any taste",
      events: [
        {
          title: "Matjhabeng Spring Blow 2025",
          date: "27 SEP",
          location: "WELKOM, FREE STATE",
          tags: ["MUSIC", "NIGHTLIFE", "CELEBRATION"],
          description: "Get ready for an electrifying night at Matjhabeng Spring Blow # MSB featuring the incredible performance by Leem Crazy! Mark your calendars for this unforgettable event."
        },
        {
          title: "Mpumalanga Show",
          date: "4 to 6 SEP",
          location: "MBOMBELA, MPUMALANGA",
          tags: ["FESTIVAL", "EDUCATIONAL", "FAMILY ENTERTAINMENT"],
          description: "Join us for the vibrant MPUMALANGA SHOW on 4th September 2025! Spend an exciting 14 hours with us, featuring performances by PIET POMPIES and TWISTED. The event will be held at Ump stadium in Mbombela, Mpumalanga. This is a not-to-be-missed live event that promises a memorable experience for all. Please note that this event is not age restricted. See you there!"
        },
        {
          title: "CUFA 2025 Global Stage All White",
          date: "11 OCT",
          location: "BLOEMFONTEIN, FREE STATE",
          tags: ["MUSIC", "FESTIVAL", "CULTURE"],
          description: "CUFA Global Stage is where continents connect and cultures collide. This vibrant event blends global rhythms with South African soul, featuring music legends and rising stars from every corner of the globe. It's unity in diversity—pure, powerful, and unforgettable."
        }
      ]
    },
    {
      title: "Get Your Engines Started",
      subtitle: "Burning rubber and adrenalin fuelled events",
      events: [
        {
          title: "Matjhabeng Spin Blow",
          date: "28 SEP 2025",
          location: "PHAKISA, FREE STATE",
          tags: ["SPINNING", "MUSIC", "OUTDOOR"],
          description: "Join us for an electrifying day at the Matjhabeng Spin Blow event featuring thrilling performances by Katra, Porra, Panjaro, and Chad!"
        },
        {
          title: "MAHEM Spinfest the reunion",
          date: "25 OCT 2025",
          location: "MAHEM RACEWAY, PRETORIA",
          tags: ["SPINNING", "MOTOR SPORT", "MUSIC"],
          description: "Get ready for the 6th annual MAHEM SPINFEST - the ultimate reunion of music, fun, and entertainment! Join us for a day filled with electrifying performances, pulsating beats, and unforgettable memories."
        },
        {
          title: "CSA 3rd Annual Royal Rumble Spin and Music",
          date: "30 AUG 2025",
          location: "POTCHEFSTROOM, NORTH WEST",
          tags: ["SPINNING", "MUSIC", "MOTOR SPORT"],
          description: "CSA Presents it 3rd Annual Spin and Music event. where motorsport and music meets, and great memories are made."
        }
      ]
    },
    {
      title: "Family",
      subtitle: "Fun for the Entire Family",
      events: [
        {
          title: "Impolo Yabahlobo Family Day",
          date: "6 SEP 2025",
          location: "EAST LONDON, EASTERN CAPE",
          tags: ["FAMILY", "OUTDOOR", "MUSIC"],
          description: "Get ready for an unforgettable family day out, as Umhlobo Wenene FM proudly announces the return of its signature event, 'Impolo Yabahlobo', set to take place on 6 September 2025, at the Police Park, East London from 09h00 to 19h00."
        },
        {
          title: "Fun Republic Spring Fun Day",
          date: "6 SEP 2025",
          location: "MZANSI RESORTS,MABOPANE",
          tags: ["KIDS ACTIVITIES", "PICNIC", "FAMILY ENTERTAINMENT"],
          description: "Activities Include:, Swimming pool Area,Kiddies area, Mascots , Jumping Castles and Slides, Water games, Family Games, DJ on Stage, Braai Area, Picnic Area"
        },
        {
          title: "Hunadi Family Fun Day",
          date: "6 SEP 2025",
          location: "MAHWERELENG, LIMPOPO",
          tags: ["FAMILY FUN", "CHILDRENS ENTERTAINMENT", "MUSICAL PERFORMANCES"],
          description: "Mahwelereng stand up Hunadi's Family Fun Day returns with an exciting lineup, bigger and better than ever. This event will showcase exceptional children's entertainment, including jumping castles, pools, trampolines, famous mascots, and a variety of other engaging activities. Join us for a day hosted by Hunadi Host, featuring some of the hottest musical acts in the entertainment industry."
        }
      ]
    },
    {
      title: "Festival Season",
      subtitle: "Multi-day celebrations and festival experiences",
      events: [
        {
          title: "Slotjhile Jazz Festival",
          date: "1 NOV 2025",
          location: "THEMBISA, GAUTENG",
          tags: ["JAZZ", "SPRINGTIME", "FESTIVAL"],
          description: "Experience the magic of live jazz music at the Slotjhile Jazz Festival. Get ready for a weekend filled with soulful melodies, captivating performances, and unforgettable memories."
        },
        {
          title: "Exclusive White Spring Picnic",
          date: "6 SEP 2025",
          location: "BENONI, JOHANNESBURG",
          tags: ["SJAVA", "BIG ZULU", "MULTIPLE ARTITS"],
          description: "Join us for the most Exclusive White Spring Picnic at the beautiful Willowmoore Cricket Stadium on Saturday, 6 September 2025. Get ready for a day filled with music, fun, and the perfect Denim & White theme."
        },
        {
          title: "The South African 4x4 & Outdoor Show",
          date: "6 & 7 SEP 2025",
          location: "ZWARTKOPS, PRETORIA",
          tags: ["ALL AGES", "OUTDOOR", "LIVE DEMONSTRATIONS"],
          description: "Experience the thrill of the great outdoors at SA's largest outdoor and leisure event, featuring over 350 exhibitors showcasing the latest in 4x4 vehicles, camping gear, outdoor equipment, and more!"
        }
      ]
    },
    {
      title: "Premium Experiences",
      subtitle: "Luxury dining and exclusive entertainment",
      events: [
        {
          title: "Meet and Greet Shandesh Kiddies Festival",
          date: "20 SEP",
          location: "POLOKWANE, LIMPOPO",
          tags: ["FESTIVAL", "FAMILY", "OUTDOOR"],
          description: "Shandesh presents the Meet & Greet Kiddies Festival. The festival promises to deliver an unforgettable experience as a token of appreciation for the support our young audience has shown to Shandesh. Attendees can look forward to lots of entertainment, famous mascots, jumping castles, trampolines, and a variety of engaging activities and entertainment for kids."
        },
        {
          title: "Somizi's Shades of Pink",
          date: "30 AUG 2025",
          location: "EMPERORS PALACE, GAUTENG",
          tags: ["MUSIC", "CULTURAL", "FESTIVAL"],
          description: "Join us for an unforgettable experience at Somizi's Shades of Pink event! Don't miss out on this star-studded lineup and a night filled with music, fun, and the vibrant atmosphere of Shades of Pink!"
        },
        {
          title: "Le Petit Chef In The Footsteps Of Marco Polo",
          date: "3 JUL - 31 AUG 2025",
          location: "BLUEBERRY HILL HOTEL, JOHANNESBURG",
          tags: ["TECHNOLOGY & GASTRONOMY", "MARCO POLO'S JOURNEY", "GOURMET DINING"],
          description: "A world tour through gastronomy with technology, live entertainment and surprises. Each course themed with Marco Polo's travels."
        }
      ]
    },
    {
      title: "Music",
      subtitle: "Something for everyone",
      events: [
        {
          title: "The Deep Rustenburg 2025",
          date: "30 AUG 2025",
          location: "RUSTENBURG SHOWGROUNDS, RUSTENBURG",
          tags: ["MUSIC", "PARTY", "DANCE"],
          description: "We coming back Rustenburg and this time we coming even stronger. Do come join us for this year's edition of THE DEEP we taking it back at Rustenburg Showgrounds"
        },
        {
          title: "One Country Concert",
          date: "30 AUG 2025",
          location: "MEROPA CASINO, POLOKWANE",
          tags: ["CULTURE", "CELEBRATION", "ALL-STAR LINEUP"],
          description: "ONE COUNTRY CONCERT is a cultural melting pot where music, traditions, and diversity come together in harmony. Join us for a memorable experience celebrating the beauty of diversity through the power of music."
        },
        {
          title: "Lekompo vs Piano All Black",
          date: "13 Sep 2025",
          location: "LEHURUTSHE, NORTH WEST",
          tags: ["GENRE vs GENRE", "LEKOMPO", "PIANO"],
          description: "Join us for an electrifying night at LEKOMPO vs PIANO ALL BLACK! Get ready to experience a one-of-a-kind event filled with music, food, drinks, friends, and non-stop entertainment."
        }
      ]
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Live the Moment</h1>
        <p className={styles.heroSubtitle}>Discover amazing experiences happening in love</p>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.title}>Find Your Perfect Event</h2>

            <div className={styles.buttonsContainer}>
              <button
                className={styles.browseButton}
                onClick={() => setShowBrowseAllModal(true)}
              >
                <span className={styles.buttonIcon}>📅</span>
                <div>
                  <div className={styles.buttonTitle}>Browse All Events</div>
                  <div className={styles.buttonSubtitle}>Explore all events</div>
                </div>
                <span className={styles.buttonArrow}>›</span>
              </button>

              <button
                className={styles.browseButton}
                onClick={() => setShowBrowseLocationModal(true)}
              >
                <span className={styles.buttonIcon}>📍</span>
                <div>
                  <div className={styles.buttonTitle}>Browse by Location</div>
                  <div className={styles.buttonSubtitle}>Find events near you</div>
                </div>
                <span className={styles.buttonArrow}>›</span>
              </button>
            </div>

            <div className={styles.dividerContainer}>
              <hr className={styles.dividerLine} />
              <span className={styles.dividerText}>OR</span>
              <hr className={styles.dividerLine} />
            </div>

            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="search"
                placeholder="Type to see available events, artists, venues..."
                className={styles.searchInput}
              />
            </div>

            <div className={styles.popularSearchesLabel}>Popular Searches</div>
            <div className={styles.popularSearches}>
              <button className={styles.popularSearchButton}>
                <span style={{ marginRight: 6 }}>🎤</span> Concerts
              </button>
              <button className={styles.popularSearchButton}>
                <span style={{ marginRight: 6 }}>🎭</span> Comedy Shows
              </button>
              <button className={styles.popularSearchButton}>
                <span style={{ marginRight: 6 }}>⚽</span> Sports
              </button>
              <button className={styles.popularSearchButton}>
                <span style={{ marginRight: 6 }}>🧺</span> Picnic
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Below the Modal */}
      <div className={styles.mainContent}>
        {/* Categories Section */}
        <div className={styles.categoriesSection}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryContainer}>
              <h2 className={styles.sectionTitle}>{category.title}</h2>
              <p className={styles.sectionSubtitle}>{category.subtitle}</p>
              <div className={styles.categoryItems}>
                {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={styles.categoryItemCard}
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className={styles.categoryOverlay}>
                    <div className={styles.iconBadge}>{item.icon}&nbsp;{item.title}</div> {/* If you want icon inside badge */}
                    <h3 className={styles.categoryItemTitle}>{item.title}</h3>
                    <p className={styles.categoryItemSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Events */}
        <div className={styles.featuredEvents}>
          {featuredEvents.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.eventSection}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionSubtitle}>{section.subtitle}</p>
              <div className={styles.eventGrid}>
                {section.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={styles.eventCard}>
  <div className={styles.eventImageContainer}>
    {/* You could have a dynamic image or a placeholder here */}
    <img
      src={`/images/events/${event.title.replace(/\s+/g, '-').toLowerCase()}.jpg`}
      alt={event.title}
      className={styles.eventImage}
    />
    <div className={styles.eventDateBadge}>{event.date}</div>
  </div>
  
  <div className={styles.eventContent}>
    <h3 className={styles.eventTitle}>{event.title}</h3>
    <div className={styles.eventLocation}>{event.location}</div>
    <div className={styles.eventTags}>
      {event.tags.map((tag, tagIndex) => (
        <span key={tagIndex} className={styles.eventTag}>{tag}</span>
      ))}
    </div>
    <p className={styles.eventDescription}>{event.description}</p>
  </div>
  
  <button className={styles.eventButton}>Find Tickets</button>
</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Page Modals (empty for now) */}
      {showBrowseAllModal && (
        <div className={styles.fullPageModal}>
          <button
            className={styles.backButton}
            onClick={() => setShowBrowseAllModal(false)}
          >
            ← Back
          </button>
          <div className={styles.fullModalContent}>
            {/* Browse All Events content will go here */}
          </div>
        </div>
      )}

      {showBrowseLocationModal && (
        <div className={styles.fullPageModal}>
          <button
            className={styles.backButton}
            onClick={() => setShowBrowseLocationModal(false)}
          >
            ← Back
          </button>
          <div className={styles.fullModalContent}>
            {/* Browse by Location content will go here */}
          </div>
        </div>
      )}
    </div>
  );
}