import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import withDataFetching from '../withDataFetching';

const FeedWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const Feed = ({ data }) => {
    return (
        <FeedWrapper>
            {data.items.map(item => <Card
                key={item.question_id}
                data={item}
            />)}
        </FeedWrapper>
    )
}

export default withDataFetching(Feed);
