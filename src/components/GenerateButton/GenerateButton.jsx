import React from 'react';
import { connect } from 'react-redux'; 
import { useSelector} from 'react-redux';
import './GenerateButton.css';
import axios from 'axios';

function GenerateButton() {
    const generateInput = useSelector((state) => state.generateInput.generateInput)
    
    const handleInput = (e) => {
        e.preventDefault();
        console.log(generateInput);
        console.log("hello world") 
        axios.request(options).then(function (response) {
            console.log(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${generateInput}`,
      headers: {
            'X-RapidAPI-Key': 'f49ea7b26dmshf4c6c7c7de52953p12352ajsn1f7596e73fb2',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    return (
            <button
                className={generateInput == ''? 'generateButtonInvalid' : 'generateButtonValid'}
                onClick={handleInput}>Generate Hashtags
            </button>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(GenerateButton) 