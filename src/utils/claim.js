class Input {
  constructor() {
    this.claim = '';
    this.articles = [];
  }

  getClaim = () => {
    return this.claim;
  }

  setClaim = (claim) => {
    this.claim = claim;
  }

  setArticles = articles => {
    this.articles = articles;
  }

  getArticles = () => {
    return this.articles
  }
}

const singleton = new Input();

export default singleton;