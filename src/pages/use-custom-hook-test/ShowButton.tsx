import useNetwork from "../../hook/useNetwork";

const ShowButton = () => {
    const { isOnline } = useNetwork();
    return (
        <button 
            disabled={!isOnline}
            style={{ all: 'revert' }}
        >
            {isOnline ? '통신가능' : '통신불가능'}
        </button>
    );
};

export default ShowButton;


