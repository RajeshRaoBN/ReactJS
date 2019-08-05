import React from 'react';

const SeriesList = (props) => {
    return (
        <div style={{
            display:'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <ul>
                {props.list.map(series=>(
                    <li>{series.show.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;