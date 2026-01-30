import { ReactNode } from "react";

export  interface BigCardProps {
    title: string;
    children: ReactNode;
    img: string;
    style?: React.CSSProperties; // Use para qualquer propriedade css
}