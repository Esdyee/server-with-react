interface ILabelProps {
    htmlFor: string;
    children: string;
}

const NewLabel = ({ htmlFor, children }: ILabelProps) => {
    return (
        <label className={"text-sm text-primary"}
        htmlFor={htmlFor}>{children}</label>
    )
}

export default NewLabel;

