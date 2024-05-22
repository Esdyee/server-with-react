interface IconButtonProps {
    alt: string;
    iconPath: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ alt, iconPath, onClick }: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={'bg-transparent p-2 border-none outline-none'}
        >
            <img alt={alt} src={iconPath} />
        </button>
    );
};

export default IconButton;
