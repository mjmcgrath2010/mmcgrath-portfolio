import React from 'react';
import Grid from '../Grid';

export default {
    title: 'Components/Grid',
    component: Grid,
    argTypes: {},
    parameters: {}
};

export const DefaultStory = ({ ...rest }) => <Grid {...rest} />;

DefaultStory.args = {};

DefaultStory.storyName = 'Grid - Default Story';