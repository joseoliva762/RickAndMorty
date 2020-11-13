const getData = async (apiURL: string) => {
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('Fetch Error, ', error);
    }
};

export default getData;
