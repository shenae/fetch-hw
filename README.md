# JSON Practice!!!

![clap](./assets/clap.gif)

We'll be using Postman to solve the following problems, using the [Game of Thrones](https://anapioficeandfire.com/) API.

## Example question & answer

0. When was Jon Snow born?

- URL: `http://anapioficeandfire.com/api/characters/583` (you'll paste this URL into Postman)

- Response: (You don't have to include this part, I've just copy-pasted the entire response from Postman so you can see what's going on.)

```json
{
    "url": "http://anapioficeandfire.com/api/characters/583",
    "name": "Jon Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 283 AC",
    "died": "",
    "titles": [
        "Lord Commander of the Night's Watch"
    ],
    "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
        "http://anapioficeandfire.com/api/houses/362"
    ],
    "books": [
        "http://anapioficeandfire.com/api/books/5"
    ],
    "povBooks": [
        "http://anapioficeandfire.com/api/books/1",
        "http://anapioficeandfire.com/api/books/2",
        "http://anapioficeandfire.com/api/books/3",
        "http://anapioficeandfire.com/api/books/8"
    ],
    "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
    ],
    "playedBy": [
        "Kit Harington"
    ]
}
```

- Accessed: `response.born` (this is how you'd access the property I'm asking for).

### Woah! Where did `response` come from?

It's convention for the JSON response object to be referred to as `response` or `res` in your code. We'll talk some more about this tomorrow. For now, let's just say that the response you get in Postman is a big object named `response`. 

## Here's the part you have to do!

1. Where was Margaery Tyrell born?

- URL: `http://anapioficeandfire.com/api/characters/16`
- Accessed: `your answer here`

2. What region is House Targaryen in?

- URL: `http://www.anapioficeandfire.com/api/houses/378`
- Accessed: `your answer here`

3. What's the coat of arms of House Lannister?

- URL: `http://www.anapioficeandfire.com/api/houses/229`
- Accessed: `Your answer here`

4. What is the second seat of House Baratheon?

- URL: `http://www.anapioficeandfire.com/api/houses/17`
- Accessed: `Your answer here`

5. What is Robert Baratheon's second alias?

- URL: `http://www.anapioficeandfire.com/api/characters/901`
- Accessed: `Your answer here`

6. What's the name of the founder of House Stark? (You may have to go through multiple Postman requests!)

- URL: `http://www.anapioficeandfire.com/api/houses/362`
- Accessed: `your answer here`, [next step here], `final step answer here`

7. What are the titles of Catelyn Stark's three POV books?

- URL: `http://www.anapioficeandfire.com/api/characters/232`
- Accessed: `your answer here` (may also have multiple parts)