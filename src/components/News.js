import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            loading: false,
            nextPage: ''
        }
    }

    async componentDidMount() {
        const url = `https://newsdata.io/api/1/latest?apikey=pub_449779ba34b500c588b45ab20d1cfe3aedf67&size=1&country=us&category=${this.props.category}`
        this.props.setProgress(30);
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json()
        this.setState({
            results: parsedData.results,
            loading: false,
            nextPage: parsedData.nextPage
        })
        console.log(parsedData.nextPage)
        this.props.setProgress(100);
    }

        handleNext = async () => {
        const url = `https://newsdata.io/api/1/latest?apikey=pub_449779ba34b500c588b45ab20d1cfe3aedf67&size=1&country=us&category=${this.props.category}&page=${this.state.nextPage}`
        this.props.setProgress(30);
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json()
        this.setState({
            results: parsedData.results,
            nextPage: parsedData.nextPage,
            loading: false
        })
        this.props.setProgress(100);
    }

    render() {

        return (
            <div className='container my-2'>
                <h2 className='text-center m-4' >Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.results.map((element) => {
                        return <div className='col-lg-4 col-sm-6'><NewsItem title={element.title ? element.title : ''} source={element.source_id} author={element.creator ? element.creator : 'Unknown'} date={element.pubDate} description={element.description ? element.description : ''} imageUrl={element.image_url ? element.image_url : 'https://storage.googleapis.com/afs-prod/media/e24788fba8c94b5d8ca9329e1bea29eb/3000.jpeg'} newsUrl={element.link} /></div>

                    })}
                </div>
                <div className='container mt-3 d-flex justify-content-center'>
                    <button type="button" class="btn btn-dark" onClick={this.handleNext}>Next</button>
                 </div>
            </div>

        )

    }
}
