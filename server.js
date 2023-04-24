const express = require('express'),
      app = express,
      bodyParser = require('body-parser'),
      uuid = require('uuid');

app.use(bodyParser.json());

let users = [
	{
	id: 1,
	name:"Kim",
	favoriteMovies: []
	},

	{
	id:2,
	name:"Joe",
	favoriteMovies: ["The Fountain"]
	},
];

let movies = [
  {
    title: 'The Shawshank Redemption', 
    description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    genre: 
    {
        name: 'drama',
        description: 'narrative fiction (or semi-fiction) intended to be more serious than humorous in tone'
    },
    director: 
    {
        name: 'Frank Darabont',
        bio: 'Frank Darabont is a French-born American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe Award.',
        Birthyear: '1959'
    },
    imageUrl: 'https://en.wikipedia.org/wiki/The_Shawshank_Redemption#/media/File:ShawshankRedemptionMoviePoster.jpg',
    year: '1994',
    featured: 'yes'
},
{
  title: 'The Godfather', 
  description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
  genre: 
  {
      name: 'gangster',
      description: 'A gangster film or gangster movie is a film belonging to a genre that focuses on gangs and organized crime.'
  },
  director: 
  {
      name: 'Francis Ford Coppola',
      bio: 'Francis Ford Coppola is an American film director, producer, and screenwriter. ',
      Birthyear: '1939'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Godfather#/media/File:Godfather_ver1.jpg',
  year: '1972',
  featured: 'yes'
},
{
  title: 'The Dark Knight', 
  description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  genre: 
  {
      name: 'superhero',
      description: 'A superhero film is a film that focuses on the actions of superheroes.'
  },
  director: 
  {
      name: 'Christopher Nolan',
      bio: 'Christopher Edward Nolan CBE (born 30 July 1970) is a British-American filmmaker.',
      Birthyear: '1970'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Dark_Knight#/media/File:The_Dark_Knight_(2008_film).jpg',
  year: '2008',
  featured: 'yes'
},
{
  title: 'The Godfather Part II', 
  description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
  genre: 
  {
      name: 'gangster',
      description: 'A gangster film or gangster movie is a film belonging to a genre that focuses on gangs and organized crime.'
  },
  director: 
  {
      name: 'Francis Ford Coppola',
      bio: 'Francis Ford Coppola is an American film director, producer, and screenwriter.',
      Birthyear: '1939'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Godfather_Part_II#/media/File:Godfather_part_ii.jpg',
  year: '1974',
  featured: 'yes'
},
{
  title: '12 Angry Men', 
  description: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
  genre: 
  {
      name: 'drama',
      description: 'narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
  },
  director: 
  {
      name: 'Sidney Lumet',
      bio: 'Sidney Lumet  was an American film director. ',
      Birthyear: '1924'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/12_Angry_Men_(1957_film)#/media/File:12_Angry_Men_(1957_film_poster).jpg',
  year: '1957',
  featured: 'yes'
},
{
  title: 'Schindlers List', 
  description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
  genre: 
  {
      name: 'historical drama',
      description: 'A dramatic work set in a past time period, usually used in the context of film and television, which presents historical events and characters with varying degrees of fictional elements such as creative dialogue or fictional scenes which aim to compress separate events or illustrate a broader factual narrative.'
  },
  director: 
  {
      name: 'Steven Spielberg',
      bio: 'Steven Spielberg is an American filmmaker.A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history.',
      Birthyear: '1946'
  },
  imageUrl: 'https://www.imdb.com/title/tt0108052/mediaviewer/rm1610023168/?ref_=tt_ov_i',
  year: '1993',
  featured: 'yes'
},
{
  title: 'The Lord of the Rings: The Return of the King', 
  description: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
  genre: 
  {
      name: 'fantasy',
      description: 'Films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.'
  },
  director: 
  {
      name: 'Peter Jackson',
      bio: '1961',
      Birthyear: 'Sir Peter Robert Jackson is a New Zealand film director, screenwriter and producer.'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King#/media/File:The_Lord_of_the_Rings_-_The_Return_of_the_King_(2003).jpg',
  year: '2003',
  featured: 'yes'
},
{
  title: 'Pulp Fiction', 
  description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  genre: 
  {
      name: 'crime',
      description: 'A film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection.'
  },
  director: 
  {
      name: 'Quentin Tarantino',
      bio: 'Quentin Tarantino is an American film director, writer, producer, and actor.',
      Birthyear: '1963'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/Pulp_Fiction#/media/File:Pulp_Fiction_(1994)_poster.jpg',
  year: '1994',
  featured: 'yes'
},
{
  title: 'The Lord of the Rings: The Fellowship of the Ring', 
  description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
  genre: 
  {
      name: 'fantasy',
      description: 'Films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.'
  },
  director: 
  {
      name: 'Peter Jackson',
      bio: 'Sir Peter Robert Jackson is a New Zealand film director, screenwriter and producer.',
      Birthyear: '1961'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring#/media/File:The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_(2001).jpg',
  year: '2001',
  featured: 'yes'
},
{
  title: 'The Good, The Bad, and The Ugly', 
  description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
  genre: 
  {
      name: 'western',
      description: 'The Western is a genre of fiction set in the American frontier and commonly associated with folk tales of the Western United States, particularly the Southwestern United States, as well as Northern Mexico and Western Canada. '
  },
  director: 
  {
      name: 'Sergio Leone',
      bio: 'Sergio Leone was an Italian film director, producer, and screenwriter credited as the pioneer of the Spaghetti Western genre and widely regarded as one of the most influential directors in the history of cinema',
      Birthyear: '1929'
  },
  imageUrl: 'https://en.wikipedia.org/wiki/The_Good,_the_Bad_and_the_Ugly#/media/File:Good_the_bad_and_the_ugly_poster.jpg',
  year: '1966',
  featured: 'yes'
},
];

//READ
app.get('/movies'), (req,res) => {
  res.status(200).json(movies);
});

//READ


app.listen(8080, () => console.log("listening on 8080"))