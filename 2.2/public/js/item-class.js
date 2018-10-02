class Feed extends EventTarget {
    constructor(feed) {
        super();
        this.text = feed.name;
        this.url = feed.url;
        this.el = document.createElement('a');
        this.el.classList.add('list-group-item', 'list-group-item-action');
        this.el.href = this.url;
        this.el.innerHTML = this.text;
        this.el.addEventListener('click', (e) => {
            e.preventDefault();

            let event = new CustomEvent('activate');

            this.dispatchEvent(event);
        });
    }

    set active(value) {
        let method = value ? 'add' : 'remove';

        this.el.classList[method]('active');
    }

    render() {
        return this.el;
    }
}