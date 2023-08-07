import React, { FC } from 'react';

export const StockLayout:FC<{ data: string }> = ( { data } ) => {
    return (
        <div>
            { data }
        </div>
    );
};
