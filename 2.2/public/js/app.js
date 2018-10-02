(() => {
    let app = {
        feeds: new ItemContainer('#feed-list-container'),
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
            // TODO: get feed load articles
        }
    };


    app.init();
})();