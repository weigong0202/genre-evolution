import type { GenreDetails } from '../types'

export const genreDetails: Record<string, GenreDetails> = {
  'country': {
    instruments: ['Acoustic Guitar', 'Fiddle', 'Steel Guitar', 'Banjo'],
    tempoRange: '80-140 BPM',
    signatureSounds: ['Twangy guitars', 'Vocal harmonies', 'Storytelling lyrics', 'Pedal steel bends'],
    birthplace: 'Appalachia & Southern USA',
    culturalContext: 'Born from the rural working-class South, country music gave voice to farmers, laborers, and small-town Americans. It captured stories of love, loss, hard work, and faith—the everyday struggles and simple joys of people often overlooked by mainstream culture.',
    keyVenues: ['Grand Ole Opry', 'Ryman Auditorium'],
    roots: 'Folk ballads from British Isles, Appalachian string band music, early Delta Blues guitar styles',
    emergence: '1920s',
    peakYears: '1950s-1970s',
    keyMoments: [
      { year: '1925', event: 'Grand Ole Opry begins broadcasting' },
      { year: '1953', event: 'Hank Williams dies, becomes legend' },
      { year: '1968', event: 'Johnny Cash at Folsom Prison' },
    ],
    legacy: 'Nashville sound, outlaw country, country-rock, and modern country-pop',
    definitiveAlbums: [
      { title: 'At Folsom Prison', artist: 'Johnny Cash', year: '1968', albumArt: 'https://i.scdn.co/image/ab67616d00001e02b7e5f0fd9df7a811984a96d6' },
      { title: 'Coat of Many Colors', artist: 'Dolly Parton', year: '1971', albumArt: 'https://i.scdn.co/image/ab67616d00001e027fad1327fda63bea0e059072' },
      { title: 'Red Headed Stranger', artist: 'Willie Nelson', year: '1975' },
    ],
    signatureTracks: ['I Walk the Line', 'Jolene', 'Your Cheatin\' Heart', 'Ring of Fire'],
    startHere: '"I Walk the Line" by Johnny Cash',
    spotifyTrackId: '7hxZF4jETnE5Q75rKQnMjE', // I Walk the Line - Johnny Cash
    spotifyPlaylistId: '37i9dQZF1DWZBCPUIUs2iR', // Country's Greatest Hits
  },

  'delta-blues': {
    instruments: ['Acoustic Guitar', 'Slide Guitar', 'Harmonica', 'Voice'],
    tempoRange: '60-120 BPM',
    signatureSounds: ['Slide guitar', 'Call and response', 'Bent blue notes', 'Raw emotion'],
    birthplace: 'Mississippi Delta',
    culturalContext: 'The Delta Blues emerged from the deep suffering and resilience of African Americans in the Jim Crow South. Born in cotton fields and juke joints, it transformed pain into poetry—a raw, personal music that spoke of love, betrayal, poverty, and the eternal search for freedom.',
    keyVenues: ['Juke joints', 'Crossroads', 'Dockery Plantation'],
    roots: 'African musical traditions, field hollers, work songs, and spirituals brought by enslaved people',
    emergence: '1900s-1920s',
    peakYears: '1930s-1940s',
    keyMoments: [
      { year: '1936', event: 'Robert Johnson records his legendary sessions' },
      { year: '1943', event: 'Muddy Waters moves to Chicago' },
      { year: '1960s', event: 'British Invasion artists spread blues worldwide' },
    ],
    legacy: 'Chicago blues, Rock & Roll, R&B, and virtually all American popular music',
    definitiveAlbums: [
      { title: 'King of the Delta Blues Singers', artist: 'Robert Johnson', year: '1961', albumArt: 'https://i.scdn.co/image/ab67616d00001e0212549da864353c084cf0faa6' },
      { title: 'The Best of Muddy Waters', artist: 'Muddy Waters', year: '1958', albumArt: 'https://i.scdn.co/image/ab67616d00001e02f961bcc3e202a14cafe8ee7c' },
      { title: 'Live at the Regal', artist: 'B.B. King', year: '1965', albumArt: 'https://i.scdn.co/image/ab67616d00001e02bf373fb956297a3c0aa3a9a0' },
    ],
    signatureTracks: ['Cross Road Blues', 'Hoochie Coochie Man', 'The Thrill Is Gone', 'Smokestack Lightning'],
    startHere: '"Cross Road Blues" by Robert Johnson',
    spotifyTrackId: '1TrGdXSgiBm8W68D2K1COG', // Cross Road Blues - Robert Johnson
    spotifyPlaylistId: '37i9dQZF1DWSTHVqvNCwNq', // Delta Blues
  },

  'jazz': {
    instruments: ['Trumpet', 'Saxophone', 'Piano', 'Double Bass', 'Drums'],
    tempoRange: '60-200+ BPM',
    signatureSounds: ['Improvisation', 'Swing rhythm', 'Complex harmonies', 'Call and response'],
    birthplace: 'New Orleans, Louisiana',
    culturalContext: 'Jazz was born in the multicultural crucible of New Orleans, where African rhythms, European harmony, Caribbean influences, and American innovation collided. It became the sound of the Roaring Twenties, the voice of the Harlem Renaissance, and later a vehicle for artistic freedom and civil rights expression.',
    keyVenues: ['Cotton Club', 'Village Vanguard', 'Blue Note', 'Preservation Hall'],
    roots: 'Blues, ragtime, brass band marches, African polyrhythms, European classical harmony',
    emergence: 'Early 1900s',
    peakYears: '1940s-1960s',
    keyMoments: [
      { year: '1917', event: 'First jazz recording (Original Dixieland Jass Band)' },
      { year: '1959', event: 'Miles Davis releases Kind of Blue' },
      { year: '1964', event: 'Coltrane records A Love Supreme' },
    ],
    legacy: 'Bebop, cool jazz, free jazz, fusion, and influenced virtually all modern music',
    definitiveAlbums: [
      { title: 'Kind of Blue', artist: 'Miles Davis', year: '1959', albumArt: 'https://i.scdn.co/image/ab67616d00001e02387a29c90de3b2398c29c34f' },
      { title: 'A Love Supreme', artist: 'John Coltrane', year: '1965', albumArt: 'https://archive.org/download/mbid-38ad8234-305a-4c5d-8286-c55fb5c0392a/mbid-38ad8234-305a-4c5d-8286-c55fb5c0392a-12686384195_thumb250.jpg' },
      { title: 'Time Out', artist: 'Dave Brubeck', year: '1959' },
    ],
    signatureTracks: ['So What', 'Take Five', 'My Favorite Things', 'Round Midnight'],
    startHere: '"So What" by Miles Davis',
    spotifyTrackId: '4vLYewWIvqHfKtJDk8c8tq', // So What - Miles Davis
    spotifyPlaylistId: '37i9dQZF1DXbITWG1ZJKYt', // Jazz Classics
  },

  'gospel': {
    instruments: ['Piano', 'Organ', 'Voice', 'Choir', 'Tambourine'],
    tempoRange: '60-140 BPM',
    signatureSounds: ['Powerful vocals', 'Call and response', 'Choir harmonies', 'Spiritual intensity'],
    birthplace: 'Black churches across America',
    culturalContext: 'Gospel music was the beating heart of Black churches across America, where faith and music intertwined. It provided hope during segregation, strength during civil rights struggles, and a sense of community that transcended poverty and oppression. The church became both sanctuary and stage.',
    keyVenues: ['Black churches', 'Apollo Theater', 'Gospel tent revivals'],
    roots: 'African American spirituals, Protestant hymns, blues vocal traditions',
    emergence: '1930s',
    peakYears: '1940s-1960s',
    keyMoments: [
      { year: '1938', event: 'Sister Rosetta Tharpe records "Rock Me"' },
      { year: '1947', event: 'Mahalia Jackson signs to Apollo Records' },
      { year: '1963', event: 'Mahalia sings at March on Washington' },
    ],
    legacy: 'Soul music, R&B vocal styles, rock and roll performance energy',
    definitiveAlbums: [
      { title: 'The Gospel Sound of Mahalia Jackson', artist: 'Mahalia Jackson', year: '1954' },
      { title: 'Complete Recorded Works', artist: 'Sister Rosetta Tharpe', year: '1938-1944' },
      { title: 'Amazing Grace', artist: 'Aretha Franklin', year: '1972' },
    ],
    signatureTracks: ['Move On Up a Little Higher', 'Precious Lord', 'Oh Happy Day', 'Amazing Grace'],
    startHere: '"Oh Happy Day" by Edwin Hawkins Singers',
    spotifyTrackId: '6457txvZVSIFBff9RGpn3b', // Oh Happy Day - Edwin Hawkins Singers
    spotifyPlaylistId: '37i9dQZF1DX7OIddoQVdRt', // Gospel Hits
  },

  'rb': {
    instruments: ['Electric Guitar', 'Bass', 'Piano', 'Saxophone', 'Drums'],
    tempoRange: '80-130 BPM',
    signatureSounds: ['Driving rhythm', 'Horn sections', 'Emotional vocals', 'Backbeat emphasis'],
    birthplace: 'Urban America (Chicago, Detroit, Memphis)',
    culturalContext: 'R&B emerged as African Americans migrated to northern cities after World War II, bringing their musical traditions into urban clubs and radio. It captured the energy and aspirations of a new generation, blending the emotion of blues with the excitement of the post-war era.',
    keyVenues: ['Apollo Theater', 'Chitlin\' Circuit', 'Motown Studios'],
    roots: 'Delta Blues electric guitar, Gospel vocal passion, Jazz horn arrangements',
    emergence: '1940s',
    peakYears: '1950s-1970s',
    keyMoments: [
      { year: '1949', event: 'Billboard coins "Rhythm and Blues"' },
      { year: '1959', event: 'Motown Records founded' },
      { year: '1971', event: 'Marvin Gaye releases What\'s Going On' },
    ],
    legacy: 'Soul, funk, disco, modern R&B, and hip-hop sampling material',
    definitiveAlbums: [
      { title: 'What\'s Going On', artist: 'Marvin Gaye', year: '1971', albumArt: 'https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg' },
      { title: 'Songs in the Key of Life', artist: 'Stevie Wonder', year: '1976', albumArt: 'https://i.scdn.co/image/ab67616d00001e022fee61bfec596bb6f5447c50' },
      { title: 'Live at the Apollo', artist: 'James Brown', year: '1963', albumArt: 'https://i.scdn.co/image/ab67616d00001e021e317c26dd7cb4e4cb0fc0c0' },
    ],
    signatureTracks: ['What\'s Going On', 'Superstition', 'I Got You', 'Respect'],
    startHere: '"What\'s Going On" by Marvin Gaye',
    spotifyTrackId: '34b3a3Pz9Jlz0092LMyNAB', // What's Going On - Marvin Gaye
    spotifyPlaylistId: '37i9dQZF1DX04mASjTsvf0', // R&B Classics
  },

  'rock-and-roll': {
    instruments: ['Electric Guitar', 'Bass', 'Drums', 'Piano', 'Voice'],
    tempoRange: '120-180 BPM',
    signatureSounds: ['Power chords', 'Driving backbeat', 'Guitar solos', 'Energetic vocals'],
    birthplace: 'Memphis, Tennessee & Cleveland, Ohio',
    culturalContext: 'Rock & Roll exploded in 1950s America as teenagers found their own voice—rebellious, energetic, and free. It was the first music to bring Black and white musical traditions together for a mass audience, challenging segregation through the universal language of rhythm and youth culture.',
    keyVenues: ['Sun Studio', 'Cavern Club', 'Ed Sullivan Show'],
    roots: 'Delta Blues guitar riffs, Country twang, R&B energy, Gospel showmanship',
    emergence: 'Early 1950s',
    peakYears: '1955-1970',
    keyMoments: [
      { year: '1954', event: 'Elvis records "That\'s All Right"' },
      { year: '1964', event: 'Beatles appear on Ed Sullivan' },
      { year: '1969', event: 'Woodstock festival' },
    ],
    legacy: 'Punk, metal, grunge, indie, and virtually all guitar-based popular music',
    definitiveAlbums: [
      { title: 'Sgt. Pepper\'s Lonely Hearts Club Band', artist: 'The Beatles', year: '1967', albumArt: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg' },
      { title: 'Elvis Presley', artist: 'Elvis Presley', year: '1956', albumArt: 'https://archive.org/download/mbid-248058aa-da35-4baf-94ca-239fa079ba7f/mbid-248058aa-da35-4baf-94ca-239fa079ba7f-7711649647_thumb250.jpg' },
      { title: 'Chuck Berry Is on Top', artist: 'Chuck Berry', year: '1959', albumArt: 'https://archive.org/download/mbid-f789c8bb-f9b6-465c-8f0b-5b882994ce1f/mbid-f789c8bb-f9b6-465c-8f0b-5b882994ce1f-42704099464_thumb250.jpg' },
    ],
    signatureTracks: ['Johnny B. Goode', 'Jailhouse Rock', 'A Hard Day\'s Night', 'Satisfaction'],
    startHere: '"Johnny B. Goode" by Chuck Berry',
    spotifyTrackId: '2QfiRTz5Yc8DdShCxG1tB2', // Johnny B. Goode - Chuck Berry
    spotifyPlaylistId: '37i9dQZF1DWXRqgorJj26U', // Rock Classics
  },

  'soul': {
    instruments: ['Voice', 'Horns', 'Organ', 'Bass', 'Drums'],
    tempoRange: '70-130 BPM',
    signatureSounds: ['Melismatic vocals', 'Horn stabs', 'Gospel-influenced delivery', 'Emotional intensity'],
    birthplace: 'Memphis, Detroit, Philadelphia',
    culturalContext: 'Soul music arose during the civil rights movement as a powerful expression of Black identity, dignity, and aspiration. It channeled the passion of gospel into secular songs about love, heartbreak, and social justice—music that could make you dance, cry, and stand up for your rights all at once.',
    keyVenues: ['Stax Studios', 'Motown Hitsville', 'Fame Studios'],
    roots: 'Gospel vocal fire and spiritual intensity, R&B rhythms, Jazz sophistication',
    emergence: 'Late 1950s',
    peakYears: '1960s-1970s',
    keyMoments: [
      { year: '1962', event: 'Ray Charles releases Modern Sounds in Country' },
      { year: '1967', event: 'Otis Redding performs at Monterey Pop' },
      { year: '1968', event: 'Say It Loud - I\'m Black and I\'m Proud' },
    ],
    legacy: 'Funk, disco, modern R&B, and the emotional core of pop music',
    definitiveAlbums: [
      { title: 'Otis Blue', artist: 'Otis Redding', year: '1965', albumArt: 'https://archive.org/download/mbid-193c2998-cd3c-4981-93e3-203c07c8618b/mbid-193c2998-cd3c-4981-93e3-203c07c8618b-5547472895_thumb250.jpg' },
      { title: 'Lady Soul', artist: 'Aretha Franklin', year: '1968', albumArt: 'https://archive.org/download/mbid-5c9b9213-c85c-43fd-8522-de03df8e0b1d/mbid-5c9b9213-c85c-43fd-8522-de03df8e0b1d-15463598991_thumb250.jpg' },
      { title: 'Let\'s Get It On', artist: 'Marvin Gaye', year: '1973', albumArt: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Marvin_Gaye_-_Let%27s_Get_It_On.png' },
    ],
    signatureTracks: ['Respect', 'Try a Little Tenderness', 'Let\'s Stay Together', 'A Change Is Gonna Come'],
    startHere: '"Respect" by Aretha Franklin',
    spotifyTrackId: '7s25THrKz86DM225dOYwnr', // Respect - Aretha Franklin
    spotifyPlaylistId: '37i9dQZF1DWULEW2RfoSCi', // 70s Soul Classics
  },

  'reggae': {
    instruments: ['Bass', 'Drums', 'Guitar', 'Organ', 'Horns'],
    tempoRange: '60-90 BPM',
    signatureSounds: ['Offbeat rhythm', 'Heavy bass', 'Skank guitar', 'Dub effects'],
    birthplace: 'Kingston, Jamaica',
    culturalContext: 'Reggae emerged from Jamaica as a voice of the oppressed, blending Rastafarian spirituality with anti-colonial politics. It spoke to the struggles of the poor in Trench Town while spreading a message of unity, resistance, and hope that resonated with marginalized people worldwide.',
    keyVenues: ['Tuff Gong Studio', 'Channel One', 'Trench Town'],
    roots: 'Jamaican ska and rocksteady, American R&B from radio, African rhythmic traditions',
    emergence: 'Late 1960s',
    peakYears: '1970s-1980s',
    keyMoments: [
      { year: '1968', event: 'Toots coins the term "reggae"' },
      { year: '1977', event: 'Bob Marley\'s Exodus released' },
      { year: '1981', event: 'Bob Marley dies, becomes global icon' },
    ],
    legacy: 'Dub production techniques, dancehall, influenced punk attitude and hip-hop sampling',
    definitiveAlbums: [
      { title: 'Exodus', artist: 'Bob Marley & The Wailers', year: '1977', albumArt: 'https://archive.org/download/mbid-77cfed3c-5cc6-4a59-91bd-a440a09abde8/mbid-77cfed3c-5cc6-4a59-91bd-a440a09abde8-31896200993_thumb250.jpg' },
      { title: 'Legalize It', artist: 'Peter Tosh', year: '1976', albumArt: 'https://archive.org/download/mbid-e9d52ec5-6fe5-4ff1-a253-aac5327ed196/mbid-e9d52ec5-6fe5-4ff1-a253-aac5327ed196-3057541324_thumb250.jpg' },
      { title: 'The Harder They Come', artist: 'Jimmy Cliff', year: '1972', albumArt: 'https://archive.org/download/mbid-572a8942-c468-46c2-a6b5-156875b4cde7/mbid-572a8942-c468-46c2-a6b5-156875b4cde7-36330326569_thumb250.jpg' },
    ],
    signatureTracks: ['No Woman No Cry', 'Get Up Stand Up', 'The Harder They Come', 'Pressure Drop'],
    startHere: '"No Woman No Cry" by Bob Marley',
    spotifyTrackId: '2ftXrFRLlI9ULnwzde2hJK', // No Woman No Cry - Bob Marley
    spotifyPlaylistId: '37i9dQZF1DXbSbnqxMTGx9', // Reggae Classics
  },

  'punk': {
    instruments: ['Electric Guitar', 'Bass', 'Drums', 'Voice'],
    tempoRange: '140-200 BPM',
    signatureSounds: ['Distorted power chords', 'Fast tempos', 'Shouted vocals', 'Stripped-down production'],
    birthplace: 'New York City & London',
    culturalContext: 'Punk erupted from the economic despair and social frustration of mid-70s Britain and the artistic underground of New York. It rejected the bloated excess of arena rock, declaring that anyone could start a band. Three chords and the truth became a manifesto for a generation who felt they had no future.',
    keyVenues: ['CBGB', '100 Club', 'Max\'s Kansas City'],
    roots: 'Rock & Roll raw energy, garage rock simplicity, Reggae rebel attitude, proto-punk (Stooges, MC5)',
    emergence: 'Mid 1970s',
    peakYears: '1976-1979',
    keyMoments: [
      { year: '1976', event: 'Ramones debut album released' },
      { year: '1977', event: 'Sex Pistols release Never Mind the Bollocks' },
      { year: '1979', event: 'The Clash release London Calling' },
    ],
    legacy: 'Hardcore, post-punk, new wave, indie rock, and the DIY music movement',
    definitiveAlbums: [
      { title: 'London Calling', artist: 'The Clash', year: '1979', albumArt: 'https://archive.org/download/mbid-efc61929-387e-42a9-8194-caccdca7012e/mbid-efc61929-387e-42a9-8194-caccdca7012e-1978576697_thumb250.jpg' },
      { title: 'Never Mind the Bollocks', artist: 'Sex Pistols', year: '1977', albumArt: 'https://archive.org/download/mbid-c6f06bc3-44ac-4555-8991-057f6bce36d7/mbid-c6f06bc3-44ac-4555-8991-057f6bce36d7-41018729651_thumb250.jpg' },
      { title: 'Ramones', artist: 'Ramones', year: '1976' },
    ],
    signatureTracks: ['Blitzkrieg Bop', 'Anarchy in the U.K.', 'London Calling', 'God Save the Queen'],
    startHere: '"Blitzkrieg Bop" by Ramones',
    spotifyTrackId: '4KcH1ZRV2W1q7Flq0QqC76', // Blitzkrieg Bop - Ramones
    spotifyPlaylistId: '37i9dQZF1DX3LDIBRoaCDQ', // Classic Punk
  },

  'funk': {
    instruments: ['Bass', 'Drums', 'Guitar', 'Horns', 'Keyboards'],
    tempoRange: '90-130 BPM',
    signatureSounds: ['Syncopated bass', 'The One', 'Wah-wah guitar', 'Polyrhythmic grooves'],
    birthplace: 'America (nationwide)',
    culturalContext: 'Funk was the sound of Black pride in the early 70s—bold, unapologetic, and irresistibly danceable. It combined the political consciousness of the era with pure party energy, creating music that celebrated Black culture while making bodies move. The groove was both liberation and celebration.',
    keyVenues: ['The Mothership', 'Apollo Theater', 'Soul Train'],
    roots: 'Soul rhythmic intensity, Jazz improvisation, R&B grooves, African polyrhythms',
    emergence: 'Late 1960s',
    peakYears: '1970s',
    keyMoments: [
      { year: '1967', event: 'James Brown creates "Cold Sweat"' },
      { year: '1970', event: 'Sly Stone\'s There\'s a Riot Goin\' On' },
      { year: '1978', event: 'Parliament\'s One Nation Under a Groove' },
    ],
    legacy: 'Hip-hop\'s rhythmic and sample foundation, disco, modern dance music',
    definitiveAlbums: [
      { title: 'Mothership Connection', artist: 'Parliament', year: '1975', albumArt: 'https://archive.org/download/mbid-ba7c8843-848f-432e-9245-8817efec8e36/mbid-ba7c8843-848f-432e-9245-8817efec8e36-41539539978_thumb250.jpg' },
      { title: 'There\'s a Riot Goin\' On', artist: 'Sly & The Family Stone', year: '1971', albumArt: 'https://upload.wikimedia.org/wikipedia/en/5/54/Sly_%26_the_Family_Stone_-_There%27s_a_Riot_Goin%27_On.png' },
      { title: 'Super Fly', artist: 'Curtis Mayfield', year: '1972', albumArt: 'https://archive.org/download/mbid-d9c00e12-5fef-4183-bd14-b501dabc3613/mbid-d9c00e12-5fef-4183-bd14-b501dabc3613-18106194058_thumb250.jpg' },
    ],
    signatureTracks: ['Give Up the Funk', 'Super Freak', 'Flash Light', 'Get Up Offa That Thing'],
    startHere: '"Give Up the Funk" by Parliament',
    spotifyTrackId: '4XRkQloZFcRrCONN7ZQ49Y', // Give Up the Funk - Parliament
    spotifyPlaylistId: '37i9dQZF1DWWvhKV4FBciw', // Funk & Soul Classics
  },

  'electronic': {
    instruments: ['Synthesizers', 'Drum Machines', 'Sequencers', 'Samplers'],
    tempoRange: '80-150 BPM',
    signatureSounds: ['Synthetic textures', 'Sequenced patterns', 'Vocoder vocals', 'Futuristic soundscapes'],
    birthplace: 'Germany (Düsseldorf) & UK',
    culturalContext: 'Electronic music emerged from a utopian vision of technology as artistic liberation. In the rebuilt cities of post-war Germany and the experimental studios of Britain, pioneers imagined a future where machines and humans created together—a cold, beautiful sound for the Space Age.',
    keyVenues: ['Kling Klang Studio', 'Electronic music festivals'],
    roots: 'Avant-garde classical (Stockhausen), musique concrète, early synthesizer experiments',
    emergence: '1970s',
    peakYears: '1980s-1990s',
    keyMoments: [
      { year: '1974', event: 'Kraftwerk releases Autobahn' },
      { year: '1977', event: 'Giorgio Moroder\'s "I Feel Love"' },
      { year: '1981', event: 'MTV launches, synth-pop dominates' },
    ],
    legacy: 'House, techno, ambient, synth-pop, and all modern electronic dance music',
    definitiveAlbums: [
      { title: 'Trans-Europe Express', artist: 'Kraftwerk', year: '1977' },
      { title: 'Oxygène', artist: 'Jean-Michel Jarre', year: '1976', albumArt: 'https://archive.org/download/mbid-3ed8b7ee-1f2a-448f-bfb2-dd3a7fb0efb8/mbid-3ed8b7ee-1f2a-448f-bfb2-dd3a7fb0efb8-1242540512_thumb250.jpg' },
      { title: 'Music for the Masses', artist: 'Depeche Mode', year: '1987', albumArt: 'https://archive.org/download/mbid-8d059e75-d9bb-4d90-97a9-1cb6ed7472c6/mbid-8d059e75-d9bb-4d90-97a9-1cb6ed7472c6-9552817368_thumb250.jpg' },
    ],
    signatureTracks: ['Trans-Europe Express', 'The Robots', 'Blue Monday', 'Enjoy the Silence'],
    startHere: '"Blue Monday" by New Order',
    spotifyTrackId: '0O9OPv8X9O3zXLmckWcUtO', // Blue Monday - New Order
    spotifyPlaylistId: '37i9dQZF1DX8AliSIsGeKd', // Electronic Rising
  },

  'disco': {
    instruments: ['Strings', 'Bass', 'Drums', 'Synthesizers', 'Voice'],
    tempoRange: '110-140 BPM',
    signatureSounds: ['Four-on-the-floor beat', 'Orchestral strings', 'Soaring vocals', 'Hi-hat patterns'],
    birthplace: 'New York City',
    culturalContext: 'Disco was born in the underground clubs of New York, where LGBTQ+ people, Black and Latino communities found freedom on the dance floor. In an era of economic recession and social upheaval, the discotheque became a sanctuary—a place to escape, express identity, and find joy.',
    keyVenues: ['Studio 54', 'Paradise Garage', 'The Loft'],
    roots: 'Soul vocals and emotion, Funk rhythms, Electronic synthesizer textures, Philly soul lushness',
    emergence: 'Early 1970s',
    peakYears: '1975-1979',
    keyMoments: [
      { year: '1975', event: 'Donna Summer\'s "Love to Love You Baby"' },
      { year: '1977', event: 'Saturday Night Fever soundtrack' },
      { year: '1979', event: 'Disco Demolition Night backlash' },
    ],
    legacy: 'House music, dance-pop, modern club culture, DJ as artist',
    definitiveAlbums: [
      { title: 'Saturday Night Fever', artist: 'Bee Gees & Various', year: '1977', albumArt: 'https://archive.org/download/mbid-9228448e-79ba-467b-9b54-fbc3a98f4a1d/mbid-9228448e-79ba-467b-9b54-fbc3a98f4a1d-11222289646_thumb250.jpg' },
      { title: 'I Remember Yesterday', artist: 'Donna Summer', year: '1977', albumArt: 'https://archive.org/download/mbid-4b53ff3d-c6d1-4dd4-930f-820429710962/mbid-4b53ff3d-c6d1-4dd4-930f-820429710962-36606091192_thumb250.jpg' },
      { title: 'C\'est Chic', artist: 'Chic', year: '1978', albumArt: 'https://upload.wikimedia.org/wikipedia/en/6/64/C%27est_Chic_%28Chic_album%29_coverart.jpg' },
    ],
    signatureTracks: ['Stayin\' Alive', 'I Will Survive', 'Le Freak', 'I Feel Love'],
    startHere: '"Stayin\' Alive" by Bee Gees',
    spotifyTrackId: '1h2xVEoJORqrg71HocgqXd', // Stayin' Alive - Bee Gees
    spotifyPlaylistId: '1Fy5p1KbV1XBE16GKF9jOS', // Disco Classics
  },

  'hip-hop': {
    instruments: ['Turntables', 'Drum Machine', 'Sampler', 'Voice', 'Bass'],
    tempoRange: '80-115 BPM',
    signatureSounds: ['Sampling', 'Scratching', 'Boom-bap drums', 'Rhythmic rhyming'],
    birthplace: 'South Bronx, New York',
    culturalContext: 'Hip-hop was born from the burned-out blocks of the South Bronx, where Black and Latino youth turned poverty into poetry. Block parties became stages, turntables became instruments, and the streets became a canvas. It was a complete cultural movement—music, art, dance, and fashion—that gave voice to the voiceless.',
    keyVenues: ['Block parties', 'Latin Quarter', 'Def Jam HQ'],
    roots: 'Funk breaks and samples, Reggae sound system culture, R&B grooves, spoken word poetry',
    emergence: 'Late 1970s',
    peakYears: '1988-1996 (Golden Age)',
    keyMoments: [
      { year: '1979', event: 'Rapper\'s Delight first hip-hop hit' },
      { year: '1988', event: 'Public Enemy releases It Takes a Nation' },
      { year: '1994', event: 'Nas releases Illmatic' },
    ],
    legacy: 'The dominant global popular music genre, trap, drill, and countless subgenres',
    definitiveAlbums: [
      { title: 'Illmatic', artist: 'Nas', year: '1994', albumArt: 'https://i.scdn.co/image/ab67616d00001e0271d840defb002ed3b180f7cd' },
      { title: 'It Takes a Nation of Millions', artist: 'Public Enemy', year: '1988', albumArt: 'https://archive.org/download/mbid-4ef7fe79-3002-4779-9aa4-3430ae0ce6be/mbid-4ef7fe79-3002-4779-9aa4-3430ae0ce6be-9705281248_thumb250.jpg' },
      { title: 'The Chronic', artist: 'Dr. Dre', year: '1992' },
    ],
    signatureTracks: ['The Message', 'Fight the Power', 'N.Y. State of Mind', 'Nuthin\' But a G Thang'],
    startHere: '"N.Y. State of Mind" by Nas',
    spotifyTrackId: '0trHOzAhNpGCsGBEu7dOJo', // N.Y. State of Mind - Nas
    spotifyPlaylistId: '37i9dQZF1DX186v583rmzp', // I Love My '90s Hip-Hop
  },

  'house': {
    instruments: ['Drum Machine', 'Synthesizers', 'Sampler', 'Bass'],
    tempoRange: '118-135 BPM',
    signatureSounds: ['Four-on-the-floor kick', 'Roland 808/909 drums', 'Deep basslines', 'Soulful vocals'],
    birthplace: 'Chicago, Illinois',
    culturalContext: 'House music rose from the ashes of disco in the gay Black clubs of Chicago. When mainstream America declared disco dead, these communities kept dancing, creating something new and more minimal. The Warehouse and Music Box became temples where the spirit of disco evolved into something harder, deeper, and more hypnotic.',
    keyVenues: ['The Warehouse', 'Music Box', 'Paradise Garage'],
    roots: 'Disco four-on-the-floor, Electronic synth textures, Soul vocal samples, Funk grooves',
    emergence: 'Early 1980s',
    peakYears: '1986-1992',
    keyMoments: [
      { year: '1984', event: 'Frankie Knuckles coins "house music"' },
      { year: '1987', event: 'UK discovers house (Second Summer of Love)' },
      { year: '1990', event: 'House goes mainstream globally' },
    ],
    legacy: 'Deep house, tech house, and the foundation of modern club culture worldwide',
    definitiveAlbums: [
      { title: 'Move Your Body', artist: 'Marshall Jefferson', year: '1986' },
      { title: 'Can You Feel It', artist: 'Fingers Inc.', year: '1988' },
      { title: 'Beyond the Mix', artist: 'Frankie Knuckles', year: '1991', albumArt: 'https://archive.org/download/mbid-33d1434d-3179-416f-b45b-02fe98640282/mbid-33d1434d-3179-416f-b45b-02fe98640282-17153996559_thumb250.jpg' },
    ],
    signatureTracks: ['Move Your Body', 'Your Love', 'Can You Feel It', 'Strings of Life'],
    startHere: '"Your Love" by Frankie Knuckles',
    spotifyTrackId: '6tvtFyEdNpeurBkT2zNMEL', // Your Love - Frankie Knuckles
    spotifyPlaylistId: '37i9dQZF1DWTU3Zl0elDUa', // 90s House Classics
  },

  'techno': {
    instruments: ['Drum Machine', 'Synthesizers', 'Sequencer'],
    tempoRange: '125-150 BPM',
    signatureSounds: ['Industrial textures', 'Mechanical rhythms', 'Futuristic synths', 'Minimalist structure'],
    birthplace: 'Detroit, Michigan',
    culturalContext: 'Techno emerged from the ruins of Detroit\'s auto industry, where young Black artists imagined a future beyond economic collapse. Inspired by Kraftwerk and science fiction, they created Afrofuturist music for a post-industrial age—cold, mechanical, yet deeply soulful. It was the sound of reinvention.',
    keyVenues: ['The Music Institute', 'Berghain', 'Detroit Electronic Music Festival'],
    roots: 'Electronic (Kraftwerk) mechanical precision, House rhythmic foundation, Funk syncopation',
    emergence: 'Mid 1980s',
    peakYears: '1988-1995',
    keyMoments: [
      { year: '1985', event: 'Juan Atkins coins "techno"' },
      { year: '1988', event: 'Techno compilation introduces genre to UK' },
      { year: '1989', event: 'Berlin Wall falls, techno explodes in Europe' },
    ],
    legacy: 'Minimal techno, industrial techno, Berlin club culture, global rave movement',
    definitiveAlbums: [
      { title: 'No UFO\'s', artist: 'Model 500', year: '1985', albumArt: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Model_500_-_No_UFOs.jpg' },
      { title: 'Techno! The New Dance Sound of Detroit', artist: 'Various', year: '1988' },
      { title: 'Waveform Transmission Vol. 1', artist: 'Jeff Mills', year: '1992' },
    ],
    signatureTracks: ['Strings of Life', 'Big Fun', 'Good Life', 'The Bells'],
    startHere: '"Strings of Life" by Derrick May',
    spotifyTrackId: '7N3FfUFMud1rjI6Vgw71mm', // Strings of Life - Derrick May
    spotifyPlaylistId: '37i9dQZF1DX6J5NfMJS675', // TECHNO BUNKER
  },

  'indie': {
    instruments: ['Electric Guitar', 'Bass', 'Drums', 'Keyboards'],
    tempoRange: '100-140 BPM',
    signatureSounds: ['Jangly guitars', 'Lo-fi production', 'Unconventional song structures', 'Introspective lyrics'],
    birthplace: 'UK & USA (various cities)',
    culturalContext: 'Indie rock grew from punk\'s DIY ethos and college radio\'s rejection of corporate rock. It was music made outside the mainstream system—on independent labels, in basements, for audiences who valued authenticity over polish. It became a refuge for misfits, intellectuals, and anyone who felt alienated by MTV culture.',
    keyVenues: ['College radio stations', 'Small clubs', 'Independent labels'],
    roots: 'Punk DIY ethos, post-punk experimentation, 60s jangle pop, alternative rock',
    emergence: 'Early 1980s',
    peakYears: '1985-1995, 2000s revival',
    keyMoments: [
      { year: '1986', event: 'Pixies form, influence grunge' },
      { year: '1988', event: 'Sonic Youth signs to major label' },
      { year: '1997', event: 'OK Computer redefines indie ambition' },
    ],
    legacy: 'Became umbrella term for alternative music, influenced mainstream pop production',
    definitiveAlbums: [
      { title: 'OK Computer', artist: 'Radiohead', year: '1997', albumArt: 'https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856' },
      { title: 'Doolittle', artist: 'Pixies', year: '1989' },
      { title: 'Funeral', artist: 'Arcade Fire', year: '2004', albumArt: 'https://archive.org/download/mbid-58c07638-4343-4ad7-ac37-da79f6aeb8e1/mbid-58c07638-4343-4ad7-ac37-da79f6aeb8e1-31589070944_thumb250.jpg' },
    ],
    signatureTracks: ['Where Is My Mind?', 'Karma Police', 'Wake Up', 'This Charming Man'],
    startHere: '"Where Is My Mind?" by Pixies',
    spotifyTrackId: '0KzAbK6nItSqNh8q70tb0K', // Where Is My Mind? - Pixies
    spotifyPlaylistId: '37i9dQZF1DWWEcRhUVtL8n', // Indie Pop
  },

  'grunge': {
    instruments: ['Electric Guitar', 'Bass', 'Drums', 'Voice'],
    tempoRange: '90-130 BPM',
    signatureSounds: ['Distorted guitars', 'Loud-quiet dynamics', 'Angst-filled vocals', 'Drop-D tuning'],
    birthplace: 'Seattle, Washington',
    culturalContext: 'Grunge channeled the frustration and alienation of Generation X—kids who felt betrayed by Reagan-era promises of prosperity. In the rainy isolation of Seattle, they created music that was loud and quiet, angry and vulnerable, rejecting the hairspray and spandex of 80s rock for flannel and raw honesty.',
    keyVenues: ['The Crocodile', 'Sub Pop Records', 'Off Ramp Café'],
    roots: 'Punk raw energy and attitude, Indie Rock DIY approach, Rock & Roll heavy guitar riffs',
    emergence: 'Late 1980s',
    peakYears: '1991-1994',
    keyMoments: [
      { year: '1988', event: 'Sub Pop releases first grunge compilation' },
      { year: '1991', event: 'Nevermind topples Michael Jackson' },
      { year: '1994', event: 'Kurt Cobain\'s death marks end of era' },
    ],
    legacy: 'Post-grunge, 90s alternative rock mainstream breakthrough, modern rock aesthetics',
    definitiveAlbums: [
      { title: 'Nevermind', artist: 'Nirvana', year: '1991', albumArt: 'https://i.scdn.co/image/ab67616d00001e02e175a19e530c898d167d39bf' },
      { title: 'Ten', artist: 'Pearl Jam', year: '1991', albumArt: 'https://i.scdn.co/image/ab67616d00001e022d0e5ab5bd2e234fbcffa3e0' },
      { title: 'Superunknown', artist: 'Soundgarden', year: '1994', albumArt: 'https://archive.org/download/mbid-d7b074fa-20da-3fb0-a8df-52751e14d96c/mbid-d7b074fa-20da-3fb0-a8df-52751e14d96c-2236678397_thumb250.jpg' },
    ],
    signatureTracks: ['Smells Like Teen Spirit', 'Alive', 'Black Hole Sun', 'Man in the Box'],
    startHere: '"Smells Like Teen Spirit" by Nirvana',
    spotifyTrackId: '4CeeEOM32jQcH3eN9Q2dGj', // Smells Like Teen Spirit - Nirvana
    spotifyPlaylistId: '37i9dQZF1DXbTxeAdrVG2l', // All Out 90s
  },

  'ambient': {
    instruments: ['Synthesizers', 'Samplers', 'Effects Processors', 'Field Recordings'],
    tempoRange: '60-90 BPM (or none)',
    signatureSounds: ['Atmospheric textures', 'Evolving drones', 'Spatial effects', 'Minimal rhythm'],
    birthplace: 'UK & Germany',
    culturalContext: 'Ambient music rejected the very idea that music needed melody, rhythm, or attention. Brian Eno conceived it as sonic furniture—as ignorable as it is interesting. It created space for contemplation, meditation, and escapism, offering calm in an increasingly frantic world.',
    keyVenues: ['Art galleries', 'Chill-out rooms', 'Planetariums'],
    roots: 'Electronic experimental textures, Jazz modal exploration, minimalist classical (Satie, Glass)',
    emergence: '1970s (formal), 1990s (popular)',
    peakYears: '1990s-2000s',
    keyMoments: [
      { year: '1978', event: 'Brian Eno releases Ambient 1: Music for Airports' },
      { year: '1992', event: 'Aphex Twin\'s Selected Ambient Works' },
      { year: '1999', event: 'Sigur Rós releases Ágætis byrjun' },
    ],
    legacy: 'Film scoring techniques, lo-fi beats, wellness/meditation music, video game soundtracks',
    definitiveAlbums: [
      { title: 'Ambient 1: Music for Airports', artist: 'Brian Eno', year: '1978', albumArt: 'https://i.scdn.co/image/ab67616d00001e0237a379ca6520eaf191de6ff2' },
      { title: 'Selected Ambient Works 85-92', artist: 'Aphex Twin', year: '1992', albumArt: 'https://i.scdn.co/image/ab67616d00001e0238906032688bb13b135ce19a' },
      { title: 'Music Has the Right to Children', artist: 'Boards of Canada', year: '1998', albumArt: 'https://i.scdn.co/image/ab67616d00001e020ddcb1077d30a5ffb59b6864' },
    ],
    signatureTracks: ['1/1', 'Xtal', 'Roygbiv', 'Svefn-g-englar'],
    startHere: '"An Ending (Ascent)" by Brian Eno',
    spotifyTrackId: '1vgSaC0BPlL6LEm4Xsx59J', // An Ending (Ascent) - Brian Eno
    spotifyPlaylistId: '37i9dQZF1DX3Ogo9pFvBkY', // Ambient Relaxation
  },

  'drum-and-bass': {
    instruments: ['Sampler', 'Synthesizers', 'Drum Machine', 'Bass'],
    tempoRange: '160-180 BPM',
    signatureSounds: ['Breakbeat drums', 'Heavy sub-bass', 'Syncopated rhythms', 'Atmospheric pads'],
    birthplace: 'London, UK',
    culturalContext: 'Drum and bass emerged from the UK\'s multiracial urban centers, where rave culture met Caribbean sound system traditions. It was the sound of inner-city Britain—fast, dark, and intense—played through massive speaker stacks in warehouses and on pirate radio stations broadcasting to tower blocks.',
    keyVenues: ['Fabric', 'Movement', 'Pirate radio stations'],
    roots: 'Techno energy, Hip-Hop breakbeats and sampling, Reggae sound system bass culture',
    emergence: 'Early 1990s',
    peakYears: '1995-2000',
    keyMoments: [
      { year: '1992', event: 'Jungle emerges from hardcore rave' },
      { year: '1995', event: 'Goldie\'s Timeless brings mainstream attention' },
      { year: '1997', event: 'Roni Size wins Mercury Prize' },
    ],
    legacy: 'Liquid funk, neurofunk, dubstep bass design, UK bass music scene',
    definitiveAlbums: [
      { title: 'Timeless', artist: 'Goldie', year: '1995', albumArt: 'https://archive.org/download/mbid-98ab8a25-eebd-42cf-a549-54f8de4c1e0e/mbid-98ab8a25-eebd-42cf-a549-54f8de4c1e0e-8544879120_thumb250.jpg' },
      { title: 'New Forms', artist: 'Roni Size & Reprazent', year: '1997', albumArt: 'https://archive.org/download/mbid-d06fe934-8560-4818-9d74-cd02a34b2c56/mbid-d06fe934-8560-4818-9d74-cd02a34b2c56-11134793260_thumb250.jpg' },
      { title: 'Logical Progression', artist: 'LTJ Bukem', year: '1996', albumArt: 'https://archive.org/download/mbid-5d4113b4-6507-4ce7-aa60-39e96d43523c/mbid-5d4113b4-6507-4ce7-aa60-39e96d43523c-25607895724_thumb250.jpg' },
    ],
    signatureTracks: ['Inner City Life', 'Brown Paper Bag', 'Atlantis', 'Super Sharp Shooter'],
    startHere: '"Inner City Life" by Goldie',
    spotifyTrackId: '0O7xFEqePrcTUgOi4qe0uB', // Inner City Life - Goldie
    spotifyPlaylistId: '5XGbuIRSb5INv66b817DJH', // Drum And Bass Classics
  },

  'edm': {
    instruments: ['DAW', 'Synthesizers', 'Controllers', 'Effects'],
    tempoRange: '120-150 BPM',
    signatureSounds: ['Big drops', 'Melodic builds', 'Sidechain compression', 'Festival anthems'],
    birthplace: 'Global (Europe & USA)',
    culturalContext: 'EDM brought dance music from underground clubs to stadium stages and Las Vegas residencies. Fueled by social media and massive festivals, it became the soundtrack of millennial celebration culture—commercial, unapologetic, and designed for the biggest possible crowd experience.',
    keyVenues: ['Tomorrowland', 'Ultra', 'Electric Daisy Carnival'],
    roots: 'House four-on-the-floor foundation, Techno production techniques, Trance melodic builds',
    emergence: '2000s',
    peakYears: '2010-2015',
    keyMoments: [
      { year: '2006', event: 'Daft Punk\'s Alive tour' },
      { year: '2010', event: 'Deadmau5 headlines arenas worldwide' },
      { year: '2013', event: 'EDM peaks with Vegas residencies' },
    ],
    legacy: 'Future bass, tropical house, pop crossovers, mainstream dance music acceptance',
    definitiveAlbums: [
      { title: 'Random Access Memories', artist: 'Daft Punk', year: '2013', albumArt: 'https://i.scdn.co/image/ab67616d00001e029b9b36b0e22870b9f542d937' },
      { title: 'For Lack of a Better Name', artist: 'Deadmau5', year: '2009' },
      { title: 'Scary Monsters and Nice Sprites', artist: 'Skrillex', year: '2010', albumArt: 'https://archive.org/download/mbid-e32b67d6-bbd0-42a5-bca9-9bd33e927d74/mbid-e32b67d6-bbd0-42a5-bca9-9bd33e927d74-18411884720_thumb250.jpg' },
    ],
    signatureTracks: ['Get Lucky', 'Strobe', 'Scary Monsters', 'Levels'],
    startHere: '"Get Lucky" by Daft Punk',
    spotifyTrackId: '69kOkLUCkxIZYexIgSG8rq', // Get Lucky - Daft Punk
    spotifyPlaylistId: '37i9dQZF1DX4dyzvuaRJ0n', // mint (EDM)
  },
}
