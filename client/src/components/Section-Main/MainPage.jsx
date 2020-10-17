import React from 'react';
import MainLayout from './Partials/MainLayout';

export default function MainPage(props) {
    return (
        <MainLayout history={props.history}>
            MainPage
        </MainLayout>
    )
}