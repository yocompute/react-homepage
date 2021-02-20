import React from 'react';
import Header from './Header';
// import Routes from '../Routes';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

const LayoutNone = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export { Layout, LayoutNone };