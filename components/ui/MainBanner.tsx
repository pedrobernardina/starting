import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description Ativar thema dark para esta página */
  themeDark: boolean;
  mainText: string;
  descriptionText: string;
  activePercentualCarrosel?: boolean;
  buttonCta1: {
    buttonName: string
    href: string
  };
  buttonCta2: {
    buttonName: string
    href: string
  };

  miniBanner: bannerProps;
  /** @description Default: 13.2vw */
  mobileH1Size?: string,
}

export interface bannerProps{
  titleText:string,
  linkedText: string,
  bannerTopImage: LiveImage,
  altBannerTopImage: string,
  bannerBottomImage: LiveImage,
  altBannerBottomImage: string,
}


export default function MainBanner({ themeDark, mainText, descriptionText, activePercentualCarrosel, buttonCta1, buttonCta2, miniBanner, mobileH1Size = '13.2vw'}: Props) {

  const themeIsLigth = !themeDark

  return (
    <div class={(themeIsLigth ? " bg-[#F3FFF9]":"bg-dark-green-gradient") +" "+ "flex flex-col mb-0 pb-[5rem]"}>
      <div class="max-w-screen-2xl m-auto">
        <div class="max-w-[100vw] px-6 pt-24 pb-2 md:(px-[2rem] pt-36) 2xl:(max-w-[1280px])">

          <h1 class={`${themeIsLigth ? "text-dark-green" : "text-white"} inline-block font-sans w-full font-bold not-italic text-[${mobileH1Size}] leading-[.93] md:(w-full max-w-[1280px] text-[112px]) relative`}>
                {mainText}
                {
                activePercentualCarrosel ? <div class="overflow-y-clip h-[13vw] max-h-[70px] pt-0 absolute text-center inline-flex pl-3.5 sm:(h-[80px] max-h-[94px] bottom-0) md:(h-[94px] pt-0 mt-[-1.5rem]) xl:(h-[120px] pl-6 pt-6 w-auto max-h-[120px])">
                <span style="color: #06E474" class="absolute animate-switcherText10">10%</span>
                <span style="color: #06E474" class="absolute animate-switcherText20">20%</span>
                <span style="color: #06E474" class="absolute animate-switcherText30">30%</span>
                <span style="color: #06E474" class="absolute animate-switcherText40">40%</span>
                <span style="color: #06E474" class="absolute animate-switcherText50">50%</span>
                <span style="color: #06E474" class="absolute animate-switcherText60">60%</span>
                <span style="color: #06E474" class="absolute animate-switcherText70">70%</span>
              </div> : null
            }  
          </h1>
        </div>
        <div class="flex px-6 py-6 flex-col gap-20 justify-center items-start lg:items-center lg:(flex-row p-8)">
        <div class="flex flex-col gap-[2rem] lg:(w-[46%] items-center)">
          <p class={(themeIsLigth ? "text-frame-515-rgba" : "text-[#f3fff9b0]") +" "+ "font-sans font-normal not-italic text-[24px] md:text-[32px] leading-[1.18]"}>
          {descriptionText}
          </p>
          <div id="buttons-wrapper" class="w-full flex flex-col gap-4 ">
            <a class={(themeIsLigth ? "bg-dark-green" : "bg-white" ) + " " + "w-full group flex justify-center items-center gap-[10px] rounded p-[14px] border-1 border-dark-green" } href={buttonCta1?.href}>
              <span class={themeIsLigth ? "text-white" : "text-dark-green" + " " + "text-[16px] font-medium"}>
                {buttonCta1?.buttonName}
              </span>
              <Icon class="hidden transition lg:group-hover:(block)" id={ themeIsLigth ? "WhiteArrow" : "GreenArrow" } width={15} height={15} strokeWidth={"1"}/>
            </a>

            <a class={(themeIsLigth ? "border-dark-green" : "bg-none border-white") + " "+ "w-full group flex justify-center items-center gap-[10px] rounded p-[14px] border-1" } href={buttonCta2?.href}>

              <span class={(themeIsLigth ? "text-dark-green" : "text-white") + " " + "text-[16px] font-medium"}>
                {buttonCta2?.buttonName}
              </span>
              <Icon class="hidden transition lg:group-hover:block" id={ themeIsLigth ? "GreenArrow" : "WhiteArrow" } width={15} height={15} strokeWidth={"1"} />
            </a>

          </div>
        </div>
        
        <div class={(themeIsLigth ? "bg-dark-green text-white" : "bg-primary text-dark-green") +" "+ "h-80 flex flex-col relative -left-6 overflow-hidden rounded-r-full md:(flex-row w-[80%]) lg:(h-[300px]) group"}>
            <div class="flex justify-start items-center lg:justify-center">
              <h3 class="w-[80%] p-6 pt-8 text-[24px] md:(w-full text-[32px]) font-medium leading-[1.18] lg:(w-full px-10 text-[32px])">{miniBanner?.titleText}</h3>
            </div>
            <div class="w-full relative rounded-r-full lg:(w-1/2)">

              <div id="mini-banners-art-montage" class="w-full flex justify-end items-center">
                <Image 
                  src={miniBanner?.bannerTopImage}
                  class="relative bottom-8 left-24 md:(max-w-[400px] w-[400px] -bottom-8) lg:(max-w-[600px] w-[597px] -bottom-12 left-56 group-hover:scale-105 group-hover:bottom-0  duration-300 ease-in) z-10"
                  width={350}
                  alt={miniBanner?.altBannerTopImage}
                  title={miniBanner?.altBannerTopImage}
                  preload
                  loading="eager"
                  decoding="sync"
                  srcset={`${miniBanner?.bannerTopImage} 2x`}
                />
                <div class="absolute -bottom-4 -right-20 lg:(-bottom-16 -right-32 group-hover:-right-20  duration-300  ease-in) ">
                  <span class="w-[80px] block relative top-[65px] md:top-[85px] right-16 text-right leading-4 font-normal text-[12px] lg:top-[108px]">{miniBanner?.linkedText}</span>
                  <Image 
                    src={miniBanner?.bannerBottomImage}
                    class="md:(w-[400px]) lg:(max-w-[500px] w-[476px]) group-hover:scale-105 duration-[300ms] ease-in"
                    width={300}
                    alt={miniBanner?.altBannerBottomImage}
                    title={miniBanner?.altBannerBottomImage}
                    preload
                    loading="eager"
                    decoding="sync"
                  />
                 
                </div>
                
              </div>  
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}