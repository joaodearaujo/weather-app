export interface StandardButtonProps {
    buttonName: string;
    style?: React.CSSProperties; // '?' torna o uso da propriedade opicional 
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; }