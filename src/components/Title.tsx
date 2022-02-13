// @flow 
import * as React from 'react';
type TitleProps = {
    
};
export const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className='text-5xl loading-normal'>
            {props.children}
        </h1>
    );
};