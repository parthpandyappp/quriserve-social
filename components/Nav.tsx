import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex gap-0.5 items-center bg-[#101010] h-[70px] py-[22px] px-[23px]">
      <div className="w-[32px] h-[32px]">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
      </div>
      <h1 className="text-[20px] font-bold text-white">Quriverse</h1>
    </nav>
  );
};

export { Nav };
