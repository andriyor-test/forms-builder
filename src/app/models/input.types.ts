export interface InputType {
  title: string;
  value: string;
  options: InputOption[];
}

interface InputOption {
  title: string;
  validator: string;
}
