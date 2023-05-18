import express from "express";
const mysql = require('mysql');
const groupTwoRouter = express.Router();

groupTwoRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default function registerGroupTwo(app) {
  app.use("/groupTwo", groupTwoRouter);
}

app.get('/', (req, res) => {
  const userId = req.query.userId; //userId is passed as a query parameter (still don't know )

  // fetch podcast followings data for the given user
connection.query('SELECT * FROM podcast_followings WHERE user_id = ?', [userId], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }

  const podcastFollowings = results; //the query returns an array of podcast followings

  // Loop through the podcast followings to retrieve additional data
  const podcastCards = podcastFollowings.map((following) => {
    const showId = following.show_id;

    // Fetch data from podcast_categories table based on show_id
    connection.query('SELECT cover_url, section_id FROM podcast_categories WHERE show_id = ?', [showId], (err, categoryResults) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      const categoryData = categoryResults[0]; //the query returns a single row

      const sectionId = categoryData.section_id;

      // Fetch data from podcast_shows table based on section_id
      connection.query('SELECT title, author FROM podcast_shows WHERE section_id = ?', [sectionId], (err, showResults) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }

        const showData = showResults[0]; //the query returns a single row

        const podcastCard = {
          showId: showId,
          coverUrl: categoryData.cover_url,
          title: showData.title,
          author: showData.author
        };

        res.json(podcastCard);
      });
    });
  });
});

});

app.get('/section/shows', (req, res) => {
  const userId = req.query.userId; //userId is passed as a query parameter

  // Fetch podcast followings data for the given user
connection.query('SELECT * FROM podcast_followings WHERE user_id = ?', [userId], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }

  const podcastFollowings = results; //the query returns an array of podcast followings

  // Loop through the podcast followings to retrieve additional data
  const podcastCards = podcastFollowings.map((following) => {
    const showId = following.show_id;

    // Fetch data from podcast_categories table based on show_id
    connection.query('SELECT cover_url, section_id FROM podcast_categories WHERE show_id = ?', [showId], (err, categoryResults) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      const categoryData = categoryResults[0]; //the query returns a single row

      const sectionId = categoryData.section_id;

      // Fetch data from podcast_shows table based on section_id
      connection.query('SELECT title, author FROM podcast_shows WHERE section_id = ?', [sectionId], (err, showResults) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }

        const showData = showResults[0]; // Assuming the query returns a single row

        const podcastCard = {
          showId: showId,
          coverUrl: categoryData.cover_url,
          title: showData.title,
          author: showData.author
        };

        res.json(podcastCard);
      });   
    });
  });
});

});



