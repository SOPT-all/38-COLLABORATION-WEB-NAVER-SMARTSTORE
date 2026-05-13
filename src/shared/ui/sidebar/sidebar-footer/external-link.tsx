import { IcArrowDiagonal } from '@shared/assets/icons';

interface ExternalLinkProps {
  text: string;
}
const ExternalLink = ({ text }: ExternalLinkProps) => {
  return (
    <div className='body-md-14 flex items-center text-white'>
      {text}
      <IcArrowDiagonal />
    </div>
  );
};

export default ExternalLink;
