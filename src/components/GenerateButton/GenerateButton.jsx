import React from 'react';
import { connect } from 'react-redux'; 
import { useSelector} from 'react-redux';
import './GenerateButton.css';

function GenerateButton() {
    const generateInput = useSelector((state) => state.generateInput.generateInput)
    
    const handleInput = () => {
        console.log(generateInput);
    }

    return (
            <button
                className='generateButton'
                onClick={handleInput}>Generate Hashtags
            </button>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(GenerateButton) 