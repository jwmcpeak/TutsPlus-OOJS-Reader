class Feed {
    constructor(feed) {
        this.text = feed.name;
        this.url = feed.url;
        this.el = document.createElement('a');
        this.el.classList.add('list-group-item', 'list-group-item-action');
        this.el.href = this.url;
        this.el.innerHTML = this.text;
        this.el.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }

    render() {
        return this.el;
    }
}