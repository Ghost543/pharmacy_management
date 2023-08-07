import React, { FC } from 'react';

export const OrdersLayout:FC<{ data: string }> = ( { data } ) => {
    return (
        <div>
            { data }
        </div>
    );
};
