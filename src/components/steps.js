import React from 'react';

const Steps = () => {
    return (
        <div>
            <p><strong>Steps to build a Github API search app.</strong></p>
            <ol>
                <li>App component</li>
                <li>Action creator: fetch data</li>
                <li>Reducer: modify state</li>
                <li>Pass data to main component</li>
                <li>Search functionality: updates this.state.userName and calls fetch data methods again</li>
            </ol>
        </div>
    );
};

export default Steps;