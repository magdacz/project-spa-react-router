import React from 'react';
import Article from '../components/Article';

const articles = [
    {
       id: 1,
        title: "Pakiet Family",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh nulla. Vestibulum vehicula sem et neque volutpat ultricies. Aenean gravida nibh sed mauris maximus, at commodo libero gravida. Ut tincidunt est quis maximus tristique.'
    },
    {
       id: 2,
        title: "Pakiet ForYou",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh nulla. Vestibulum vehicula sem et neque volutpat ultricies. Aenean gravida nibh sed mauris maximus, at commodo libero gravida. Ut tincidunt est quis maximus tristique.'
    },
    {
       id: 3,
        title: "Pakiet Mix",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut nibh nulla. Vestibulum vehicula sem et neque volutpat ultricies. Aenean gravida nibh sed mauris maximus, at commodo libero gravida. Ut tincidunt est quis maximus tristique.'
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    
    return (
        <div className='home'>
            {artList}
        </div>
    )
    
}

export default HomePage;