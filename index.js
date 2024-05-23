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
