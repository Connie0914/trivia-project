export type Props = {
  className?: string;
  labelText: '放送中' | '放送前・エンジビア募集中' | '放送済み';
};

export const Label = (props: Props): JSX.Element => {
  const { className, labelText } = props;

  return <span className={className}>{labelText}</span>;
};
