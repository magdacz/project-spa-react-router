import React from 'react';

const Article = (props) => {
    
    const styles = {
        marginTop: 40
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: 'uppercase'
        }}>{props.title}</h3>
            <p style={{fontSize: 15}}>{props.text}</p>
        </article>
    )
}

export default Article;