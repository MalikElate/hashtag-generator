import React from 'react';
import { connect } from 'react-redux'; 
import './results.css';

function Results() {
    return (
            <p>
                sugma
            </p>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(Results) 