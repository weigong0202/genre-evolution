import type { Artist } from '../types'

export const genreArtists: Record<string, Artist[]> = {
  'country': [
    { id: 'hank-williams', name: 'Hank Williams', years: '1947-1953', significance: 'The father of modern country music' },
    { id: 'johnny-cash', name: 'Johnny Cash', years: '1955-2003', significance: 'The Man in Black, outlaw country pioneer' },
    { id: 'patsy-cline', name: 'Patsy Cline', years: '1957-1963', significance: 'Crossover queen with timeless vocals' },
    { id: 'dolly-parton', name: 'Dolly Parton', years: '1967-present', significance: 'Songwriting genius and cultural icon' },
  ],

  'delta-blues': [
    { id: 'robert-johnson', name: 'Robert Johnson', years: '1936-1938', significance: 'Legendary crossroads guitarist' },
    { id: 'muddy-waters', name: 'Muddy Waters', years: '1941-1983', significance: 'Father of Chicago blues' },
    { id: 'bb-king', name: 'B.B. King', years: '1949-2015', significance: 'King of the Blues, Lucille\'s master' },
    { id: 'howlin-wolf', name: 'Howlin\' Wolf', years: '1951-1976', significance: 'Raw power and primal energy' },
  ],

  'jazz': [
    { id: 'louis-armstrong', name: 'Louis Armstrong', years: '1920s-1971', significance: 'Invented jazz improvisation' },
    { id: 'duke-ellington', name: 'Duke Ellington', years: '1923-1974', significance: 'Jazz\'s greatest composer' },
    { id: 'miles-davis', name: 'Miles Davis', years: '1944-1991', significance: 'Reinvented jazz five times over' },
    { id: 'john-coltrane', name: 'John Coltrane', years: '1955-1967', significance: 'Spiritual saxophone titan' },
  ],

  'gospel': [
    { id: 'mahalia-jackson', name: 'Mahalia Jackson', years: '1937-1972', significance: 'Queen of Gospel' },
    { id: 'sister-rosetta', name: 'Sister Rosetta Tharpe', years: '1938-1973', significance: 'Godmother of rock and roll' },
    { id: 'sam-cooke', name: 'Sam Cooke', years: '1950-1964', significance: 'Gospel to soul crossover king' },
    { id: 'aretha-franklin', name: 'Aretha Franklin', years: '1956-2018', significance: 'Queen of Soul, gospel roots' },
  ],

  'rb': [
    { id: 'ray-charles', name: 'Ray Charles', years: '1949-2004', significance: 'The Genius who merged gospel and blues' },
    { id: 'james-brown', name: 'James Brown', years: '1956-2006', significance: 'Godfather of Soul' },
    { id: 'marvin-gaye', name: 'Marvin Gaye', years: '1961-1984', significance: 'Prince of Motown' },
    { id: 'stevie-wonder', name: 'Stevie Wonder', years: '1961-present', significance: 'Child prodigy turned innovator' },
  ],

  'rock-and-roll': [
    { id: 'elvis', name: 'Elvis Presley', years: '1954-1977', significance: 'The King of Rock and Roll' },
    { id: 'chuck-berry', name: 'Chuck Berry', years: '1955-2017', significance: 'Invented rock guitar' },
    { id: 'little-richard', name: 'Little Richard', years: '1955-2020', significance: 'Flamboyant rock pioneer' },
    { id: 'beatles', name: 'The Beatles', years: '1960-1970', significance: 'Changed everything forever' },
  ],

  'soul': [
    { id: 'otis-redding', name: 'Otis Redding', years: '1962-1967', significance: 'King of Soul' },
    { id: 'al-green', name: 'Al Green', years: '1967-present', significance: 'Smooth soul master' },
    { id: 'curtis-mayfield', name: 'Curtis Mayfield', years: '1958-1999', significance: 'Socially conscious soul' },
    { id: 'diana-ross', name: 'Diana Ross', years: '1959-present', significance: 'Supreme Motown diva' },
  ],

  'reggae': [
    { id: 'bob-marley', name: 'Bob Marley', years: '1963-1981', significance: 'Global reggae ambassador' },
    { id: 'peter-tosh', name: 'Peter Tosh', years: '1963-1987', significance: 'Militant reggae revolutionary' },
    { id: 'jimmy-cliff', name: 'Jimmy Cliff', years: '1962-present', significance: 'Reggae\'s first international star' },
    { id: 'toots', name: 'Toots Hibbert', years: '1962-2020', significance: 'Named the genre "reggae"' },
  ],

  'punk': [
    { id: 'ramones', name: 'Ramones', years: '1974-1996', significance: 'Invented punk rock' },
    { id: 'sex-pistols', name: 'Sex Pistols', years: '1975-1978', significance: 'Anarchic UK punk' },
    { id: 'clash', name: 'The Clash', years: '1976-1986', significance: 'The only band that matters' },
    { id: 'patti-smith', name: 'Patti Smith', years: '1974-present', significance: 'Punk poet laureate' },
  ],

  'funk': [
    { id: 'parliament', name: 'Parliament-Funkadelic', years: '1968-present', significance: 'Mothership Connection' },
    { id: 'sly-stone', name: 'Sly & The Family Stone', years: '1966-1983', significance: 'Psychedelic soul funk' },
    { id: 'prince', name: 'Prince', years: '1976-2016', significance: 'Purple funk genius' },
    { id: 'rick-james', name: 'Rick James', years: '1977-2004', significance: 'Super Freak king' },
  ],

  'electronic': [
    { id: 'kraftwerk', name: 'Kraftwerk', years: '1970-present', significance: 'Godfathers of electronic music' },
    { id: 'tangerine-dream', name: 'Tangerine Dream', years: '1967-present', significance: 'Berlin School pioneers' },
    { id: 'jean-michel-jarre', name: 'Jean-Michel Jarre', years: '1976-present', significance: 'Electronic spectacle master' },
    { id: 'depeche-mode', name: 'Depeche Mode', years: '1980-present', significance: 'Synth-pop to stadium rock' },
  ],

  'disco': [
    { id: 'donna-summer', name: 'Donna Summer', years: '1974-2012', significance: 'Queen of Disco' },
    { id: 'bee-gees', name: 'Bee Gees', years: '1958-2003', significance: 'Saturday Night Fever' },
    { id: 'chic', name: 'Chic', years: '1976-present', significance: 'Good Times groove masters' },
    { id: 'gloria-gaynor', name: 'Gloria Gaynor', years: '1965-present', significance: 'I Will Survive' },
  ],

  'hip-hop': [
    { id: 'grandmaster-flash', name: 'Grandmaster Flash', years: '1978-present', significance: 'Invented DJ scratching' },
    { id: 'run-dmc', name: 'Run-D.M.C.', years: '1981-2002', significance: 'Brought hip-hop to mainstream' },
    { id: 'public-enemy', name: 'Public Enemy', years: '1985-present', significance: 'Fight the Power' },
    { id: 'nas', name: 'Nas', years: '1991-present', significance: 'Illmatic lyrical genius' },
  ],

  'house': [
    { id: 'frankie-knuckles', name: 'Frankie Knuckles', years: '1977-2014', significance: 'Godfather of House' },
    { id: 'larry-heard', name: 'Larry Heard', years: '1984-present', significance: 'Deep house architect' },
    { id: 'marshall-jefferson', name: 'Marshall Jefferson', years: '1985-present', significance: 'Move Your Body pioneer' },
    { id: 'kerri-chandler', name: 'Kerri Chandler', years: '1991-present', significance: 'Deep house master' },
  ],

  'techno': [
    { id: 'juan-atkins', name: 'Juan Atkins', years: '1981-present', significance: 'Originator of techno' },
    { id: 'derrick-may', name: 'Derrick May', years: '1986-present', significance: 'The Innovator' },
    { id: 'kevin-saunderson', name: 'Kevin Saunderson', years: '1986-present', significance: 'The Elevator' },
    { id: 'richie-hawtin', name: 'Richie Hawtin', years: '1990-present', significance: 'Minimal techno pioneer' },
  ],

  'indie': [
    { id: 'pixies', name: 'Pixies', years: '1986-present', significance: 'Loud-quiet-loud template' },
    { id: 'sonic-youth', name: 'Sonic Youth', years: '1981-2011', significance: 'Noise rock innovators' },
    { id: 'radiohead', name: 'Radiohead', years: '1985-present', significance: 'Art rock evolution' },
    { id: 'arcade-fire', name: 'Arcade Fire', years: '2001-present', significance: 'Orchestral indie anthems' },
  ],

  'grunge': [
    { id: 'nirvana', name: 'Nirvana', years: '1987-1994', significance: 'Smells Like Teen Spirit changed everything' },
    { id: 'pearl-jam', name: 'Pearl Jam', years: '1990-present', significance: 'Arena rock meets Seattle angst' },
    { id: 'soundgarden', name: 'Soundgarden', years: '1984-2017', significance: 'Heavy riffs, Chris Cornell\'s voice' },
    { id: 'alice-in-chains', name: 'Alice in Chains', years: '1987-present', significance: 'Dark harmonies, metal influence' },
  ],

  'ambient': [
    { id: 'brian-eno', name: 'Brian Eno', years: '1973-present', significance: 'Invented ambient music' },
    { id: 'aphex-twin', name: 'Aphex Twin', years: '1985-present', significance: 'IDM and ambient genius' },
    { id: 'boards-of-canada', name: 'Boards of Canada', years: '1986-present', significance: 'Nostalgic electronic' },
    { id: 'sigur-ros', name: 'Sigur Ros', years: '1994-present', significance: 'Icelandic ambient post-rock' },
  ],

  'drum-and-bass': [
    { id: 'goldie', name: 'Goldie', years: '1992-present', significance: 'Jungle pioneer, Inner City Life' },
    { id: 'roni-size', name: 'Roni Size', years: '1992-present', significance: 'Mercury Prize winner' },
    { id: 'ltj-bukem', name: 'LTJ Bukem', years: '1991-present', significance: 'Atmospheric liquid DnB' },
    { id: 'andy-c', name: 'Andy C', years: '1991-present', significance: 'The executioner' },
  ],

  'edm': [
    { id: 'daft-punk', name: 'Daft Punk', years: '1993-2021', significance: 'Robots who conquered the world' },
    { id: 'deadmau5', name: 'Deadmau5', years: '2005-present', significance: 'Progressive house maestro' },
    { id: 'skrillex', name: 'Skrillex', years: '2008-present', significance: 'Dubstep goes mainstream' },
    { id: 'calvin-harris', name: 'Calvin Harris', years: '2006-present', significance: 'Pop-EDM crossover king' },
  ],
}
