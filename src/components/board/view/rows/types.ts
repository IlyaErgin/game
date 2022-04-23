export interface IOwnProps {
    xIsNext: boolean;
    onChangeNext(value: boolean): void;
    onChangeStatus(value: string): void;
}