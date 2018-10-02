class ItemContainer extends EventTarget {
    constructor(selector) {
        super();
        this.el = document.querySelector(selector);
        this.items = [];
    }

    itemFactory(item) {

    }

    loadItems(items) {
        this.items = [];
        this.el.innerHTML = '';
        
        items.forEach(item => {
            let obj = this.itemFactory(item);
            this.items.push(obj);

            obj.addEventListener('activate', (e) => {
                this.setActiveItem(e.target);
            })

            this.el.appendChild(obj.render());
        });
    }

    setActiveItem(item) {
        this.items.forEach(thing => {
            thing.active = thing === item;
        });

        let event = new CustomEvent('selectedItemChanged', { detail: item});
        this.dispatchEvent(event);
    }
}

class FeedContainer extends ItemContainer {
    constructor(selector) {
        super(selector);
    }

    itemFactory(item) {
        return new Feed(item);
    }
}

class ArticleContainer extends ItemContainer {
    constructor(selector) {
        super(selector);
    }

    itemFactory(item) {
        return new Article(item);
    }
}