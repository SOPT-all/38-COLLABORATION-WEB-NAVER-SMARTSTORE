interface SidebarSubTitleProps {
  text: string;
}

const SidebarSubTitle = ({ text }: SidebarSubTitleProps) => {
  return (
    <div
      className={
        'body-md-12 text-gray flex h-[4rem] w-[18.6rem] items-center px-[1.6rem]'
      }
    >
      {text}
    </div>
  );
};

export default SidebarSubTitle;
