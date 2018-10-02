class ItemContainer {
    constructor(selector) {
        this.el = document.querySelector(selector);
        this.items = [];
    }

    loadFeeds(feeds) {
        feeds.forEach(feed => {
            let obj = new Feed(feed);
            this.items.push(obj);

            this.el.appendChild(obj.render());
        });
    }
}