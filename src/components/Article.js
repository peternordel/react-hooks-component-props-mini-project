import React from 'react';

export default function Article ({ title, date = 'January 1, 1970', preview, minutes }) {
    let timeText = ''

    if(minutes < 30) {
        for (let i = 0 ; i < (minutes / 5) ; i++) {
            timeText = timeText + '☕️'
        }
    } else {
        for (let i = 0 ; i < (minutes / 10) ; i++) {
            timeText = timeText + '🍱'
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date + ' · ' + timeText + ' ' + minutes + 'min read'}</small>
            <p>{preview}</p>
        </article>
    )
}