//wait the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button-toggle').addEventListener('change', function () {
      if (this.checked) {
          document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
          document.body.style.color = 'hsl(230, 17%, 14%)';
          document.querySelectorAll('.nathan-facebook,.nathan-twitter, .nathan-ig,.nathan-youtube,.page-views,.likes-facebook,.likes-ig,.profile-ig,.retweets,.likes-twitter,.likes-youtube,.views-youtube').forEach(card => {
              card.style.backgroundColor = 'hsl(227, 47%, 96%)';
              card.style.color = 'hsl(230, 17%, 14%)';
          });
      } else {
          document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
          document.body.style.color = 'hsl(0, 0%, 100%)';
          document.querySelectorAll('.nathan-facebook,.nathan-twitter, .nathan-ig,.nathan-youtube,.page-views,.likes-facebook,.likes-ig,.profile-ig,.retweets,.likes-twitter,.likes-youtube,.views-youtube').forEach(card => {
              card.style.backgroundColor = 'hsl(228, 28%, 20%)';
              card.style.color = 'hsl(0, 0%, 100%)';
          });
      }

  });

  // fetching data from json server
  const fetchData = async() =>{
      await fetch('localhost:8000/')
      .then((response) =>response.json())
      .then((data) =>{
        console.log(data);
      }).catch((error) =>{
        console.log(error);
      })
}
fetchData();

  //consuming the git api
  let username = document.querySelector('.ig-username')
  // Define the async function to fetch user data from GitHub
async function fetchGitHubUserData(GITHUB_ACCESS_TOKEN) {
  // GitHub API endpoint for fetching authenticated user details
  const apiUrl = 'https://api.github.com/user';

  try {
      // Fetch user details from GitHub API
      const response = await fetch(apiUrl, {
          headers: {
              'Authorization': `token ${GITHUB_ACCESS_TOKEN}`
          }
      });

      // Check if the response is ok (status code 200)
      if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Extract the user's name and follower count
      const userName = data.login;
      const followerCount = data.followers;

      // Display the user's name and follower count
      username.innerHTML = `@${userName}`
      console.log(`GitHub Username: ${userName}`);
      console.log(`GitHub Followers: ${followerCount}`);

      

      // Optionally, return the data if needed elsewhere
      return { userName, followerCount };
  } catch (error) {
      // Handle errors
      console.error('Error fetching GitHub user details:', error);
  }
}

// Call the function with your GitHub personal access token
// const accessToken = 'YOUR_ACCESS_TOKEN';
fetchGitHubUserData(GITHUB_ACCESS_TOKEN);


  //fetch data from the  facebook graph api
  const FACEBOOK_ACCESS_TOKEN = 'EAAVjlNwVHVIBOxOQzWS7nZBNuiElZCKSjNrJo4SsIMDfW5Dj4vphfCyDIE0Np6ii7YpnLOt8UZCPgav1l8jQ2zOZAEZCZCtVMuSlIq4k22K6U6IGZBBKDkDItka8nwUeZBMtuJg9MjQco4veezPD4X4bmdn5ds0zOtHs30Wr8642fcneZCTxKHxRzZAZAAgVq14ZCFxcfEH4I1uHXYLFJ56J65g1dLNZAtA1L7f4sPIgDZBT3waAxMQJDrLa6TyNZAhBwJc3wZDZD';
  const TWITTER_BEARER_TOKEN = 'your_twitter_bearer_token';

  async function fetchFacebookData() {
      try {
          const response = await fetch(`https://graph.facebook.com/v12.0/me?access_token=${FACEBOOK_ACCESS_TOKEN}`);
          const data = await response.json();
          console.log(data);
          document.getElementById("platform-name").innerText = data.name
          
      } catch (error) {
          console.error('Error fetching Facebook data:', error);
      }
  }

  fetchFacebookData(); 

      
})

const FACEBOOK_ACCESS_TOKEN = 'EAAVjlNwVHVIBOxOQzWS7nZBNuiElZCKSjNrJo4SsIMDfW5Dj4vphfCyDIE0Np6ii7YpnLOt8UZCPgav1l8jQ2zOZAEZCZCtVMuSlIq4k22K6U6IGZBBKDkDItka8nwUeZBMtuJg9MjQco4veezPD4X4bmdn5ds0zOtHs30Wr8642fcneZCTxKHxRzZAZAAgVq14ZCFxcfEH4I1uHXYLFJ56J65g1dLNZAtA1L7f4sPIgDZBT3waAxMQJDrLa6TyNZAhBwJc3wZDZD';
const GITHUB_ACCESS_TOKEN = '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';

//     const TWITTER_BEARER_TOKEN = 'your_twitter_bearer_token';

async function fetchFacebookData() {
  try {
      const response = await fetch(`https://graph.facebook.com/v12.0/me?access_token=${FACEBOOK_ACCESS_TOKEN}`);
      const data = await response.json();
      console.log(data);
      document.getElementById("platform-name").innerText = data.name
      
  } catch (error) {
      console.error('Error fetching Facebook data:', error);
  }
}
// fetchFacebookData();
