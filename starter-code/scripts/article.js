var articles = [];

function Article (opts) {
  // DONE: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
  console.log('successfully calling construtor');
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  console.log('just cloned article.template');

  /* DONE */
  /* assign all elements that need to be assigned */
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))) + ' days ago');
  $newArticle.find('address').html(this.author);
  $newArticle.find('address a').attr('href', this.authorUrl);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('h1').append('<h6> ' + this.category + ' </h6>');
  $newArticle.find('section.article-body').html(this.body);

  /* DONE : The clone article is no longer a template for it has real data
  attached to it. We need to account for that before this current article
  gets rendered to our DOM */
  $newArticle.removeClass('template');
  return $newArticle;
};

ourLocalData.sort(function(a, b){
  return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
