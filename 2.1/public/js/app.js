(() => {
    let app = {
        feeds: new ItemContainer('#feed-list-container'),
        init() {
            this.fetchFeeds();
        },
        fetchFeeds() {
            axios.get('/js/feeds.json').then((res) => {
               this.loadFeeds( res.data);
            });
        },
        loadFeeds(feeds) {
            this.feeds.loadFeeds(feeds);
        }
    };


    app.init();
})();