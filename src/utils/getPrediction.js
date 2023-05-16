import axios from 'axios';

const predictionEndPoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/predict";
const testEndPoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/test";
const getPrediction = async (data) => {
    try {
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



// const fakePrediction = async (data) => {
//     const response = await {
//         data: {
//             result: "Hello World"
//         }
//     }
//     return response.data;
// }


export default getPrediction;