(() => {
    let app = {
        articles: new ArticleContainer('#article-list-container'),
        feeds: new FeedContainer('#feed-list-container'),
        init() {
            this.feeds.addEventListener('selectedItemChanged', (e) => {
                this.loadFeed(e.detail);
            });

            this.fetchFeeds();
        },
        fetchFeeds() {
            axios.get('/js/feeds.json').then((res) => {
               this.loadFeeds( res.data);
            });
        },
        loadFeeds(feeds) {
            this.feeds.loadItems(feeds);
        },
        loadFeed(feed) {
            let proxy = 'https://cors-anywhere.herokuapp.com/';
            let parser = new RSSParser();

            parser.parseURL(`${proxy}${feed.url}`).then((result) => {
                this.articles.loadItems(result.items);
            });
        }
    };


    app.init();
})();