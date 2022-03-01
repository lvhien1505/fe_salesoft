import addressApi from 'apis/addressApi';

const Test = () => {
    const onClick = async () => {
        try {
            const res = await addressApi.search('Y');
            console.log(res)
        } catch (error) {
            console.log(error,"aaa");
        }
    };
    return (
        <div>
            <button onClick={onClick}>Oke</button>
        </div>
    );
};

export default Test;
