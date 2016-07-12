var articles = [];

function Article (opts) {
  // TODO: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = function () { //defines ".toHtml" to "Article" just this one time; Reference.
  var $newArticle = $('article.template').clone(); //"var $whatever" will contain a jQuery object.
  $newArticle.removeClass();
  $newArticle.attr('data-category', this.category);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('a').text(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('time').attr('pubdate', this.publishedOn);
  $newArticle.find('section.article-body').html(this.body);

  //TODO: Now use jQuery to fill in the rest of the current template clone with properties from this particular Article instance.
  //We need to fill in:
  //1. author name
  //2. author url
  //3. article title
  //4. article body
  //5. and publication date.

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  //TODO: This clone article is no longer a template, as it now has real data attached to it! We need to
  //account for that before this current article gets rendered to our DOM.

  return $newArticle;
};

ourLocalData.sort(function(a,b) { //check about .sort() on MDN
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) { //"ele" refers to each of the elements in local data; Placeholder.
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
