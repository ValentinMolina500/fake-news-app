import React from 'react';
import icon from "../imgs/paperboy.png"
import Input from '../utils/claim';
import paperboy from "../imgs/paperboy.png"
import paperboy_F from "../imgs/paperboy_false.png"

class SummaryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      sentiments: [],
      result: ''
    }
  }

  componentDidMount() {
    let val;
    let q = Input.getClaim().trim();
    if (q) {
      fetch("https://newsapi.org/v2/everything?q=" + q + "&apiKey=b0fa5063d2a4494db80d88f2d3dcfe38", {mode: 'cors'})
      .then((res) => res.json())
      .then(vals => {
        val = vals
        // let sentiments = [];
        let docs = {
          "documents": []
        }
        if (val.articles && val.articles.length != 0) {
          for (let i = 0; i < val.articles.length; i++) {
          docs["documents"].push({
            "language": "en",
            "id": i,
            "text": val.articles[i].description
          })


          }


          // fetch('https://crimsoncode2020.cognitiveservices.azure.com/text/analytics/v2.1/sentiment', docs)
          fetch('https://crimsoncode2020.cognitiveservices.azure.com/text/analytics/v2.1/sentiment', {
            method: 'post',
            
            headers: new Headers({
              'Ocp-Apim-Subscription-Key' : 'f15f20ca2f114ff6938d75e6a47528c6',
              'Content-Type': 'text/json'
            }),
            body: JSON.stringify(docs)
          })
            .then((res) => res.json())
            .then((res) => {
              let agree = 0;
              let disagree = 0;
              for (let i = 0; i < res.documents.length; i++) {
                if (res.documents[i].score > 0.5) {
                  agree++
                } else {
                  disagree++;
              }
              let result = '';
              if (agree > disagree) {
                result = "TRUE"
              } else {
                result = "FALSE"
              }
              let obj = { articles: val.articles, sentiments: res, result: result}

              this.setState(obj)
            }
            })
            // .then((res) => console.log(res))
        }
      })
      // .then(val => this.setState({ articles: val.articles }))
      .catch(() => console.log('error'))
    }
  
  }

  buildTable = () => {
    if (this.state.articles == undefined || !this.state.articles) {
      return;
    }


    return this.state.articles.map((val, index) => {
      let r = this.getRndInteger(0, 2)
      return (
        <tr>
          <td>{val.source.name}</td>
          <td><a href={val.url} target="_blank">{val.title}</a></td>
          {/* <td>{r ? 'Agree' : 'Disagree'}</td> */}
          <td>{this.state.sentiments.documents[index].score > 0.5 ? 'Agree' : 'Disagree'}</td>
        </tr>
      )
    })
  }
  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  render() {
    let random = this.getRndInteger(0, 2);
    return (
      <div id="summary-page">
        <img id="paperboy" src={this.state.result == "TRUE" ? paperboy : paperboy_F} />
        <div id="heading-wrapper">
  
        
        </div>
        <div id="sections">
          <div id="summary-first-section">
            <div className="center">
                <h1 id="claim">{Input.getClaim()}</h1>
            </div>
          </div>
          <div id="summary-second-section">
            <div className={["center", this.state.result == "TRUE" ? 'real' : 'fake'].join(" ")}>
              <h1 id="result">{this.state.result}</h1>

            </div>
          </div>

          
        </div>
        
  
        <div id="article-table">
          <table id="main-table">
            <tr>
              <th>Source</th>
              <th>Article</th>
              <th>Stance</th>
            </tr>
            {this.buildTable()}
            {/* <tr>
              <td>Wikipedia</td>
              <td><a href="https://en.wikipedia.org/wiki/Africa" target="_blank">Africa is not real</a></td>
              <td>Deny</td>
            </tr>
            <tr>
              <td>Brittanica</td>
              <td>Why Africa is one of the best continents in the world</td>
              <td>Support</td>
            </tr>
            <tr>
              <td>AP News</td>
              <td>Why free healthcare is good</td>
              <td>Unrelated</td>
            </tr>
            <tr>
              <td>AP News</td>
              <td>Why free healthcare is good</td>
              <td>Discuss</td>
            </tr>
            <tr>
              <td>AP News</td>
              <td>Why free healthcare is good</td>
              <td>Unrelated</td>
            </tr>
            <tr>
              <td>AP News</td>
              <td>Why free healthcare is good</td>
              <td>Unrelated</td>
            </tr> */}
          </table>
        </div>
      </div>
  )
    }
}

export default SummaryPage;

