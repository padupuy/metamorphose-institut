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
      let content = article.message || '';
      content = content.length > 190 ? `${content.substr(0, 187)}...` : content;

      html.push(`
      <div class="news-item">
        <img src="${article.full_picture}" />
        <div class="news-tile">
          <a href="${article.permalink_url}">
              <p class="news-date text-secondary">publié le ${date}</p>
              <p class="news-content text-secondary">${content}</p>
            </a>
        </div>
      </div>
      `);
    });

    news.innerHTML = html.join('');
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
