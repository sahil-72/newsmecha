import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className='container m-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '15rem' }} />
                    <div className="card-body">
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%'}}>
                               {source}
                        </span>

                        <h5 className="card-title">{title.slice(0, 50)}</h5>
                        <p className="card-text">{description.slice(0, 90)}</p>
                        <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">More</a>
                    </div>
                </div>
            </div>
        )
    }
}
