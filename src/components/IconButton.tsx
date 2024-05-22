interface IconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ alt, iconPath, onClick }: IconButtonProps) => {
  return <button onClick={onClick}><img alt={alt} src={iconPath} /></button>;
}

export default IconButton;
