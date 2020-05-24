import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Header from '../components/Header';

const Organization = (props) => {
    const sections = [
        { title: 'Volunteer', url: '#' },
        { title: 'Donate', url: '#' },
        { title: 'Contact', url: '#' },
      ];
    return ( 
        <>
        <CssBaseline />
        <Container waxWidth="lg">
            <Header sections={sections}/>
        </Container>
        </>
     );
}
 
export default Organization;