import {Dispatch, SetStateAction} from "react";
export interface GraphViewProps{
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    type:string;
}
export interface HeaderProps {
    visible: boolean;
    setVisible:Dispatch<SetStateAction<boolean>>;
    type:string;
    setType:Dispatch<SetStateAction<string>>;
}
export interface NodeProps{
    depth:number;
    nodeId:string;
    name:string;
    version:string;
}
export interface EdgeProps{
    edgeId:string;
    source:NodeProps;
    target:NodeProps;
}
export interface GraphProps {
    NodeList:NodeProps[];
    EdgeList:EdgeProps[];
}
export interface TreeProps {
    treeId:string;
    name:string;
    version:string;
    children?:TreeProps[];
}
