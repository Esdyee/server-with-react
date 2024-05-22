import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
    errorMessage?: string;
    iconPath: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}

const DefaultTextField = ({
    errorMessage,
    iconPath,
    onIconClick,
    placeholder,
    onChange,
    value,
}: DefaultTextFieldProps) => {
    return (
        <div>
            <input placeholder={placeholder} type="text" value={value} onChange={onChange} />
            <IconButton
                alt="delete-icon"
                iconPath={iconPath}
                onClick={onIconClick}
            />
            <ErrorMessage>{errorMessage || ' '}</ErrorMessage>
        </div>
    );
};

export default DefaultTextField;
