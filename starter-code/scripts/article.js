var articles = [];

function Article (opts) {
  // Done: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = funtion() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  $('h1:contains("Title")').text(this.title);
  $newArticle.attr('href', this.authorURL);
  $('a:contains("Author Name")').text(this.author);
  $('time:contains("Publish Time")').text(this.publishedOn);
  $('.article-body').text(this.body);

  /*TODO: Now use jQuery to fill in the rest of the current template clone with properties from this particular Article instance.
  We need to fill in:
  1.author name,
  2. author url,
  3. article title
  4. article body, and
  5. publication date. */

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  /* DONE: This clone article is no longer a template, as it now has real data attached to it!
  We need to account for that before this current article gets rendered to our DOM */
  $newArticle.attr('class', 'blog_entry');

  return(newArticle);
};

ourLocalData.sort(fucntion(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
