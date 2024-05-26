import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults : null,
            loading: false
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8dce03bbb96c45fc9fc871d536fc6fa6&category=${this.props.category}&pageSize=20&page=${this.state.page}`
        this.props.setProgress(30);
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    handleNext = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8dce03bbb96c45fc9fc871d536fc6fa6&pageSize=20&page=${this.state.page + 1}`
        this.props.setProgress(30);
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
            loading: false
        })
        this.props.setProgress(100);
    }

    handlePrevious =  async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8dce03bbb96c45fc9fc871d536fc6fa6&pageSize=20&page=${this.state.page - 1}`
        this.props.setProgress(30);
        this.setState({loading: true })
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: this.state.page - 1,
            loading: false
        })
        this.props.setProgress(100);
    }

    render() {

        return (
            <div className='container my-2'>
                <h2 className='text-center m-4' >Top Headlines</h2>
                { this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-lg-4 col-sm-6'><NewsItem title={element.title ? element.title : ''} source={element.source.name} author={element.author?element.author:'Unknown'} date={element.publishedAt} description={element.description ? element.description : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://storage.googleapis.com/afs-prod/media/e24788fba8c94b5d8ca9329e1bea29eb/3000.jpeg'} newsUrl={element.url} /></div>

                    })}
                </div>
                <div className='container mt-3 d-flex justify-content-between'>
                    <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNext}>Next</button>
                </div>
            </div>
        )
    }
}
