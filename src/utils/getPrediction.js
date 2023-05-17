import axios from 'axios';

const predictionEndPoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/predict";
const testEndPoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/test";
const getPrediction = async (data) => {
    try {
        console.log(predictionEndPoint);
        const url = `${predictionEndPoint}`;
        const response = await axios({
            method: 'post',
            url: url,
            data: {
                text: data
            }
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getPrediction;