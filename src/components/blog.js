// Blog.js

import React, { useState } from 'react';
import styled from 'styled-components';
import apImage from './ap.png';
import Raj from './raj.png';
import ker from './kerala.jpg';
import Maha from './maha.jpg';
import Taka from './karnataka.jpg';
import tel from './TSMAP.png';
import Tam from './Tamil.png';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SearchBar = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BlogPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
`;

const BlogPost = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }

  &:hover {
    transform: rotateY(10deg);
  }

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const FullContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FullContent = styled.div`
  width: 60%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }

  img {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const itemsPerPage = 3;

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      title: 'Andhra Pradesh',
      content: 'Andhra Pradesh is a state in the southeastern part of India. It is known for its rich cultural heritage, historical sites, and vibrant traditions. The state capital is Amaravati, and the largest city is Visakhapatnam.',
      imageUrl: apImage,
      fullContent: {
        introduction: 'Welcome to Andhra Pradesh!',
        history: `Andhra Pradesh has a diverse history that dates back to ancient times. 
The region has been ruled by various dynasties, including the Mauryas, Satavahanas, and the Vijayanagara Empire. The state played a crucial role in the development of Buddhism and has several ancient Buddhist sites.`,
        culture: `The cultural tapestry of Andhra Pradesh is woven with classical dance forms like Kuchipudi, vibrant festivals, and traditional arts and crafts. The cuisine of Andhra Pradesh, especially the spicy Andhra cuisine, is famous across the country.`,
        landmarks: `Andhra Pradesh is home to many historical and architectural landmarks. The Araku Valley, Belum Caves, Tirupati Temple, and Charminar are just a few examples. The state's coastline along the Bay of Bengal adds to its scenic beauty.`,
        modernDevelopment: `In recent years, Andhra Pradesh has seen significant modern development. Amaravati, the capital city, is a planned city with futuristic infrastructure. The IT sector in Visakhapatnam is thriving, contributing to the state's economic growth.`,
        conclusion: `Whether you're interested in exploring ancient history, enjoying cultural festivals, or experiencing modern development, Andhra Pradesh has something to offer for every traveler.`,
      },
    },
    {
      title: 'Kerala',
      content: 'Kerala, often referred to as "God\'s Own Country," is a state on the southwestern coast of India. Known for its lush greenery, backwaters, and diverse wildlife, Kerala is a popular tourist destination.',
      imageUrl: ker,
      fullContent: {
        introduction: 'Discover the Beauty of Kerala!',
        history: `Kerala has a rich cultural history influenced by trade, immigration, and colonialism. It is home to ancient traditions, classical arts like Kathakali, and historic sites such as the Padmanabhaswamy Temple.`,
        culture: `The cultural heritage of Kerala is deeply rooted in dance, music, and festivals. Kathakali, Mohiniyattam, and traditional music forms are integral to Kerala's vibrant cultural scene. The state is also known for its unique cuisine and Ayurvedic traditions.`,
        landmarks: `Kerala boasts natural landmarks like the backwaters of Alleppey, the tea gardens of Munnar, and the beaches of Kovalam. The Western Ghats add to the state's scenic beauty, offering opportunities for trekking and wildlife exploration.`,
        modernDevelopment: `While preserving its cultural heritage, Kerala has embraced modern development. The state has achieved high levels of literacy and healthcare. The tourism industry plays a significant role in Kerala's economy.`,
        conclusion: `Experience the harmony of tradition and modernity in Kerala. Whether you seek tranquil backwaters or vibrant cultural experiences, Kerala has something for every traveler.`,
      },
    },
    {
      title: 'Rajasthan',
      content: 'Rajasthan, the "Land of Kings," is a state in Northern India known for its rich history, royal palaces, and vibrant culture. The desert landscape and colorful traditions make Rajasthan a captivating destination.',
      imageUrl: Raj,
      fullContent: {
        introduction: 'Journey through the Royal Heritage of Rajasthan!',
        history: `Rajasthan has a storied history of Rajput rule, Mughal influence, and princely states. The state is dotted with magnificent forts and palaces, each narrating tales of valor and grandeur.`,
        culture: `The cultural tapestry of Rajasthan is adorned with traditional dance forms like Ghoomar and Kalbelia, vibrant festivals like Diwali and Holi, and exquisite handicrafts such as bandhani textiles and Rajasthani miniatures.`,
        landmarks: `Explore iconic landmarks like the Amber Fort in Jaipur, the Mehrangarh Fort in Jodhpur, and the Lake Palace in Udaipur. The Thar Desert adds a unique charm with its sand dunes and camel safaris.`,
        modernDevelopment: `Rajasthan embraces both its historical legacy and modern development. The cities offer a blend of ancient architecture and modern amenities. Tourism, handicrafts, and agriculture contribute significantly to the state's economy.`,
        conclusion: `Immerse yourself in the regal ambiance of Rajasthan. Whether you're captivated by history, enticed by vibrant festivals, or intrigued by desert landscapes, Rajasthan promises an unforgettable journey.`,
      }},
      {
        title: 'Maharashtra',
        content: 'Maharashtra is a state in western India known for its diverse landscapes, bustling cities, and rich cultural heritage. The capital of Maharashtra is Mumbai, the financial hub of the country.',
        imageUrl: Maha, // Replace with an actual image URL for Maharashtra
        fullContent: {
          introduction: 'Explore the Wonders of Maharashtra!',
          history: `Maharashtra has a deep historical legacy with influences from Maratha rule, the Mughals, and the British. The state is home to historic sites like the Ajanta and Ellora Caves, showcasing ancient rock-cut architecture and sculptures.`,
          culture: `The cultural fabric of Maharashtra is woven with classical dance forms like Lavani, vibrant festivals like Ganesh Chaturthi, and traditional arts and crafts. The cuisine, including street food in Mumbai, is a gastronomic delight.`,
          landmarks: `Maharashtra boasts diverse landmarks, from the bustling cityscape of Mumbai to the serene beaches of Konkan. The hill stations of Mahabaleshwar and Lonavala offer a retreat into nature.`,
          modernDevelopment: `As an economic powerhouse, Maharashtra contributes significantly to India's GDP. Mumbai, the entertainment capital, is home to Bollywood and a thriving film industry. Pune, another major city, is known for education and IT.`,
          conclusion: `Experience the dynamic blend of tradition and modernity in Maharashtra. Whether you're exploring historical sites, enjoying street food, or embracing the cosmopolitan lifestyle, Maharashtra has something for every traveler.`,
        },
      },
      {
        title: 'Karnataka',
        content: 'Karnataka, located in the southwestern part of India, is a state known for its diverse landscapes, rich history, and cultural heritage. From bustling cities to serene hill stations, Karnataka offers a unique blend of tradition and modernity.',
        imageUrl: Taka,
        fullContent: {
          introduction: 'Explore the Wonders of Karnataka!',
          history: `Karnataka has a deep-rooted history that spans various dynasties, including the Chalukyas, Hoysalas, and the mighty Vijayanagara Empire. The state has been a cradle of art and architecture, evident in the intricate carvings of temples like Hampi and Belur.`,
          culture: `The cultural mosaic of Karnataka is vibrant and diverse. The state is renowned for its classical dance form, Yakshagana, and traditional music. Festivals like Dasara are celebrated with grandeur, showcasing the rich cultural tapestry of the region.`,
          landmarks: `Karnataka is home to iconic landmarks such as the Mysore Palace, Jog Falls, and the historic ruins of Hampi, a UNESCO World Heritage Site. The state's Western Ghats region is a haven for nature lovers, offering lush greenery and biodiversity.`,
          modernDevelopment: `In the modern era, Karnataka has emerged as a hub for technology and innovation. Bangalore, the state capital, is often referred to as the "Silicon Valley of India" and is a major IT and startup hub. The city blends its cosmopolitan vibe with historical charm.`,
          conclusion: `Whether you're exploring ancient temples, enjoying the natural beauty of Coorg, or experiencing the vibrant urban life in Bangalore, Karnataka has something for every traveler. Discover the enchanting blend of tradition and progress in this diverse state.`,
        },
      },
      // Add more blog posts as needed

      {
        title: 'Telangana',
        content: 'Telangana, the youngest state in India, was officially formed on June 2, 2014. It was carved out of the northern part of the state of Andhra Pradesh. Hyderabad, a major technology and economic hub, serves as the joint capital of Telangana and Andhra Pradesh until 2024.',
        imageUrl: tel,
        fullContent: {
          introduction: 'Discover the Charms of Telangana!',
          history: 'The history of Telangana is deeply rooted in the rich legacy of the Kakatiya and Qutb Shahi dynasties. The region has witnessed the rule of various dynasties, each contributing to its cultural heritage. Hyderabad, the capital, has historical landmarks like the Charminar and Golconda Fort.',
          culture: 'Telangana embraces a diverse cultural heritage. The state is known for its classical dance form, Perini Shivatandavam, and vibrant festivals like Bathukamma and Bonalu. The traditional arts and crafts, including the intricate Bidriware, reflect the artistic prowess of the region.',
          landmarks: 'Telangana is adorned with both historical and modern landmarks. The Ramappa Temple, a UNESCO World Heritage Site, stands as a testament to the architectural brilliance of the Kakatiya dynasty. The HITEC City in Hyderabad symbolizes the state’s technological advancements.',
          modernDevelopment: 'In recent years, Telangana has undergone rapid economic and technological growth. Hyderabad has emerged as a major IT and business destination, earning the moniker "Cyberabad." The state focuses on innovation, infrastructure development, and improving the quality of life for its residents.',
          conclusion: 'Explore the blend of tradition and progress in Telangana. Whether you\'re captivated by ancient history, cultural festivities, or modern technology hubs, Telangana has something unique to offer for every traveler.'
        },
      },

      {
        title: 'Tamil Nadu',
        content: 'Tamil Nadu, located in the southern part of India, is a state known for its rich cultural heritage, classical arts, and historical landmarks. The state capital is Chennai, a bustling metropolis on the Coromandel Coast.',
        imageUrl: Tam,
        fullContent: {
          introduction: 'Explore the Beauty of Tamil Nadu!',
          history: 'Tamil Nadu has a deep and ancient history dating back to the Sangam period, known for its literature and art. The Chola, Pandya, and Chera dynasties have left an indelible mark on the region. Temples like the Brihadeeswarar Temple in Thanjavur showcase the architectural brilliance of the Cholas.',
          culture: 'The cultural fabric of Tamil Nadu is vibrant and diverse. The state is renowned for its classical dance forms like Bharatanatyam and traditional music. Festivals like Pongal, Navaratri, and Diwali are celebrated with fervor. Tamil cuisine, including dosa, idli, and Chettinad dishes, is a gastronomic delight.',
          landmarks: 'Tamil Nadu boasts a wealth of historical and cultural landmarks. The Meenakshi Amman Temple in Madurai, the Shore Temple in Mahabalipuram, and the hill station of Ooty are among the must-visit destinations. The states coastline offers serene beaches like Marina Beach in Chennai.',
          modernDevelopment: 'While preserving its cultural heritage, Tamil Nadu has embraced modern development. Chennai is a hub for the automotive industry, and Coimbatore is known for its textile and manufacturing sectors. The state also emphasizes education and healthcare.',
          conclusion: 'Experience the timeless charm of Tamil Nadu. Whether youre exploring ancient temples, enjoying classical performances, or relaxing on picturesque beaches, Tamil Nadu has something for every traveler.'
        },
      },
      {
        title: 'Arunachal Pradesh',
        content: 'Arunachal Pradesh, nestled in the northeastern part of India, is a state of breathtaking natural beauty, diverse cultures, and unique traditions. The capital of the state is Itanagar, surrounded by lush greenery and the Eastern Himalayas.',
        imageUrl: '',
        fullContent: {
          introduction: 'Discover the Enchanting Beauty of Arunachal Pradesh!',
          geography: 'Known as the "Land of the Dawn-Lit Mountains," Arunachal Pradesh is blessed with stunning landscapes. The state is adorned with snow-capped peaks, dense forests, and vibrant river valleys. The Brahmaputra and Siang rivers flow majestically through its terrain.',
          culture: 'Arunachal Pradesh is a melting pot of cultures with diverse indigenous communities. Each tribe has its own distinct traditions, colorful festivals, and intricate handwoven textiles. The state celebrates festivals like Losar, Torgya, and Reh.',
          adventure: 'For adventure enthusiasts, Arunachal Pradesh offers trekking trails, including the famous Tawang Monastery trek, and opportunities for river rafting in the Siang River. The Sela Pass, at an elevation of over 13,000 feet, provides mesmerizing views.',
          biodiversity: 'The state is a haven for biodiversity, housing numerous rare and endangered species. The Namdapha National Park is known for its diverse flora and fauna, including the elusive snow leopard and the red panda.',
          traditionalArts: 'Arunachal Pradesh takes pride in its traditional arts and crafts. Intricately designed tribal masks, handwoven textiles, and bamboo crafts showcase the artistic prowess of the local communities.',
          conclusion: 'Immerse yourself in the enchanting beauty of Arunachal Pradesh. Whether you seek adventure in its rugged terrains, wish to witness vibrant cultural celebrations, or simply want to connect with nature, Arunachal Pradesh offers a truly unique experience.'
        },
      },
      {
        title: 'Assam',
        content: 'Nestled in the northeastern part of India, Assam is a state known for its lush tea gardens, diverse wildlife, and vibrant cultures. The state capital is Dispur, located in the charming city of Guwahati on the banks of the Brahmaputra River.',
        imageUrl: '',
        fullContent: {
          introduction: 'Embark on a Journey Through the Rich Tapestry of Assam!',
          teaCultivation: 'Assam is world-famous for its tea, and the vast tea estates that carpet the region contribute significantly to the global tea market. The aroma of Assam tea is distinctive, and a visit to a tea plantation is a must for tea enthusiasts.',
          wildlife: 'The Kaziranga National Park, a UNESCO World Heritage Site, is home to the one-horned rhinoceros and various other species. The Manas National Park adds to Assam\'s biodiversity, making it a paradise for nature lovers and wildlife enthusiasts.',
          culture: 'Assam is a cultural mosaic with a rich heritage. The Bihu festival, celebrated with dance and music, marks the Assamese New Year. The traditional handloom and handicrafts of Assam, including the Muga silk and bamboo crafts, are renowned for their craftsmanship.',
          riverBlessing: 'The mighty Brahmaputra River, flowing through Assam, is not just a geographical feature but a lifeline for the state. The Majuli Island in the Brahmaputra is the largest river island in the world, showcasing a unique blend of culture and spirituality.',
          historicTemples: 'Assam is dotted with ancient temples that reflect its historical and religious significance. The Kamakhya Temple in Guwahati, dedicated to Goddess Kamakhya, is a major pilgrimage site attracting devotees from far and wide.',
          conclusion: 'Embark on a journey through Assam, where the verdant landscapes, cultural vibrancy, and warm hospitality create an experience that lingers in the heart. Whether you are exploring the tea gardens, witnessing the rich wildlife, or immersing yourself in cultural festivities, Assam welcomes you with open arms.'
        },
      },
      {
        title: 'Bihar',
        content: 'Located in the eastern part of India, Bihar is a state steeped in history, spirituality, and cultural richness. The capital city is Patna, which stands on the southern bank of the River Ganges.',
        imageUrl: '',
        fullContent: {
          introduction: 'Journey Through the Cultural and Historical Tapestry of Bihar!',
          historicalSignificance: 'Bihar holds immense historical significance as the birthplace of Lord Buddha and the home of the ancient Nalanda University, a center for learning in ancient times. The ruins of Nalanda stand as a testament to the intellectual prowess of the region.',
          religiousHeritage: 'The state is a pilgrimage hub with sacred sites like Bodh Gaya, where Buddha attained enlightenment, and Vaishali, associated with Lord Mahavira. The Mahabodhi Temple in Bodh Gaya is a UNESCO World Heritage Site and a symbol of peace.',
          festivals: 'Bihar celebrates a myriad of festivals with great zeal. Chhath Puja, a sun-worshipping festival, is one of the most significant celebrations. The Sonepur Mela, Asia\'s largest cattle fair, is a unique blend of spirituality and commerce.',
          diverseCuisine: 'Bihari cuisine is diverse and flavorful. Litti Chokha, Sattu Paratha, and various sweets like Khaja and Thekua are popular delicacies. The culinary journey in Bihar is a delightful exploration of traditional flavors.',
          artsAndCrafts: 'The state has a rich tradition of arts and crafts, including Madhubani painting, the art of making Tikuli glass bangles, and Sikki grass crafts. These traditional crafts showcase the artistic brilliance of the people of Bihar.',
          conclusion: 'Embark on a journey through Bihar, where every corner tells a story of its rich past and vibrant present. Whether you are exploring ancient ruins, participating in colorful festivals, or savoring the diverse cuisine, Bihar offers a tapestry of experiences that captivate the soul.'
        },
      },
      {
        title: 'Chhattisgarh',
        content: 'Situated in central India, Chhattisgarh is a state known for its rich cultural heritage, diverse tribal communities, and lush green landscapes. Raipur, the capital city, serves as the administrative and industrial hub of the state.',
        imageUrl: '',
        fullContent: {
          introduction: 'Immerse Yourself in the Cultural Kaleidoscope of Chhattisgarh!',
          tribalHeritage: 'Chhattisgarh is home to a diverse range of tribal communities, each with its unique traditions and customs. The Bastar region is particularly known for its tribal art, including the traditional Dhokra metal crafts and wooden handicrafts.',
          naturalSplendor: 'The state boasts picturesque landscapes with dense forests, wildlife sanctuaries, and scenic waterfalls. Chitrakoot Falls, often called the "Niagara of India," is a breathtaking natural wonder. The Kanger Valley National Park is a haven for biodiversity.',
          folkDances: 'Chhattisgarh comes alive with vibrant folk dances that showcase the cultural vibrancy of the state. The Panthi dance, Raut Nacha, and Karma dance are among the traditional performances that captivate audiences with their colorful costumes and rhythmic movements.',
          historicalLandmarks: 'Explore the historical landmarks of Chhattisgarh, including ancient temples and forts. The Bhoramdeo Temple, inspired by the Khajuraho style, and the historic Raipur Fort are testament to the rich history of the region.',
          riceBowlOfIndia: 'Known as the "Rice Bowl of India," Chhattisgarh is an agrarian state with lush paddy fields. The traditional system of water harvesting, seen in the ancient step wells known as Ahaar, reflects the sustainable agricultural practices of the region.',
          conclusion: 'Immerse yourself in the kaleidoscope of culture, nature, and history that is Chhattisgarh. Whether youre exploring tribal heritage, witnessing the beauty of waterfalls, or enjoying traditional performances, Chhattisgarh offers a unique and enriching experience.'
        },
      },
      {
        title: 'Goa',
        content: 'Nestled on the southwestern coast of India, Goa is a small state with a big personality. Known for its pristine beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular destination for travelers seeking a mix of relaxation and excitement.',
        imageUrl: '', // Replace with an actual image URL for Goa
        fullContent: {
          introduction: 'Experience the Charms of Goa!',
          history: 'Goas history is marked by its colonial past, with influences from the Portuguese who ruled the region for centuries. This is evident in the architecture of churches such as the Basilica of Bom Jesus and the Se Cathedral. The state also played a significant role in the spice trade.',
          culture: 'The cultural landscape of Goa is a fusion of Indian and Portuguese traditions. The state is known for its Catholic festivals, such as Carnival and Christmas, celebrated with grand parades and feasts. Goas cuisine, with dishes like fish curry rice and Bebinca, reflects this cultural blend.',
          beaches: 'Goa boasts some of the most beautiful beaches in the world. From the lively shores of Baga and Calangute to the serene beaches of Palolem and Anjuna, each offers a unique experience. Water sports, beach parties, and shacks serving fresh seafood are integral to the Goan beach culture.',
          nightlife: 'The nightlife in Goa is legendary, drawing party enthusiasts from around the globe. Beach clubs, shacks, and nightclubs come alive after sunset. Whether youre dancing under the stars at a beach party or enjoying live music in a cozy jazz bar, Goa offers a diverse nightlife scene.',
          adventure: 'For adventure seekers, Goa offers opportunities for water activities like parasailing, jet-skiing, and scuba diving. The Dudhsagar Waterfalls and the spice plantations in the hinterlands provide a contrast to the beach life, adding adventure to your Goan experience.',
          conclusion: 'Whether youre lounging on the golden sands, exploring historic churches, dancing the night away, or indulging in flavorsome cuisine, Goa promises an unforgettable journey. Discover the myriad charms of this coastal paradise.'
        },
      },
      {
        title: 'Gujarat',
        content: 'Located in western India, Gujarat is a state with a rich historical legacy, vibrant culture, and diverse landscapes. The state is known for its industrial development, archaeological sites, and the birthplace of Mahatma Gandhi.',
        imageUrl: 'gujarat.jpg', // Replace with an actual image URL for Gujarat
        fullContent: {
          introduction: 'Discover the Allure of Gujarat!',
          history: 'Gujarat has a deep historical significance, with evidence of ancient civilizations dating back to the Harappan period. The state played a crucial role in the Indian independence movement, being the birthplace of Mahatma Gandhi. Historic sites like the Sabarmati Ashram and Champaner-Pavagadh Archaeological Park showcase this rich history.',
          culture: 'The cultural tapestry of Gujarat is colorful and diverse. The state is known for its folk dances like Garba and traditional music forms. Festivals like Navratri, celebrated with dance and music, attract people from all over the world. The traditional attire, handicrafts, and exquisite Bandhani textiles are integral to Gujarat\'s cultural identity.',
          landmarks: 'Gujarat is home to architectural marvels such as the Rani ki Vav in Patan, a UNESCO World Heritage Site, and the Somnath Temple, one of the twelve Jyotirlingas. The White Desert of Kutch, Gir National Park, and the Statue of Unity are among the must-visit landmarks showcasing the state\'s diversity.',
          industrialDevelopment: 'In addition to its cultural heritage, Gujarat is a hub for industrial development. The state is known for its vibrant industries, including petrochemicals, textiles, and manufacturing. Cities like Ahmedabad and Surat are key contributors to Gujarat\'s economic growth.',
          cuisine: 'Gujarati cuisine is renowned for its vegetarian delights. Dishes like Dhokla, Khandvi, and Undhiyu are popular not only in the state but across the country. The variety of sweets, including Jalebi and Fafda, add a sweet touch to the gastronomic experience.',
          conclusion: 'Embark on a journey through Gujarat, where history, culture, and progress intertwine. Whether you\'re exploring ancient ruins, participating in vibrant festivals, or witnessing the state\'s industrial prowess, Gujarat offers a tapestry of experiences for every traveler.'
        },
      },
      {
        title: 'Haryana',
        content: 'Situated in northern India, Haryana is a state known for its historical significance, agricultural prowess, and rapid urban development. The state surrounds the national capital, Delhi, on three sides and is a blend of traditional charm and modern progress.',
        imageUrl: 'haryana.jpg', // Replace with an actual image URL for Haryana
        fullContent: {
          introduction: 'Explore the Charms of Haryana!',
          history: 'Haryana boasts a rich historical legacy, with Kurukshetra being the battlefield of the Mahabharata. The state has witnessed the rule of various dynasties, including the Mauryas and the Mughals. The historic sites of Panipat and Thanesar reflect the ancient history of the region.',
          agriculture: 'Known as the "Granary of India," Haryana is a major contributor to the country\'s agricultural output. The fertile plains support the cultivation of crops such as wheat and rice. The states agricultural prosperity is evident in its traditional practices and modern agro-industries.',
          culture: 'The cultural heritage of Haryana is vibrant and diverse. The traditional dance forms of Haryana, including the famous Bhangra and Ghoomar, reflect the joyous spirit of its people. Festivals like Baisakhi and Teej are celebrated with enthusiasm, showcasing the cultural richness.',
          landmarks: 'Haryana is home to several landmarks, including the Badkhal Lake, Pinjore Gardens, and the Sultanpur National Park. The states proximity to Delhi makes it a convenient destination for those seeking a blend of historical sites and natural beauty.',
          urbanDevelopment: 'In recent years, Haryana has experienced significant urban development. Cities like Gurgaon and Faridabad have become major hubs for corporate offices, industries, and educational institutions. The states strategic location has contributed to its economic growth.',
          conclusion: 'Embark on a journey through Haryana, where history meets modernity. Whether you\'re exploring ancient battlegrounds, witnessing vibrant cultural performances, or experiencing the urban dynamism, Haryana offers a diverse range of experiences for every traveler.'
        },
      },
      {
        title: 'Himachal Pradesh',
        content: 'Nestled in the lap of the Himalayas, Himachal Pradesh is a state known for its breathtaking landscapes, picturesque hill stations, and vibrant culture. The capital of Himachal Pradesh is Shimla, a popular tourist destination.',
        imageUrl: 'himachal.jpg', // Replace with an actual image URL for Himachal Pradesh
        fullContent: {
          introduction: 'Discover the Serenity of Himachal Pradesh!',
          geography: 'Himachal Pradesh is blessed with diverse geography, including snow-capped mountains, lush valleys, and meandering rivers. The state is a haven for nature lovers, with popular destinations like Manali, Dharamshala, and Kullu offering stunning views.',
          adventure: 'For adventure enthusiasts, Himachal Pradesh provides ample opportunities for trekking, paragliding, and skiing. The Rohtang Pass, Solang Valley, and Beas Kund are among the sought-after destinations for those seeking adrenaline-pumping activities.',
          culture: 'The cultural tapestry of Himachal Pradesh is enriched with traditional dance forms such as Nati and folk music. The state celebrates various festivals, including Dussehra and Diwali, with fervor. The handicrafts, including Kullu shawls and wooden artifacts, showcase the artistic skills of the local communities.',
          landmarks: 'Himachal Pradesh is dotted with landmarks that reflect its spiritual and historical significance. The Jakhu Temple in Shimla, the Hidimba Devi Temple in Manali, and the Tibetan monasteries in Dharamshala are examples of the states rich cultural heritage.',
          hillStations: 'The hill stations of Himachal Pradesh provide a perfect escape from the hustle and bustle of city life. Whether it\'s the colonial charm of Shimla, the adventure-centric Manali, or the tranquil landscapes of Dalhousie, each hill station offers a unique experience.',
          conclusion: 'Immerse yourself in the tranquility and beauty of Himachal Pradesh. Whether you seek adventure in the mountains, wish to explore the rich cultural heritage, or simply want to relax in the lap of nature, Himachal Pradesh welcomes you with open arms.'
        },
      },
      {
        title: 'Jharkhand',
        content: 'Located in eastern India, Jharkhand is a state known for its rich mineral resources, dense forests, and vibrant tribal culture. The capital city of Jharkhand is Ranchi, surrounded by picturesque landscapes.',
        imageUrl: 'jharkhand.jpg', // Replace with an actual image URL for Jharkhand
        fullContent: {
          introduction: 'Explore the Rich Heritage of Jharkhand!',
          geography: 'Jharkhands geography is characterized by hills, plateaus, and rivers. The state is endowed with abundant natural resources, and its forests are home to diverse flora and fauna. The Damodar River, often called the "Sorrow of Bengal," flows through the region.',
          tribalCulture: 'Jharkhand is known for its vibrant tribal culture, with various indigenous communities contributing to the states cultural diversity. The tribes, such as the Santhal and Munda, have their unique traditions, festivals, and dance forms that add to the cultural richness of the state.',
          mineralsAndIndustries: 'The states rich mineral resources have led to the development of mining and industrial activities. Jharkhand is a significant contributor to Indias mineral production. Cities like Jamshedpur are industrial hubs, known for steel manufacturing.',
          naturalWonders: 'Jharkhand is blessed with natural wonders, including the Hundru Falls and Jonha Falls. The Betla National Park, with its diverse wildlife, attracts nature enthusiasts. The Netarhat plateau offers panoramic views of the surrounding landscape.',
          religiousHeritage: 'The state has a mix of religious heritage, with sites like the Jagannath Temple in Ranchi and the Deori Temple in Netarhat. The annual Chhath Puja is celebrated with enthusiasm, reflecting the religious fervor of the people.',
          conclusion: 'Embark on a journey through the diverse landscapes and cultural tapestry of Jharkhand. Whether youre exploring tribal traditions, witnessing the natural beauty, or experiencing the industrial vibrancy, Jharkhand promises a unique and enriching experience.'
        },
      },
      
      
      
      
      
      
    ];
  

  const totalItems = blogPosts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseFullContent = () => {
    setSelectedPost(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogPosts.slice(indexOfFirstItem, indexOfLastItem);

  const renderBlogPosts = currentItems.map((post, index) => (
    <BlogPost key={index} onClick={() => handlePostClick(post)}>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={`Blog post ${index}`} />
      <p>{post.content}</p>
    </BlogPost>
  ));

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          onClick={() => setCurrentPage(i)}
          style={i === currentPage ? { backgroundColor: '#0056b3' } : {}}
        >
          {i}
        </PaginationButton>
      );
    }
    return buttons;
  };

  return (
    <BlogContainer>
      <h1>Blog</h1>
      <SearchBar
        type="text"
        placeholder="Search for blogs..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <BlogPostContainer>{renderBlogPosts}</BlogPostContainer>

      {totalItems > itemsPerPage && (
        <PaginationContainer>{renderPaginationButtons()}</PaginationContainer>
      )}

      {selectedPost && (
        <FullContentContainer onClick={handleCloseFullContent}>
          <FullContent>
            <h2>{selectedPost.fullContent.introduction}</h2>
            <p>{selectedPost.fullContent.history}</p>
            <p>{selectedPost.fullContent.culture}</p>
            <p>{selectedPost.fullContent.landmarks}</p>
            <p>{selectedPost.fullContent.modernDevelopment}</p>
            <p>{selectedPost.fullContent.conclusion}</p>
          </FullContent>
        </FullContentContainer>
      )}
    </BlogContainer>
  );
};

export default Blog;
