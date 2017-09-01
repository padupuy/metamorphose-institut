const news = document.querySelector('#news');

function displayLastNewsFromFb(response) {
  if (response.data && response.data.length) {
    let html = [];

    response.data.forEach(function(article) {
      const date = new Date(article.created_time).toLocaleDateString('fr', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      html.push(`
      <div class="news-item">
        <div class="news-tile">
          <a href="${article.permalink_url}">
            <img src="${article.full_picture}" />
            <p>publié le ${date}</p>
          </a>
        </div>
      </div>
      `);
    });

    news.innerHTML = html.concat('');
  }
}

function getLastNewsFromFb() {
  FB.api(
    '/1843930745879894/posts',
    'GET',
    {
      fields: 'message,full_picture,created_time,permalink_url',
      limit: '4',
      access_token: '115560899109718|F0shh7yDTlpDRgDMXY8gJx8IEvk'
    },
    displayLastNewsFromFb
  );
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '115560899109718',
    xfbml: false,
    version: 'v2.10'
  });
  FB.AppEvents.logPageView();

  if (news) {
    getLastNewsFromFb();
  }
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/fr_FR/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
