import React from 'react';
import { connect } from 'react-redux'; 
import './home.css';

function Home() {
    return (
            <p style={{fontSize: 64} }>
                wassup bitches
            </p>
    );
}   
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(Home) 