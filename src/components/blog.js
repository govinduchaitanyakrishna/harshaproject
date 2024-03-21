// Blog.js

import React, { useState } from 'react';
import styled from 'styled-components';


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
        title: 'THOR',
        content: 'Thor title presented by Roxxon, meet the Roxxin Thor! In his secret identity as A.I. spokesguru Chad Hammer, the son of Odin knows Mama Gaea is a TOP PRIORITY for heroes AND for business! But when a group of insane environmental activists take saving the Earth TOO FAR, its time to show them the wisdom on both sides—as Thor! But which God of Evil is prompting the kids to rebel? Could it be...LOKI, GOD OF EVIL??? Featuring an all-star cast of heroes! MINOTAUR! EXECUTIONER! ENCHANTRESS! And the THOR-TRUCK! This is the story of THE ROXXIN THOR... and its a VITAL part of the ABSOLUTE ABSOLUTION MEGA-EVENT!',
        imageUrl: 'https://i.ibb.co/qyRQCHB/thor.jpg',
        
        "fullContent": {
          "introduction": "The very skies tremble in his presence. He commands the mystical hammer Mjolnir to protect Asgard and Earth. He is the son of Odin, Prince of Asgard. He is the God of Thunder. He is Thor.",
          "history": "Thor, also known as the Thunderer, is a member of the Asgardian race, a group of beings who are the principal deities of the Norse pantheon. Born to the King of the Asgardian Gods, Odin Borson, and the Earth Goddess Gaea, Thor is one of the most powerful and revered beings in the Marvel Universe. His history is filled with epic battles, heroic deeds, and struggles to maintain peace in the Nine Realms. From his early encounters with Frost Giants to his battles against cosmic threats like Thanos, Thor has proven himself as a mighty warrior and protector of the innocent.",
          "culture": "Thor's culture is deeply rooted in Asgardian mythology and tradition. As the Prince of Asgard, he is heir to the throne and carries the responsibility of upholding the honor and values of his people. The Asgardians are a warrior race, valuing strength, courage, and honor above all else. Their society is governed by a monarchy, with Odin as the All-Father and ruler of Asgard. Thor's upbringing in Asgard has shaped his worldview and sense of duty, instilling in him a strong sense of loyalty to his people and a commitment to defending the realms from all threats.",
          "powersAbilities": "As the God of Thunder, Thor possesses incredible superhuman strength, endurance, and durability. He can manipulate weather patterns, summon lightning, and control the elements. His primary weapon is the enchanted hammer Mjolnir, which grants him the ability to fly and manipulate energy. In addition to his physical prowess, Thor is a skilled warrior and strategist, proficient in various forms of combat. Over the years, he has honed his abilities through training and experience, becoming one of the most formidable warriors in the universe.",
          "alliesEnemies": "Throughout his adventures, Thor has encountered numerous allies and enemies. Among his closest allies are fellow Avengers such as Iron Man, Captain America, and the Hulk. He has also formed alliances with other heroes, gods, and cosmic entities in the defense of the universe. However, Thor's most enduring adversary is his adopted brother, Loki, the God of Mischief, whose schemes often threaten the stability of the Nine Realms. Other notable enemies include the fire demon Surtur, the frost giant Ymir, and the dark elf Malekith. Despite facing formidable foes, Thor has always stood firm in his resolve to protect the innocent and uphold justice.",
          
          "legacy": "Thor's legacy extends beyond his heroic exploits and adventures. As a symbol of strength, courage, and nobility, he inspires countless individuals across the cosmos to stand up against tyranny and defend the weak. His selfless actions and unwavering dedication to duty have earned him the respect and admiration of both mortals and immortals alike. Thor's tales have been passed down through generations, becoming legendary sagas that continue to resonate with audiences to this day. Whether in ancient myths or modern comics, Thor remains a timeless icon of heroism and virtue.",
          "modernDevelopment": "In modern times, Thor has been adapted into various media forms such as comic books, movies, and TV shows. He first appeared in Marvel Comics in 1962, created by writer Stan Lee, scripter Larry Lieber, and artist Jack Kirby. Since then, he has become one of Marvel's most iconic and beloved characters, captivating audiences with his tales of heroism and mythology. Thor has been portrayed by actors such as Chris Hemsworth in the Marvel Cinematic Universe, bringing the character to life on the big screen with his charismatic performance. With each new adaptation, Thor's legend continues to grow, captivating new generations of fans and solidifying his status as a pop culture icon.",
          "conclusion": "Thor remains a beloved and iconic character in popular culture, inspiring audiences with his tales of heroism and mythology. Whether in comic books, movies, or other forms of entertainment, the Thunder God continues to captivate audiences with his epic adventures and larger-than-life persona. As long as there are tales of valor and bravery to be told, Thor will always stand as a shining beacon of hope in the Marvel Universe."
        }
      },
      {
        "title": "HULK",
        "content": "Witness the incredible power of the Hulk as he smashes through obstacles in his path! Dr. Bruce Banner, a brilliant scientist, was caught in a gamma radiation explosion, transforming him into the monstrous Hulk whenever he loses control of his emotions. Now, the Hulk must grapple with his inner demons while battling enemies who seek to exploit his immense strength. Join the Hulk on his journey of self-discovery and redemption!",
         imageUrl:'https://i.ibb.co/SPB3d0z/hulkbh2024001-cov.jpg',
        "fullContent": {
          "introduction": "Behold the mightiest of all beings - the Hulk! Born from the gamma radiation-infused alter ego of the brilliant physicist Dr. Bruce Banner, the Hulk possesses boundless strength and invincibility. His sheer power and unstoppable rage make him a force to be reckoned with.",
          "origin": "Dr. Bruce Banner, a respected scientist, was conducting an experiment involving gamma radiation when an unexpected accident occurred. Exposed to an unprecedented amount of gamma radiation, Banner's genetic structure was forever altered, resulting in the manifestation of his monstrous alter ego - the Hulk. Now, Banner must grapple with the consequences of his transformation as he struggles to control the raging beast within him.",
          "powersAbilities": "As the Hulk, Dr. Bruce Banner possesses superhuman strength, durability, and regeneration capabilities. His strength knows no bounds, allowing him to lift and destroy objects of immense size and weight with ease. The Hulk's invulnerability makes him nearly indestructible, capable of withstanding the most devastating attacks without sustaining lasting harm. Furthermore, his accelerated healing factor enables him to rapidly recover from injuries, making him virtually unstoppable in combat.",
          "personality": "Contrary to popular belief, the Hulk is not simply a mindless monster driven by rage. Beneath his formidable exterior lies the intellect of Dr. Bruce Banner, albeit in a primal and untamed form. While the Hulk is often portrayed as a force of destruction, he possesses a sense of morality and empathy, often coming to the aid of those in need. Despite his inner turmoil and struggle for control, the Hulk remains a hero at heart, fighting against injustice and tyranny wherever it may arise.",
          "alliesEnemies": "Throughout his tumultuous existence, the Hulk has encountered a diverse array of allies and adversaries. Among his allies are fellow superheroes such as Iron Man, Thor, and Captain America, who recognize the Hulk's potential as a formidable ally in the battle against evil. However, the Hulk's most persistent adversary is his own alter ego - Dr. Bruce Banner. Struggling to contain the raging beast within him, Banner's constant internal conflict serves as a perpetual source of torment and anguish.",
          "legacy": "The Hulk's legacy is one of resilience, redemption, and defiance in the face of adversity. Despite facing constant persecution and misunderstanding due to his monstrous appearance, the Hulk continues to persevere, inspiring hope and courage in others. His struggles with identity and self-acceptance resonate with audiences around the world, making him one of the most enduring and beloved characters in popular culture.",
          "modernDevelopment": "In recent years, the Hulk has been featured prominently in various forms of media, including comic books, movies, and television shows. Actor Mark Ruffalo portrayed the character in the Marvel Cinematic Universe, bringing depth and complexity to the role. Through his nuanced performance, Ruffalo captured the inner turmoil and conflict of Dr. Bruce Banner, earning widespread acclaim from fans and critics alike. With each new adaptation, the Hulk's legacy continues to grow, solidifying his status as one of the most iconic and influential characters in the Marvel Universe.",
          "conclusion": "The Hulk remains an enduring symbol of strength, resilience, and inner turmoil. Whether he's battling formidable foes or struggling to control the raging beast within him, the Hulk continues to captivate audiences with his epic adventures and timeless struggle for redemption. As long as there are heroes in need of a champion, the Hulk will be there to answer the call, smashing through obstacles and standing tall as the strongest one there is."
        }
      },
      {
        "title": "Spider-Man",
        "content": "Spider-Man swings back into action in this thrilling new adventure! As Peter Parker juggles the responsibilities of high school, crime-fighting, and his personal life, he discovers that being a hero means more than just wearing a mask. When a new villain threatens the city, Spider-Man must confront his greatest fears and prove that with great power comes great responsibility!",
        imageUrl:'https://i.ibb.co/7GgkfP4/detail.jpg',
        "fullContent": {
          "introduction": "With his iconic red and blue suit and agile acrobatics, Spider-Man is one of the most beloved superheroes in the Marvel Universe. But behind the mask, he's Peter Parker, a brilliant but awkward teenager struggling to navigate the challenges of adolescence while also shouldering the weight of his newfound powers.",
          "origin": "Peter Parker was just an ordinary high school student until a fateful encounter with a radioactive spider granted him incredible superhuman abilities. From that moment on, he became Spider-Man, the friendly neighborhood hero of New York City. Inspired by the memory of his late Uncle Ben and driven by a sense of duty, Peter vowed to use his powers to protect the innocent and fight for justice.",
          "powersAbilities": "As Spider-Man, Peter possesses the proportionate strength, speed, and agility of a spider, allowing him to perform incredible feats of athleticism and combat prowess. He can cling to walls, shoot webs from his wrists, and possesses a 'Spider-Sense' that alerts him to danger. In addition to his physical abilities, Peter is also a genius-level intellect, skilled in science and technology, which he often employs to create his web-slinging gadgets and inventions.",
          "alliesEnemies": "Throughout his crime-fighting career, Spider-Man has forged alliances with a diverse cast of characters, including fellow superheroes like Iron Man, Captain America, and Daredevil, as well as his close friends and allies such as Mary Jane Watson, Gwen Stacy, and Aunt May. However, he has also encountered numerous adversaries, from street-level thugs to powerful supervillains like the Green Goblin, Doctor Octopus, and Venom.",
          "personalLife": "Despite his heroic endeavors, Peter's personal life is often fraught with challenges and setbacks. Balancing his responsibilities as Spider-Man with his obligations to his loved ones and academic pursuits proves to be a constant struggle. His relationships with Mary Jane Watson, Gwen Stacy, and other romantic interests are often complicated by the dangers of his double life, leading to moments of heartache and sacrifice.",
          "legacy": "Spider-Man's legacy extends far beyond the pages of comic books, permeating popular culture in a multitude of ways. From blockbuster movies and animated TV shows to video games and merchandise, Spider-Man has become a ubiquitous symbol of heroism and resilience, inspiring generations of fans around the world. His mantra of 'With great power comes great responsibility' has transcended fiction to become a timeless lesson in morality and ethics.",
          "modernAdaptations": "In recent years, Spider-Man has been reimagined and adapted for a new generation of audiences through various media platforms. The character has starred in several successful film franchises, including the Marvel Cinematic Universe and animated features like 'Spider-Man: Into the Spider-Verse'. Additionally, he has appeared in numerous video games, with titles like 'Spider-Man PS4' showcasing his thrilling web-slinging adventures in an open-world New York City.",
          "conclusion": "Spider-Man remains a beloved and enduring figure in popular culture, captivating audiences with his relatable struggles, dynamic action sequences, and timeless themes of heroism and self-sacrifice. Whether swinging through the skyscrapers of Manhattan or facing off against his greatest foes, Spider-Man continues to inspire fans of all ages with his unyielding spirit and unwavering commitment to doing what's right."
        }
      }
      ,
      {
        "title": "Iceman",
        "content": "Join Iceman as he embarks on a chilling adventure to save the world from a frosty fate! Bobby Drake, also known as Iceman, must confront his past and embrace his icy powers like never before. With the fate of the world hanging in the balance, Iceman must harness the full extent of his abilities to stop a new threat that threatens to plunge the world into eternal winter!",
        imageUrl:'https://i.ibb.co/m6G2S9K/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "Iceman, also known as Bobby Drake, is one of the original members of the X-Men and one of the most powerful mutants in the Marvel Universe. With the ability to manipulate ice and cold temperatures at will, Iceman is a formidable force to be reckoned with. But beyond his icy exterior lies a complex and multidimensional character struggling to find his place in a world that fears and hates mutants.",
          "origin": "Bobby Drake discovered his mutant abilities at a young age when he inadvertently froze a school bully during a confrontation. Initially frightened by his powers, Bobby struggled to control them until he was recruited by Professor Charles Xavier to join the X-Men, a team of mutant superheroes dedicated to promoting peace and understanding between mutants and humans.",
          "powersAbilities": "As Iceman, Bobby possesses the ability to generate and manipulate ice and cold temperatures at will. He can create ice constructs, project freezing blasts, and even transform his entire body into ice, granting him enhanced durability and strength. Over the years, Bobby has honed his abilities through training and experience, becoming one of the most skilled ice manipulators in the Marvel Universe.",
          "evolution": "Throughout his long history as a superhero, Iceman has undergone significant character development and evolution. From his early days as a lighthearted prankster to his later struggles with his identity and sexuality, Bobby has grappled with a myriad of personal and existential challenges. In recent years, Iceman has come out as gay, marking a significant milestone for LGBTQ+ representation in mainstream comics.",
          "alliesEnemies": "As a member of the X-Men, Iceman has forged close bonds with his teammates and allies, including Professor X, Cyclops, Jean Grey, Storm, and Wolverine. Together, they have faced numerous threats to mutantkind, from the sinister schemes of Magneto to the machinations of the Hellfire Club. However, Iceman has also encountered his fair share of adversaries, including powerful mutants like Pyro, Avalanche, and Mister Sinister.",
          "personalLife": "Outside of his life as a superhero, Bobby Drake is a complex and multidimensional individual with his own hopes, dreams, and struggles. He has grappled with issues of identity, belonging, and self-acceptance, particularly in relation to his mutant powers and his sexuality. Despite facing prejudice and discrimination, Bobby remains resilient and determined to live his life on his own terms.",
          "legacy": "Iceman's legacy as a superhero and an LGBTQ+ icon is a testament to his enduring popularity and cultural significance. As one of the first openly gay characters in mainstream comics, Bobby has inspired countless readers to embrace their own identities and be true to themselves. His journey of self-discovery and acceptance continues to resonate with audiences of all ages, making him a beloved and iconic figure in the Marvel Universe.",
          "modernAdaptations": "In recent years, Iceman has been featured prominently in various Marvel comics, including solo series and team-up adventures with other mutants. He has also appeared in animated TV shows, video games, and other forms of media, further cementing his status as a fan-favorite character. With each new adaptation, Iceman's legacy grows stronger, inspiring new generations of readers to embrace their uniqueness and stand up for what they believe in.",
          "conclusion": "Iceman remains a beloved and iconic character in the Marvel Universe, captivating audiences with his cool demeanor, icy powers, and heartfelt stories of courage and resilience. Whether battling supervillains or confronting his own inner demons, Bobby Drake continues to inspire readers with his unwavering determination and unwavering commitment to doing what's right."
        }
      }
      ,
      {
        "title": "X-23",
        "content": "Witness the rise of X-23 as she blazes a trail of vengeance and redemption! Born from the same genetic material as Wolverine, X-23 is a fierce and deadly warrior with a tragic past. But as she confronts the demons of her upbringing, X-23 discovers that she is more than just a weapon – she is a hero in her own right. Follow X-23 on her journey of self-discovery as she carves out her own destiny in a world that fears and hates mutants!",
        imageUrl:'https://i.ibb.co/J7pbmpT/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "X-23, also known as Laura Kinney, is a clone of Wolverine created by the shadowy organization known as the Weapon X program. Trained from birth to be the ultimate killing machine, X-23 possesses all of Wolverine's mutant abilities, including enhanced strength, speed, agility, and a regenerative healing factor. But beneath her deadly exterior lies a complex and deeply human character struggling to find her place in the world.",
          "origin": "Laura Kinney was created using Wolverine's genetic material by the scientists of the Weapon X program as part of their efforts to produce the perfect assassin. Raised in captivity and subjected to brutal training and conditioning, Laura endured unimaginable suffering and trauma at the hands of her creators. But despite their efforts to strip her of her humanity, Laura retained a spark of defiance and resilience that would ultimately lead her to break free from her captors and forge her own path.",
          "powersAbilities": "As X-23, Laura possesses all of Wolverine's mutant abilities, including retractable bone claws coated in an indestructible adamantium compound, enhanced senses, and a powerful healing factor that allows her to recover from virtually any injury. In addition to her physical prowess, Laura is a highly skilled martial artist and strategist, proficient in a wide range of combat techniques and tactics.",
          "evolution": "Over the years, X-23 has undergone significant character development and evolution, transitioning from a reluctant weapon of destruction to a heroic defender of the innocent. Through her experiences with the X-Men and other allies, Laura has learned to embrace her humanity and channel her rage and pain into a force for good. She has also formed close bonds with other mutants, including Wolverine, who served as a mentor and father figure to her.",
          "alliesEnemies": "As a member of the X-Men and the wider mutant community, X-23 has encountered a diverse array of allies and enemies. Among her closest allies are fellow mutants like Jubilee, Gambit, and Psylocke, as well as members of the X-Men such as Storm, Cyclops, and Jean Grey. However, she has also faced formidable adversaries, including the sinister organization known as the Facility, which created her, as well as other mutants and supervillains seeking to exploit her abilities for their own nefarious purposes.",
          "personalLife": "Despite her tumultuous upbringing and traumatic past, Laura Kinney is a deeply compassionate and empathetic individual who cares deeply about protecting the innocent and standing up for those who cannot defend themselves. She has struggled to come to terms with her identity as both a weapon and a person, but through her interactions with others and her own introspection, Laura has begun to embrace her humanity and forge her own path in the world.",
          "legacy": "X-23's legacy as a superhero and a symbol of resilience and empowerment is a testament to her enduring popularity and cultural significance. As one of the first major female characters to take on the mantle of Wolverine, Laura Kinney has inspired countless readers to overcome adversity and embrace their own strength and agency. Her journey of self-discovery and redemption continues to resonate with audiences of all ages, making her a beloved and iconic figure in the Marvel Universe.",
          "modernAdaptations": "In recent years, X-23 has been featured prominently in various Marvel comics, including solo series and team-up adventures with other mutants. She has also appeared in animated TV shows, video games, and other forms of media, further cementing her status as a fan-favorite character. With each new adaptation, X-23's legacy grows stronger, inspiring new generations of readers to stand up for what they believe in and fight for a better world.",
          "conclusion": "X-23 remains a beloved and iconic character in the Marvel Universe, captivating audiences with her fierce determination, razor-sharp claws, and heartfelt stories of redemption and self-discovery. Whether battling supervillains or grappling with her own inner demons, Laura Kinney continues to inspire readers with her unwavering commitment to doing what's right, no matter the cost."
        }
      }
      ,
      {
        "title": "Captain America",
        "content": "Join Captain America as he leads the charge against tyranny and injustice! Steve Rogers, a humble soldier transformed into the ultimate super-soldier, embodies the ideals of courage, honor, and sacrifice. With his iconic shield in hand, Captain America stands as a symbol of hope and freedom, inspiring all who stand against oppression. Follow his epic adventures as he battles villains, defends the innocent, and upholds the values of liberty and justice for all!",
        imageUrl:'https://i.ibb.co/K5CNGn0/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "Captain America, also known as Steve Rogers, is one of the most iconic superheroes in the Marvel Universe. Born during the height of World War II, Steve Rogers was a frail and sickly young man who longed to serve his country in the fight against tyranny. When given the opportunity to participate in the top-secret Super Soldier program, Steve willingly volunteered, undergoing a revolutionary procedure that transformed him into the pinnacle of human physical perfection.",
          "origin": "As Captain America, Steve Rogers fought alongside Allied forces during World War II, battling the forces of Hydra and the Red Skull in defense of freedom and democracy. Frozen in ice for decades, Steve was later revived in the modern era, where he continues to serve as a symbol of hope and inspiration for a new generation of heroes.",
          "powersAbilities": "As a result of the Super Soldier serum, Captain America possesses superhuman strength, speed, agility, and durability, surpassing the peak physical limits of ordinary humans. He is a master martial artist and tactician, skilled in a variety of combat techniques and strategies. In addition to his physical prowess, Captain America wields his iconic Vibranium shield, a virtually indestructible weapon that he uses both defensively and offensively.",
          "legacy": "Captain America's legacy extends far beyond his superhuman abilities and heroic exploits. As a symbol of courage, integrity, and patriotism, he inspires countless individuals to stand up for what is right and fight against injustice. Whether leading the Avengers into battle or standing alone against overwhelming odds, Captain America embodies the ideals of heroism and selflessness, earning the respect and admiration of allies and adversaries alike.",
          "alliesEnemies": "Throughout his illustrious career, Captain America has forged alliances with a diverse array of allies, including fellow Avengers like Iron Man, Thor, and Black Widow, as well as other heroes such as Spider-Man, the Falcon, and the Winter Soldier. He has also faced off against numerous adversaries, including Hydra, the Red Skull, Baron Zemo, and the forces of Thanos. But no matter the challenge, Captain America remains steadfast in his commitment to defending the innocent and upholding the values of liberty and justice for all.",
          "modernAdaptations": "In addition to his appearances in comic books, Captain America has been featured in numerous adaptations across various forms of media, including blockbuster movies, animated TV shows, and video games. Actor Chris Evans brought the character to life in the Marvel Cinematic Universe, portraying Captain America as a beacon of hope and inspiration in a world fraught with conflict and uncertainty. With each new adaptation, Captain America's legacy grows stronger, solidifying his status as one of the greatest superheroes of all time.",
          "conclusion": "Captain America remains a beloved and iconic character in popular culture, captivating audiences with his unwavering commitment to justice, his indomitable spirit, and his unwavering determination to do what's right, no matter the cost. Whether facing off against supervillains, leading his fellow Avengers into battle, or inspiring ordinary citizens to stand up against tyranny, Captain America continues to embody the ideals of heroism and selflessness, inspiring generations of fans around the world."
        }
      }
      ,
      {
        "title": "Ka-Zar",
        "content": "Journey to the Savage Land with Ka-Zar, the Lord of the Hidden Jungle! Follow Ka-Zar as he navigates the untamed wilderness, confronting ferocious beasts and ancient threats at every turn. But when a new danger threatens to destroy the delicate balance of the Savage Land, Ka-Zar must rise to the challenge and protect his home at all costs!",
        imageUrl:'https://i.ibb.co/FHY71Dj/portrait-uncanny.jpg"',
        "fullContent": {
          "introduction": "Ka-Zar, also known as Kevin Plunder, is the Lord of the Savage Land, a hidden jungle paradise located in Antarctica. Raised by the native tribes of the Savage Land after a plane crash stranded him there as a child, Ka-Zar has become one of the most skilled and formidable warriors in the Marvel Universe. With his trusty companion, Zabu the Sabretooth Tiger, by his side, Ka-Zar defends the Savage Land from threats both natural and supernatural.",
          "origin": "Kevin Plunder's life changed forever when his father, Lord Robert Plunder, discovered the Savage Land during an expedition to Antarctica. Tragically, Lord Plunder was killed by the villainous Garokk the Petrified Man, leaving Kevin and his mother to fend for themselves in the harsh wilderness. Raised by the native tribes of the Savage Land, Kevin adopted the name Ka-Zar, which means 'Son of the Tiger' in their language, and embraced his role as their protector and champion.",
          "powersAbilities": "Ka-Zar possesses peak human strength, speed, agility, and endurance, honed through years of survival in the Savage Land. He is a master of hand-to-hand combat and skilled in the use of various weapons, including spears, knives, and bows. Ka-Zar also shares a telepathic bond with Zabu, allowing them to communicate with each other and fight as a seamless team. In addition to his physical abilities, Ka-Zar has a deep knowledge of the Savage Land's flora and fauna, making him a formidable hunter and tracker.",
          "alliesEnemies": "As the Lord of the Savage Land, Ka-Zar has encountered numerous allies and enemies throughout his adventures. Among his closest allies are his wife, Shanna the She-Devil, and his brother, Parnival Plunder, also known as the villainous Plunderer. Ka-Zar has also formed alliances with other heroes such as Spider-Man, the X-Men, and the Avengers, who have sought his aid in defending the Savage Land from various threats. However, he has also faced formidable adversaries, including the evil sorcerer Sauron, the barbarian conqueror Kraven the Hunter, and the villainous organization known as AIM.",
          "homeSavageLand": "The Savage Land is a hidden prehistoric jungle located in Antarctica, untouched by modern civilization and home to a diverse array of flora and fauna. Teeming with dinosaurs, primitive tribes, and ancient ruins, the Savage Land is a land of adventure and mystery, where danger lurks around every corner. Despite its harsh and unforgiving environment, the Savage Land is also a place of beauty and wonder, with lush jungles, towering mountains, and crystal-clear lakes.",
          "legacy": "Ka-Zar's legacy as the Lord of the Savage Land is a testament to his enduring popularity and cultural significance. With his rugged charm, noble spirit, and unwavering commitment to protecting his home, Ka-Zar has captivated readers for decades, inspiring countless adventures and stories set in the untamed wilderness of the Savage Land. His bond with Zabu, his fierce loyalty to his friends and allies, and his never-ending quest for justice make him a beloved and iconic figure in the Marvel Universe.",
          "modernAdaptations": "In recent years, Ka-Zar has been featured prominently in various Marvel comics, including solo series and team-up adventures with other heroes. He has also appeared in animated TV shows, video games, and other forms of media, further cementing his status as a fan-favorite character. With each new adaptation, Ka-Zar's legacy grows stronger, inspiring new generations of readers to explore the wild and untamed world of the Savage Land.",
          "conclusion": "Ka-Zar remains a beloved and iconic character in the Marvel Universe, captivating audiences with his thrilling adventures, noble deeds, and unwavering commitment to protecting the Savage Land. Whether battling dinosaurs, exploring ancient ruins, or confronting supernatural threats, Ka-Zar continues to inspire readers with his indomitable spirit and unyielding courage. As long as there are untamed jungles to explore and ancient mysteries to uncover, Ka-Zar will always stand as the Lord of the Hidden Jungle."
        }
      }
      ,
      {
        "title": "Iron Man",
        "content": "Iron Man is a cornerstone of the Marvel Universe, a character whose evolution mirrors the technological advancements and societal changes of the modern world. From his humble beginnings as a billionaire industrialist to his transformation into a high-flying superhero, Iron Man has captivated audiences with his charisma, ingenuity, and unwavering commitment to justice.",
        imageUrl:'https://i.ibb.co/w6V5tMV/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "At the heart of the Iron Man mythos is Tony Stark, a brilliant inventor, and entrepreneur whose genius is matched only by his ego. As the CEO of Stark Industries, Tony is a visionary leader, pushing the boundaries of technology and innovation to new heights. However, his life takes a dramatic turn when he is captured by terrorists while demonstrating a new weapon in the Middle East.",
          "origin": "Forced to build a weapon of mass destruction for his captors, Tony instead constructs a suit of powered armor that allows him to escape captivity. This experience serves as a wake-up call for Tony, prompting him to reassess his priorities and use his genius for the greater good. Returning home, Tony refines the Iron Man armor and embarks on a new mission to protect the world from threats both domestic and extraterrestrial.",
          "earlyAdventures": "In his early adventures as Iron Man, Tony faces off against a rogues' gallery of villains, from technological terrorists like the Mandarin to corporate rivals like Obadiah Stane. Along the way, he forms alliances with other superheroes, including Captain America, Thor, and the Hulk, becoming a founding member of the Avengers.",
          "personalStruggles": "But beneath the armor, Tony grapples with personal demons and inner turmoil. His struggle with alcoholism, in particular, becomes a defining aspect of his character, highlighting the fragility of the human psyche even in the face of seemingly insurmountable odds.",
          "evolution": "As the Marvel Universe evolves, so too does Iron Man. Tony's journey from self-absorbed playboy to selfless hero is marked by moments of triumph and tragedy, as he confronts the consequences of his actions and strives to atone for his past mistakes.",
          "legacy": "Iron Man's legacy extends far beyond the pages of comic books, permeating popular culture in a multitude of ways. From blockbuster movies and animated TV shows to video games and merchandise, Iron Man has become a ubiquitous symbol of heroism and innovation, inspiring generations of fans around the world.",
          "modernAdaptations": "In recent years, Iron Man has been reimagined and adapted for a new generation of audiences through various media platforms. The character's portrayal by actor Robert Downey Jr. in the Marvel Cinematic Universe has been particularly influential, earning critical acclaim and box office success with each new installment.",
          "impact": "But perhaps Iron Man's greatest legacy lies in his impact on real-world technology and innovation. Tony Stark's fictional inventions, from the Iron Man suit to the arc reactor, have inspired real-life engineers and scientists to push the boundaries of what's possible, leading to breakthroughs in fields such as robotics, nanotechnology, and renewable energy.",
          "conclusion": "Iron Man remains a beloved and iconic character in popular culture, a testament to the enduring power of imagination and storytelling. Whether battling supervillains or grappling with personal demons, Tony Stark continues to inspire audiences with his indomitable spirit and unwavering commitment to justice. As long as there are heroes willing to fight for what's right, Iron Man will always stand as a shining beacon of hope in the Marvel Universe."
        }
      }
      ,
      {
        "title": "Daredevil",
        "content": "Dive into the gritty streets of Hell's Kitchen with Daredevil, the Man Without Fear! Follow Matt Murdock as he navigates the complex web of crime and corruption, using his heightened senses and incredible martial arts skills to dispense justice in a city overrun by darkness. But as Daredevil, Matt must confront not only the criminals who prey on the innocent but also the demons of his own past that threaten to consume him.",
        imageUrl:'https://i.ibb.co/8gzLMhq/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "Daredevil, also known as Matt Murdock, is a vigilante superhero who prowls the streets of Hell's Kitchen, New York City, dispensing justice with his heightened senses and acrobatic combat skills. Blinded by a radioactive substance as a child, Matt's remaining senses were heightened to superhuman levels, granting him a radar-like sense of his surroundings. Embracing his new abilities, Matt vowed to use them to protect his city from the criminals that lurk in its shadows.",
          "origin": "Matt Murdock's journey as Daredevil began with tragedy. As a young boy, Matt saved an elderly man from an oncoming truck, only to be struck by the truck himself, causing him to lose his sight. However, the accident heightened Matt's other senses to extraordinary levels, allowing him to perceive the world in ways most people could only imagine. Raised by his father, a boxer named Jack Murdock, Matt was instilled with a strong sense of justice and a desire to stand up for the powerless against the forces of evil.",
          "powersAbilities": "As Daredevil, Matt Murdock possesses superhuman senses, including enhanced hearing, smell, taste, and touch, which he uses to navigate the world around him. His radar sense allows him to perceive his surroundings with incredible detail, making him a formidable combatant even in total darkness. In addition to his heightened senses, Daredevil is a master martial artist, trained in various fighting styles such as boxing, judo, and ninjutsu, making him a formidable opponent in hand-to-hand combat.",
          "alliesEnemies": "Throughout his crime-fighting career, Daredevil has encountered numerous allies and enemies. Among his closest allies are Foggy Nelson, his best friend and law partner, and Karen Page, his former love interest and confidante. He has also formed alliances with other superheroes such as Spider-Man, Luke Cage, and Iron Fist, who have aided him in his battles against the criminal underworld. However, Daredevil has also made powerful enemies, including the Kingpin, a ruthless crime lord who controls much of Hell's Kitchen, and Bullseye, a deadly assassin with impeccable aim.",
          "personalLife": "Despite his life as Daredevil, Matt Murdock is also a successful attorney, using his legal skills to fight for justice in the courtroom. By day, he runs a law firm with his friends Foggy Nelson and Karen Page, representing the downtrodden and marginalized members of society. However, Matt's dual identity as both a lawyer and a vigilante often puts a strain on his personal life, leading to conflicts with his loved ones and struggles with his own sense of morality.",
          "legacy": "Daredevil's legacy as a superhero and symbol of justice is a testament to his enduring popularity and cultural significance. With his complex character, rich mythology, and gritty storytelling, Daredevil has captivated audiences for decades, inspiring countless adaptations in various media. His battles with the forces of evil, both internal and external, serve as a timeless reminder of the human capacity for redemption and the enduring power of hope in the face of adversity.",
          "modernAdaptations": "In recent years, Daredevil has been featured prominently in various Marvel comics, including solo series, team-up adventures, and crossover events. He has also appeared in live-action adaptations, including a critically acclaimed Netflix series that brought the character to life in stunning detail. Portrayed by actor Charlie Cox, Daredevil's Netflix series explored the darker, more mature aspects of the character's mythology, earning praise for its compelling storytelling and intense action sequences."
        }
      }
      ,{
        "title": "Hawkeye",
        "content": "Join Clint Barton, the master marksman known as Hawkeye, as he takes aim at injustice and fights alongside Earth's mightiest heroes! Follow Hawkeye's journey from his humble beginnings as a circus performer to his rise as one of the world's greatest archers and a key member of the Avengers. But behind the bow and arrow lies a man with a troubled past and a fierce determination to make a difference in the world.",
        imageUrl:'https://i.ibb.co/crpNN4g/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "Clint Barton, also known as Hawkeye, is a skilled marksman and master archer who fights alongside the Avengers to protect the world from threats both terrestrial and cosmic. Trained from a young age in the art of archery, Clint honed his skills as a circus performer before becoming a freelance agent and eventually joining the ranks of Earth's mightiest heroes. With his incredible accuracy and unwavering determination, Hawkeye proves that you don't need superpowers to be a hero.",
          "origin": "Clint Barton's journey as Hawkeye began in tragedy when his parents died in a car accident, leaving him orphaned at a young age. Raised in a children's home, Clint ran away to join the Carson Carnival of Traveling Wonders, where he learned the art of archery and became a skilled marksman under the tutelage of the Swordsman and Trick Shot. But when he discovered the criminal activities of his mentors, Clint turned against them and vowed to use his skills for good.",
          "skillsAbilities": "As Hawkeye, Clint Barton possesses exceptional hand-eye coordination, reflexes, and agility, making him a master of marksmanship and hand-to-hand combat. His weapon of choice is the bow and arrow, which he wields with deadly accuracy and precision. In addition to his archery skills, Hawkeye is proficient in various martial arts and combat techniques, allowing him to hold his own against even the most formidable adversaries.",
          "avengersMember": "Hawkeye is a key member of the Avengers, Earth's premier superhero team dedicated to protecting the world from threats too big for any one hero to handle. Alongside his fellow Avengers such as Iron Man, Captain America, Thor, and Black Widow, Hawkeye has faced off against countless villains and saved the world from destruction on numerous occasions. Despite not having superpowers like his teammates, Hawkeye's skill, bravery, and unwavering determination make him an indispensable asset to the team.",
          "personalLife": "Outside of his life as Hawkeye, Clint Barton is a complex and multidimensional individual with his own hopes, dreams, and struggles. He has grappled with issues of identity, belonging, and redemption, particularly in relation to his troubled past and the choices he has made along the way. Despite facing numerous challenges and setbacks, Clint remains determined to make a difference in the world and protect those he cares about, both as Hawkeye and as Clint Barton.",
          "legacy": "Hawkeye's legacy as a superhero and member of the Avengers is a testament to his enduring popularity and cultural significance. With his sharp wit, unbreakable spirit, and incredible skill with a bow, Hawkeye has inspired countless readers to embrace their own strengths and stand up for what's right. His unwavering loyalty to his friends and teammates, as well as his willingness to sacrifice himself for the greater good, make him a beloved and iconic figure in the Marvel Universe.",
          "modernAdaptations": "In recent years, Hawkeye has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actor Jeremy Renner. Hawkeye's portrayal in the MCU has garnered praise for its depth and complexity, exploring the character's personal struggles and heroic deeds in equal measure.",
          "conclusion": "Hawkeye remains a beloved and iconic character in the Marvel Universe, captivating audiences with his incredible skill, unwavering determination, and relatable humanity. Whether fighting alongside the Avengers or facing his own personal demons, Clint Barton proves time and time again that you don't need superpowers to be a hero – just a bow, arrow, and a steadfast commitment to doing what's right."
        }
      },{
        "title": "Falcon",
        "content": "Soar through the skies with Sam Wilson, the high-flying Avenger known as Falcon! Follow Falcon's journey from his days as a pararescue airman to his role as one of Earth's mightiest heroes. With his trusty wingsuit and telepathically-linked falcon companion, Redwing, Falcon battles injustice and defends the innocent alongside his fellow Avengers. But beneath the mask lies a man with a deep sense of duty and a relentless determination to make the world a better place.",
        imageUrl:'https://i.ibb.co/qY9CXmQ/portrait-uncanny.jpg',
        "fullContent": {
          "introduction": "Sam Wilson, also known as Falcon, is a skilled aerialist and member of the Avengers who fights to protect the world from threats both terrestrial and cosmic. Raised in Harlem, New York, Sam served as a pararescue airman in the United States Air Force before becoming a superhero. With his incredible agility, combat skills, and telepathic connection to his falcon companion, Redwing, Falcon soars through the skies to defend the innocent and uphold justice.",
          "origin": "Sam Wilson's journey as Falcon began when he encountered the mysterious Red Skull on a remote island, where he was exposed to the Cosmic Cube and gained the ability to telepathically communicate with birds. Inspired by the encounter, Sam adopted the identity of Falcon and embarked on a career as a superhero. Equipped with a specially-designed wingsuit and trained in various forms of combat, Falcon uses his newfound abilities to fight crime and protect the innocent.",
          "abilities": "As Falcon, Sam Wilson possesses exceptional agility, reflexes, and aerial combat skills, allowing him to navigate the skies with ease and engage enemies in mid-air combat. His wingsuit, equipped with advanced propulsion systems and weaponry, grants him the ability to fly at high speeds and perform intricate aerial maneuvers. In addition, Sam shares a telepathic bond with his falcon companion, Redwing, enabling them to communicate and coordinate their actions in battle.",
          "avengersMember": "Falcon is a valued member of the Avengers, Earth's premier superhero team dedicated to protecting the world from threats too big for any one hero to handle. Alongside his fellow Avengers such as Captain America, Iron Man, and Thor, Falcon has faced off against countless villains and saved the world from destruction on numerous occasions. With his unwavering courage and determination, Falcon proves that even without superpowers, he is a force to be reckoned with.",
          "personalLife": "Outside of his life as Falcon, Sam Wilson is a compassionate and dedicated individual with a strong sense of duty and justice. He has overcome numerous challenges and setbacks in his life, including struggles with loss and identity, but has always remained committed to making a difference in the world. Whether fighting alongside the Avengers or working to improve his community in Harlem, Sam Wilson embodies the spirit of heroism and selflessness.",
          "legacy": "Falcon's legacy as a superhero and member of the Avengers is a testament to his enduring popularity and cultural significance. With his groundbreaking role as one of Marvel's first African American superheroes, Falcon has inspired countless readers to embrace their own identities and stand up for what's right. His partnership with Captain America, both as a teammate and as his successor, showcases the importance of friendship, loyalty, and the pursuit of justice.",
          "modernAdaptations": "In recent years, Falcon has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe. Portrayed by actor Anthony Mackie, Falcon's portrayal in the MCU has garnered praise for its depth and complexity, exploring the character's personal struggles and heroic deeds in equal measure.",
          "conclusion": "Falcon remains a beloved and iconic character in the Marvel Universe, captivating audiences with his incredible skill, unwavering determination, and unwavering commitment to justice. Whether soaring through the skies or battling villains on the ground, Sam Wilson proves time and time again that true heroism knows no bounds. As long as there are heroes willing to fight for what's right, Falcon will always be there, leading the charge and inspiring others to do the same."
        }
      },
      {
        "title": "Bucky Barnes",
        "content": "Discover the untold story of Bucky Barnes, the Winter Soldier, as he journeys from sidekick to assassin to hero! Follow Bucky's transformation from loyal sidekick to Captain America's most trusted ally, only to be brainwashed and turned into a deadly weapon by Hydra. But when his past catches up with him, Bucky must confront his demons and reclaim his identity as a hero in his own right.",
        imageUrl:'https://cdn.marvel.com/u/prod/marvel/i/mg/e/a0/544eaa172ecab/portrait_uncanny.jpg',
        "fullContent": {
          "introduction": "Bucky Barnes, also known as the Winter Soldier, is a complex and multifaceted character in the Marvel Universe, whose journey spans decades and involves multiple transformations. Initially introduced as the plucky sidekick to Captain America during World War II, Bucky served as Steve Rogers' steadfast ally and confidante, accompanying him on countless missions against the forces of Hydra and the Axis powers.",
          "origin": "Bucky's life took a tragic turn when he seemingly perished in an explosion during a mission alongside Captain America. However, Bucky survived and was found by the Soviet Union, who revived him and brainwashed him into becoming the Winter Soldier, a deadly assassin programmed to carry out covert missions around the world. For decades, Bucky operated as the Winter Soldier, carrying out assassinations and acts of sabotage under the control of Hydra.",
          "redemption": "Bucky's redemption arc began when he encountered his former ally, Steve Rogers, who had become Captain America in his absence. With Steve's help, Bucky began to break free from Hydra's control and reclaim his identity as Bucky Barnes. Though haunted by his past actions as the Winter Soldier, Bucky resolved to atone for his sins and use his skills for good, joining forces with the Avengers and other heroes to fight against tyranny and injustice.",
          "powersAbilities": "As the Winter Soldier, Bucky Barnes possesses enhanced strength, speed, agility, and reflexes, thanks to the serum and conditioning administered to him by the Soviet Union. He is also a master martial artist and marksman, skilled in various forms of hand-to-hand combat and proficient in the use of firearms and other weapons. Bucky's cybernetic arm, constructed by Hydra, grants him additional strength and durability, making him a formidable opponent in battle.",
          "alliesEnemies": "Throughout his journey, Bucky Barnes has encountered a diverse array of allies and enemies. Among his closest allies are Steve Rogers, also known as Captain America, and Sam Wilson, the Falcon, who have stood by his side through thick and thin. However, Bucky has also faced formidable adversaries, including his former handlers at Hydra, the Red Skull, and other villains seeking to exploit his past as the Winter Soldier for their own nefarious purposes.",
          "personalStruggles": "Bucky's struggle to reconcile his past as the Winter Soldier with his present identity as Bucky Barnes is a central theme of his character arc. Haunted by memories of his time as an assassin, Bucky grapples with guilt, trauma, and a sense of responsibility for his actions. Despite his best efforts to move forward, Bucky is often confronted with reminders of his past, forcing him to confront his demons and search for redemption.",
          "legacy": "Bucky Barnes' legacy as the Winter Soldier and as a hero is a complex and nuanced one, defined by his journey of redemption and his unwavering commitment to doing what's right. Though he may never fully escape the shadows of his past, Bucky's transformation from brainwashed assassin to trusted ally and hero serves as a powerful reminder of the human capacity for change and redemption in the face of adversity.",
          "modernAdaptations": "In recent years, Bucky Barnes has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actor Sebastian Stan. Bucky's portrayal in the MCU has garnered praise for its depth and complexity, exploring the character's journey of redemption and his evolving relationship with his allies.",
          "conclusion": "Bucky Barnes remains a compelling and multifaceted character in the Marvel Universe, captivating audiences with his complex backstory, conflicted morality, and enduring loyalty to his friends and allies. Whether fighting as the Winter Soldier or standing alongside Captain America and the Avengers as Bucky Barnes, he continues to inspire fans with his resilience, bravery, and unwavering commitment to doing what's right, no matter the cost."
        }
      },
      {
        "title": "Doctor Strange",
        "content": "Embark on a mystical journey with Doctor Stephen Strange, the Sorcerer Supreme, as he delves into the arcane arts and battles dark forces beyond imagination! Follow Doctor Strange's transformation from a brilliant but arrogant surgeon to the guardian of the mystical realms, as he harnesses the power of magic to protect the world from supernatural threats. But with great power comes great responsibility, and Doctor Strange must navigate the delicate balance between light and dark to safeguard the universe from mystical peril.",
        imageUrl:'https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/6596e224c01ec/portrait_uncanny.jpg',
        "fullContent": {
          "introduction": "Doctor Stephen Strange is a brilliant and accomplished neurosurgeon whose life is forever changed after a car accident robs him of the use of his hands. Desperate to regain his former life and career, Strange embarks on a journey of healing that leads him to the Ancient One, a powerful sorcerer who introduces him to the world of magic and mysticism. Under the Ancient One's tutelage, Strange becomes the Sorcerer Supreme, Earth's foremost defender against mystical threats.",
          "origin": "Stephen Strange's journey to becoming Doctor Strange begins with tragedy when a car accident leaves him with severe nerve damage in his hands, effectively ending his career as a surgeon. Desperate for a cure, Strange travels to the Himalayas in search of the mystical city of Kamar-Taj, where he encounters the Ancient One and learns the secrets of the mystic arts. Despite his initial skepticism, Strange embraces his new role as a sorcerer and dedicates himself to protecting the world from magical threats.",
          "powersAbilities": "As the Sorcerer Supreme, Doctor Strange possesses a vast array of mystical powers and abilities, including spellcasting, astral projection, teleportation, and reality manipulation. Using his magical artifacts such as the Eye of Agamotto and the Cloak of Levitation, Strange can tap into the forces of the multiverse to combat supernatural threats and bend reality to his will. His mastery of the mystic arts makes him one of the most powerful and formidable beings in the Marvel Universe.",
          "alliesEnemies": "Throughout his adventures, Doctor Strange has encountered numerous allies and enemies in the mystical realms. Among his closest allies are Wong, his loyal friend and fellow sorcerer, and Clea, a powerful sorceress and love interest. He has also formed alliances with other heroes such as the Avengers and the Defenders, who have aided him in battles against dark forces such as Dormammu, Baron Mordo, and the Dread Dormammu.",
          "personalStruggles": "Despite his mastery of magic, Doctor Strange is not without his own personal struggles and flaws. His arrogance and egotism often lead him into conflict with his allies and adversaries alike, and his relentless pursuit of power sometimes puts him at odds with the principles of morality and ethics. However, over time, Strange learns humility and compassion, becoming a wiser and more empathetic Sorcerer Supreme.",
          "theMultiverse": "Doctor Strange's adventures often take him beyond the confines of the Earthly realm and into the vast expanse of the multiverse, where he encounters otherworldly beings, dimensions, and realities. From the dark dimension ruled by Dormammu to the mystical realm of Agamotto, Strange explores the furthest reaches of existence in his quest to safeguard the universe from mystical threats.",
          "legacy": "Doctor Strange's legacy as the Sorcerer Supreme is a testament to his enduring popularity and cultural significance. With his iconic costume, mystical artifacts, and captivating adventures, Doctor Strange has captivated audiences for decades, inspiring countless comics, movies, TV shows, and other media adaptations. His journey from a flawed and arrogant surgeon to a wise and compassionate sorcerer serves as a timeless reminder of the transformative power of redemption and self-discovery.",
          "modernAdaptations": "In recent years, Doctor Strange has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actor Benedict Cumberbatch. Doctor Strange's portrayal in the MCU has garnered praise for its visual effects, compelling storytelling, and faithful adaptation of the character's mythology.",
          "conclusion": "Doctor Strange remains one of the most iconic and beloved characters in the Marvel Universe, captivating audiences with his mystical powers, compelling backstory, and epic adventures across the multiverse. Whether battling dark sorcerers, confronting cosmic threats, or exploring the furthest reaches of reality, Doctor Strange continues to inspire fans of all ages with his wisdom, courage, and unwavering dedication to protecting the universe from mystical peril."
        }
      },
      {
        "title": "Loki",
        "content": "Enter the realm of mischief and magic with Loki, the God of Mischief, as he schemes and plots his way through the Nine Realms! Follow Loki's journey from Asgardian prince to trickster extraordinaire, as he navigates the complexities of family, power, and destiny. But behind the facade of chaos lies a complex and conflicted soul, torn between his desire for power and his search for identity and acceptance.",
        imageUrl:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/60/64874aa4c7170/portrait_uncanny.jpg',
        "fullContent": {
          "introduction": "Loki Laufeyson, the God of Mischief, is one of the most enigmatic and complex characters in the Marvel Universe. As the adopted son of Odin, king of Asgard, Loki grew up alongside his brother Thor, the God of Thunder, in the halls of the golden city. Despite his Asgardian heritage, Loki's mischievous nature and cunning intellect set him apart from his noble family, leading him down a path of deception and betrayal.",
          "origin": "Loki's journey as the God of Mischief began when he discovered his true parentage as the son of Laufey, king of the Frost Giants. Feeling like an outsider in Asgard, Loki's jealousy and resentment towards his brother Thor and his desire for recognition and power drove him to orchestrate elaborate schemes and plots to assert his dominance and claim the throne of Asgard for himself.",
          "powersAbilities": "As an Asgardian god, Loki possesses superhuman strength, durability, and longevity, as well as proficiency in sorcery and illusion-casting. His mastery of magic allows him to shape-shift, manipulate reality, and create convincing illusions, making him a formidable adversary and trickster extraordinaire. Loki's cunning intellect and silver tongue also make him a skilled manipulator and strategist, capable of outsmarting even the most formidable opponents.",
          "alliesEnemies": "Throughout his tumultuous life, Loki has made both allies and enemies in equal measure. Among his closest allies are the Enchantress, a fellow Asgardian sorceress, and the Frost Giants, his biological kin. However, Loki's actions have also earned him the enmity of numerous heroes and gods, including his brother Thor, the Avengers, and the Allfather Odin, who have thwarted his schemes and battles against his machinations.",
          "personalStruggles": "Beneath his facade of mischief and chaos, Loki struggles with deep-seated feelings of inadequacy, insecurity, and loneliness. His constant quest for power and validation stems from a desire to prove himself worthy of love and acceptance, both from his family and from the wider universe. Despite his numerous betrayals and acts of villainy, Loki is not without moments of vulnerability and redemption, as he grapples with the complexities of his identity and destiny.",
          "redemption": "Despite his reputation as a villain, Loki's journey is marked by moments of redemption and self-discovery. Over the years, he has shown glimpses of heroism and selflessness, often motivated by his love for his family and his desire to do what's right. While his misdeeds may never be fully forgiven or forgotten, Loki's capacity for change and growth serves as a testament to the power of redemption and the complexity of the human (or Asgardian) spirit.",
          "legacy": "Loki's legacy as the God of Mischief is a complex and multifaceted one, defined by his enduring popularity and cultural significance. With his charismatic personality, intricate schemes, and captivating character arc, Loki has become one of the most iconic and beloved characters in the Marvel Universe. His story serves as a cautionary tale of the dangers of jealousy, ambition, and unchecked power, as well as a reminder of the redemptive power of love, compassion, and self-discovery.",
          "modernAdaptations": "In recent years, Loki has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actor Tom Hiddleston. Loki's portrayal in the MCU has garnered widespread acclaim for its depth, complexity, and faithful adaptation of the character's mythology, further cementing his status as one of Marvel's most iconic and beloved characters.",
          "conclusion": "Loki remains a fascinating and compelling character in the Marvel Universe, captivating audiences with his charm, wit, and complexity. Whether causing chaos in the Nine Realms or embarking on a journey of self-discovery and redemption, Loki continues to challenge our perceptions of heroism and villainy, reminding us that even the most flawed and conflicted souls are capable of change and growth."
        }
      },
      {
        "title": "Wolverine",
        "content": "Unleash the ferocity of Wolverine, the mutant with adamantium claws and an unbreakable spirit, as he prowls the shadows and battles enemies with savage intensity! Follow Wolverine's journey from his mysterious past as a government experiment to his role as a reluctant hero and member of the X-Men. But beneath the gruff exterior lies a man haunted by his past and struggling to find redemption in a world that fears and hates him.",
        imageUrl:'https://cdn.marvel.com/u/prod/marvel/i/mg/7/20/65f9a373853ed/portrait_uncanny.jpg',
        "fullContent": {
          "introduction": "Wolverine, also known as Logan, is one of the most iconic and enigmatic characters in the Marvel Universe. With his retractable adamantium claws, accelerated healing factor, and fierce combat skills, Wolverine is a formidable opponent and an unstoppable force of nature. But his true strength lies not in his physical abilities, but in his unbreakable spirit and unwavering determination to protect those he cares about, no matter the cost.",
          "origin": "Wolverine's origins are shrouded in mystery and intrigue, with much of his past remaining a closely guarded secret. Born in Canada as James Howlett, Wolverine's life took a dark turn when he discovered his mutant abilities as a child and accidentally killed his father in a fit of rage. Fleeing from his troubled past, Wolverine embarked on a journey of self-discovery that would lead him to the Weapon X program, where his skeleton was bonded with adamantium, making him virtually indestructible.",
          "powersAbilities": "As a mutant, Wolverine possesses several extraordinary abilities that make him a formidable fighter and survivor. His most notable power is his accelerated healing factor, which allows him to regenerate from virtually any injury, no matter how severe. In addition, Wolverine's skeleton is laced with adamantium, a virtually indestructible metal that covers his bones and claws, making him nearly invulnerable in combat. Combined with his keen senses, enhanced strength, and mastery of various combat techniques, Wolverine is a force to be reckoned with on the battlefield.",
          "xMenMember": "Wolverine is a longtime member of the X-Men, a team of mutant superheroes dedicated to protecting a world that fears and hates them. Despite his gruff demeanor and lone wolf mentality, Wolverine forms close bonds with his fellow X-Men and serves as a mentor and father figure to younger members of the team. With his unyielding determination and unwavering loyalty, Wolverine fights alongside the X-Men to defend mutants and humans alike from threats both human and mutant.",
          "personalStruggles": "Beneath his tough exterior, Wolverine grapples with deep-seated feelings of guilt, rage, and isolation, stemming from his traumatic past and violent nature. His struggle to control his animalistic instincts and find redemption for his past sins drives much of his character development, as he seeks to atone for his past actions and become a better man. Despite his many hardships, Wolverine remains a survivor and a fighter, unwilling to back down in the face of adversity.",
          "rogueAssassin": "Before joining the X-Men, Wolverine operated as a rogue assassin and mercenary, carrying out covert missions and assassinations around the world. His time as a lone wolf shaped him into a hardened warrior and expert tracker, capable of surviving in the harshest of environments and outsmarting even the most cunning adversaries. Though he has left his days as an assassin behind him, Wolverine's past continues to haunt him, as old enemies and debts come back to haunt him.",
          "legacy": "Wolverine's legacy as a hero and survivor is a testament to his enduring popularity and cultural significance. With his iconic adamantium claws, gruff demeanor, and tragic backstory, Wolverine has captivated audiences for decades, inspiring countless comics, movies, TV shows, and other media adaptations. His journey from a troubled loner to a beloved member of the X-Men serves as a powerful reminder of the human capacity for redemption and the importance of standing up for what's right, no matter the odds.",
          "modernAdaptations": "In recent years, Wolverine has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. He has also appeared in animated TV shows, video games, and live-action films as part of the X-Men franchise and the Marvel Cinematic Universe, portrayed by actors such as Hugh Jackman. Wolverine's portrayal in these adaptations has garnered widespread acclaim for its depth, complexity, and faithful adaptation of the character's mythology.",
          "conclusion": "Wolverine remains one of the most iconic and beloved characters in the Marvel Universe, captivating audiences with his fierce combat skills, indomitable spirit, and complex moral character. Whether battling enemies with his adamantium claws or wrestling with his inner demons, Wolverine continues to inspire readers and viewers with his unyielding determination and unwavering commitment to protecting those he cares about, no matter the cost."
        }
      },{
        "title": "Scarlet Witch",
        "content": "Enter the mystical world of Scarlet Witch, a powerful mutant with the ability to manipulate reality itself, as she grapples with her own inner demons and battles forces beyond comprehension! Follow Scarlet Witch's journey from her troubled past as a mutant outcast to her role as a key member of the Avengers and one of the most powerful beings in the Marvel Universe. But with great power comes great responsibility, and Scarlet Witch must confront her own darkness and embrace her true potential to save the world from destruction.",
        imageUrl:'https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/65f0747eb7a70/portrait_uncanny.jpg',
        "fullContent": {
          "introduction": "Scarlet Witch, also known as Wanda Maximoff, is a mutant with the ability to manipulate reality and chaos magic, making her one of the most powerful beings in the Marvel Universe. With her reality-warping powers, Scarlet Witch can alter the fabric of reality itself, reshaping the world around her to her will. But her powers come with a heavy burden, as she struggles to control her chaotic abilities and navigate the complexities of her own mind.",
          "origin": "Wanda Maximoff's journey as Scarlet Witch began when she and her twin brother Pietro were experimented on by the villainous High Evolutionary, who infused them with extraordinary powers. Raised in the gypsy community of Wundagore Mountain, Wanda and Pietro were outcasts from society, forced to fend for themselves in a world that feared and hated mutants. But despite their troubled past, Wanda's love for her brother and her unwavering determination to protect him would shape her destiny as a hero.",
          "powersAbilities": "As Scarlet Witch, Wanda Maximoff possesses a wide array of mystical powers and abilities, including reality manipulation, chaos magic, telekinesis, and energy projection. With her reality-warping powers, Scarlet Witch can alter the laws of physics, create force fields, and manipulate matter and energy on a molecular level. However, her powers are also fueled by her emotions and can be unpredictable, leading to unintended consequences and catastrophic events.",
          "avengersMember": "Scarlet Witch is a key member of the Avengers, Earth's mightiest heroes dedicated to protecting the world from threats too big for any one hero to handle. Despite initial reservations from some members of the team, Scarlet Witch proves herself to be a formidable ally and a powerful force for good, using her reality-warping powers to turn the tide of battle against even the most formidable adversaries.",
          "personalStruggles": "Beneath her stoic exterior, Scarlet Witch grapples with deep-seated feelings of guilt, grief, and insecurity, stemming from her traumatic past and the consequences of her actions. Her chaotic powers and volatile emotions often lead her into conflict with her friends and allies, as she struggles to control her abilities and overcome the darkness within her. But despite her inner demons, Scarlet Witch remains determined to use her powers for good and protect those she cares about, no matter the cost.",
          "familyLegacy": "Scarlet Witch's family history is fraught with tragedy and betrayal, as she grapples with her complicated relationships with her twin brother Pietro, her father Magneto, and her former husband Vision. Her connections to these iconic characters and her struggles to reconcile her mutant heritage with her role as a hero add depth and complexity to her character, as she navigates the tangled web of family ties and personal identity.",
          "legacy": "Scarlet Witch's legacy as one of the most powerful and complex characters in the Marvel Universe is a testament to her enduring popularity and cultural significance. With her reality-warping powers, tragic backstory, and complex moral character, Scarlet Witch has captivated audiences for decades, inspiring countless comics, movies, TV shows, and other media adaptations. Her journey from a troubled mutant outcast to a powerful Avenger and guardian of reality serves as a powerful reminder of the human capacity for redemption and the importance of embracing one's true self.",
          "modernAdaptations": "In recent years, Scarlet Witch has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. She has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actress Elizabeth Olsen. Scarlet Witch's portrayal in these adaptations has garnered widespread acclaim for its depth, complexity, and faithful adaptation of the character's mythology, further cementing her status as one of Marvel's most iconic and beloved characters.",
          "conclusion": "Scarlet Witch remains one of the most powerful and enigmatic characters in the Marvel Universe, captivating audiences with her reality-warping powers, tragic backstory, and complex moral character. Whether battling cosmic threats alongside the Avengers or grappling with her own inner demons, Scarlet Witch continues to inspire readers and viewers with her resilience, determination, and unwavering commitment to protecting reality from the forces of chaos and destruction."
        }
      },
      {
        "title": "Black Widow",
        "content": "Enter the shadowy world of Black Widow, the enigmatic super-spy and master assassin, as she navigates a dangerous web of intrigue and betrayal! Follow Black Widow's journey from her days as a deadly operative of the Red Room to her role as a key member of the Avengers and a force for good in the world. But behind the veil of secrecy lies a woman haunted by her past and determined to make amends for her former life of violence and deception.",
        imageUrl:'https://marvelheroeslibrary.com/images/covers/WOBW/WOBW-004-s.jpg',
        "fullContent": {
          "introduction": "Black Widow, also known as Natasha Romanoff, is one of the most skilled and deadly operatives in the Marvel Universe. Trained from a young age in the infamous Red Room program, Natasha honed her combat skills, espionage techniques, and mastery of disguise to become the ultimate weapon in the Cold War-era Soviet Union. But her true strength lies not in her physical abilities, but in her cunning intellect, unwavering determination, and relentless pursuit of justice.",
          "origin": "Natasha Romanoff's journey as Black Widow began in childhood when she was recruited into the Red Room program, a top-secret Soviet training facility for young assassins and spies. Under the ruthless tutelage of the Red Room's instructors, Natasha was molded into a deadly weapon, capable of infiltrating even the most secure facilities and eliminating her targets with lethal precision. But as she rose through the ranks of the Soviet intelligence agency, Natasha began to question her loyalties and the morality of her actions, ultimately defecting to the side of the Avengers and dedicating her life to fighting for justice and redemption.",
          "skillsEquipment": "As Black Widow, Natasha Romanoff possesses a wide array of skills and equipment that make her one of the most formidable fighters in the Marvel Universe. Trained in hand-to-hand combat, marksmanship, and espionage, Natasha is a master of infiltration and subterfuge, capable of blending into any environment and outsmarting even the most cunning adversaries. In addition to her combat skills, Black Widow also has access to a vast array of high-tech gadgets and weaponry, including her iconic wrist-mounted Widow's Bite electroshock devices and a variety of concealed weapons and gadgets hidden within her suit.",
          "avengersMember": "Black Widow is a key member of the Avengers, Earth's mightiest heroes assembled to protect the world from threats both terrestrial and extraterrestrial. Despite not possessing superhuman powers like many of her teammates, Black Widow more than holds her own in battle, using her exceptional combat skills, tactical acumen, and espionage expertise to outwit and outmaneuver her enemies. With her unwavering courage and unwavering determination, Black Widow is a vital asset to the Avengers and a formidable force for good in the world.",
          "personalStruggles": "Despite her status as a hero and Avenger, Black Widow grapples with her own inner demons and moral dilemmas on a daily basis. Her past as a trained killer and spy weighs heavily on her conscience, as she struggles to reconcile her former life of violence and deception with her newfound commitment to justice and redemption. Moreover, Natasha's complex relationships with her fellow Avengers and her troubled romantic history add layers of depth and complexity to her character, as she navigates the tangled web of loyalty, trust, and betrayal that defines her life.",
          "redemption": "Throughout her journey as Black Widow, Natasha Romanoff has sought redemption for her past sins and a chance to make amends for the lives she took and the people she betrayed. Despite the darkness of her past, Natasha refuses to be defined by her mistakes, instead choosing to use her skills and experience to protect the innocent and fight for justice. Whether battling alongside the Avengers or operating solo as a freelance operative, Black Widow remains committed to her mission of redemption, determined to ensure that her past never defines her future.",
          "legacy": "Black Widow's legacy as a super-spy and Avenger is a testament to her enduring popularity and cultural significance. With her complex character development, compelling backstory, and iconic portrayal by actress Scarlett Johansson in the Marvel Cinematic Universe, Black Widow has become one of the most beloved and iconic characters in the Marvel Universe. Her journey from a trained killer and spy to a hero and Avenger serves as a powerful reminder of the human capacity for redemption and the importance of fighting for what's right, no matter the cost.",
          "modernAdaptations": "In recent years, Black Widow has been featured prominently in various Marvel comics, including solo series and team-up adventures with other superheroes. She has also appeared in animated TV shows, video games, and live-action films as part of the Marvel Cinematic Universe, portrayed by actress Scarlett Johansson. Black Widow's portrayal in these adaptations has garnered widespread acclaim for its depth, complexity, and faithful adaptation of the character's mythology, further cementing her status as one of the most iconic and beloved characters in the Marvel Universe.",
          "conclusion": "Black Widow remains one of the most skilled and compelling characters in the Marvel Universe, captivating audiences with her deadly skills, complex moral character, and unwavering commitment to justice. Whether battling enemies on the streets of Moscow or facing down cosmic threats alongside the Avengers, Black Widow continues to inspire fans with her resilience, courage, and unwavering determination to make the world a safer place for all."
        }
      },
      {
        "title": "Classroom of the Elite",
        "content": "Step into the world of Koudo Ikusei Senior High School, where excellence is the norm and students are ranked based on their academic performance. Follow the students of Class D as they navigate the complex social hierarchy of the school and strive to prove their worth in a system that values merit above all else.",
        imageUrl:'https://i.ibb.co/3h9W1hk/classroom-of-the-elite.webp',
        "fullContent": {
          "introduction": "Classroom of the Elite is a Japanese light novel series written by Shōgo Kinugasa and illustrated by Shunsaku Tomose. It follows the story of Koudo Ikusei Senior High School, a prestigious institution where students are provided with top-tier education and resources. However, the school operates under a unique system where students are divided into classes based on their academic performance, and their privileges and opportunities are determined by their class rankings.",
          "plot": "The story centers around Class D, the lowest-ranked class in the school, and its students as they strive to climb the ranks and prove themselves in the competitive environment of Koudo Ikusei Senior High School. Led by Kiyotaka Ayanokouji, a seemingly indifferent and mysterious student, Class D must navigate the challenges of academic competition, social dynamics, and personal relationships as they work to improve their class standing and secure their futures.",
          "themes": [
            "Academic competition and meritocracy",
            "Social hierarchy and classism",
            "Individualism vs. conformity",
            "Friendship and trust",
            "Personal growth and self-discovery"
          ],
          "characters": [
            {
              "name": "Kiyotaka Ayanokouji",
              "description": "The protagonist, a mysterious and aloof student who enrolls in Class D."
            },
            {
              "name": "Suzune Horikita",
              "description": "A serious and studious classmate of Kiyotaka who aspires to climb the ranks of the school."
            },
            {
              "name": "Kikyou Kushida",
              "description": "An outgoing and sociable classmate who befriends Kiyotaka but harbors secrets of her own."
            }
            // Add more characters as needed
          ],
          "development": "As the story progresses, the students of Class D face various challenges and obstacles that test their intellect, resourcefulness, and resolve. From academic competitions and group projects to interpersonal conflicts and rivalries, each student must confront their own strengths and weaknesses as they strive to excel in the competitive environment of Koudo Ikusei Senior High School.",
          "mysteries": "Throughout the series, several mysteries and secrets surrounding the school and its administration are gradually revealed, adding layers of intrigue and suspense to the story. From the true nature of the school's ranking system to the motives of the enigmatic figure known as 'the director,' the students of Class D find themselves drawn into a web of conspiracy and deception that threatens to unravel the very fabric of their reality.",
          "adaptations": [
            {
              "type": "Manga",
              "description": "Classroom of the Elite has been adapted into a manga series illustrated by Yuyu Ichino and serialized in Media Factory's Monthly Comic Alive magazine."
            },
            {
              "type": "Anime",
              "description": "The series received an anime adaptation produced by Lerche, which aired in 2017."
            }
            // Add more adaptations as needed
          ],
          "conclusion": "Classroom of the Elite offers a thought-provoking exploration of academic competition, social hierarchy, and personal growth within the context of a high-stakes high school setting. With its compelling characters, intricate plot twists, and thematic depth, the series has captivated audiences and earned a dedicated following of fans."
        }
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
