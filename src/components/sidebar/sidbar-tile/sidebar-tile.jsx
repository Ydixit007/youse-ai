export const SidebarTile = ({ active = false, label, ...props }) => {
  return (
    <div className={"flex gap-2 items-center cursor-pointer"}>
      <div
        className={
          active ? "w-2 h-8 bg-[#6681c0] rounded-r-lg" : "w-2 h-8 rounded-r-lg"
        }
      />
      <div
        className={
          active
            ? "flex gap-2 items-center text-[#6681c0] w-[100%] duration-200 bg-[#191f29] p-2 rounded-md"
            : "flex w-[100%] gap-2 items-center text-[white] p-2 duration-200 rounded-md hover:bg-[#191f29]/80"
        }
      >
        {props.children}
        <p
          className={
            active
              ? "text-[#6681c0] text-sm font-normal"
              : "text-[white] text-sm font-normal"
          }
        >
          {label}
        </p>
      </div>
    </div>
  );
};
