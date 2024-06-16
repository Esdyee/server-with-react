import useNetwork from "../../hook/useNetwork";

const CheckNetwork = () => {
    const { isOnline } = useNetwork();
    return (
        <div className="App">
            <p>통신상태: {isOnline ? "온라인" : "오프라인"}</p>
        </div>
    );
};

export default CheckNetwork;
