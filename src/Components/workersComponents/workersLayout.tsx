import React, { FC } from 'react';

export const WorkersLayout:FC<{ data: string }> = ( { data } ) => {
    return (
        <div>
            { data }
        </div>
    );
};
