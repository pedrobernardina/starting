import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface DropdownItemProps {
  label: string;
  href: string;
}

export interface ColumnMenu {
  icon?: AvailableIcons;
  title?: string;
  nested?: MenuLink[];
}

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  columns?: ColumnMenu[];
  tag?: {
    color: string;
    description: string;
  };
}

function DropdownItem({ href, label, tag }: MenuLink) {
  const variants = {
    rounded: "",
  };

  return (
    <div class="flex flex-row items-center justify-between">
      <a
        href={href}
        class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-black/5 rounded"
      >
        <p class="font-sans not-italic font-normal text-[15px] text-[#fff] flex-grow flex gap-[8px] items-center whitespace-nowrap">
          {label}
          {tag?.description && tag?.color &&
            (
              <div
                class="font-semibold uppercase flex justify-center items-center px-[4px] py-[2px] text-[6px] rounded-[26.5px] text-[#000]"
                style={{ backgroundColor: tag.color, lineHeight: "normal" }}
              >
                {tag.description}
              </div>
            )}
        </p>
      </a>
    </div>
  );
}

export interface Props {
  open: boolean;
  onClick: () => void;
  columns: ColumnMenu[];
  value: string;
  variant?: "rounded" | "flat";
}

export function Dropdown({
  open,
  onClick,
  columns,
  value,
  variant = "flat",
}: Props) {
  const variants = {
    rounded: {
      open: "md:text-[#fff] md:border-[#06E474] md:border",
      default:
        "select-none hidden md:flex gap-2 items-center text-[#06E474] border-[transparent] rounded-full border md:hover:border-[#2FD180] md:hover:border md:hover:rounded-full focus:outline-none md:transition md:ease-in-out md:duration-300",
    },
    flat: {
      open: "text-[#fff]",
      default:
        "relative flex text-white text-opacity-80 items-center h-full px-[20px] self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 transition-colors ease-in duration-300 justify-centerp",
    },
  };

  const variantClass = variants[variant];

  return (
    <div class={`group/item ${variantClass.default}`}>
      <div
        onClick={onClick}
        class={`group-hover/item:font-bold group-hover/item:text-white z-10 md:py-1 font-normal text-[16px] flex items-center justify-center gap-[5px] cursor-pointer`}
      >
        {value}
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L3.84921 3.94218C4.2237 4.26317 4.7763 4.26317 5.15079 3.94218L8 1.5"
            class="group-hover:border-[#fff] stroke-current"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        onClick={onClick}
        class={`${
          open
            ? "block cursor-pointer w-[110vw] h-[110vh] absolute left-[-90vw] top-[-20px]"
            : "hidden"
        }`}
      >
      </div>
      <div
        class={`opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto ${
          variant === "flat" ? "top-[48px]" : "top-[35px]"
        } z-30 absolute left-0 pt-5 rounded`}
      >
        <div class="flex flex-row gap-[48px] rounded-lg bg-white/5 backdrop-blur-xl border border-[#FFFFFF33] p-6">
          {columns.map((col, index) => (
            <>
              <div>
                {col.icon && col.title &&
                  (
                    <div class="pb-[24px] flex">
                      <Icon id={col.icon} size={20} />
                      <p class="pl-[8px] font-bold text-[16px] text-white">
                        {col.title}
                      </p>
                    </div>
                  )}
                {col.nested?.map((item) => <DropdownItem {...item} />)}
              </div>
              {columns.length - 1 > index &&
                <div class="w-[1px] bg-[#162121] h-[300px]"></div>}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
