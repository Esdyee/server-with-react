interface IErrorMessageProps {
    children: string;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
    return (
        <p className="text-sm text-error" style={{ color: '#c43d3d' }}>
            {children}
        </p>
    );
};

export default ErrorMessage;

