import { twMerge } from "tailwind-merge";

interface TitleSectionProps {
    title: string;
    subtitle: string;
    description: string;
    className:string;
  }
  
  const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, description,className }) => {
    return (
      <div className={twMerge("space-y-3 px-4 sm:px-6 md:px-8 my-6", className)}>
        {/* Title */}
        <h1 className="text-sm sm:text-[18px] md:text-[20px] text-[#749B3F] font-medium bg-[#749B3F1A] px-4 py-2 sm:p-3 rounded-xl inline-block">
          {title}
        </h1>
  
        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#212337] font-semibold leading-snug sm:leading-tight">
          {subtitle}
        </h2>
  
        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl text-[#2a2a32] max-w-2xl mx-auto leading-relaxed m">
          {description}
        </p>
      </div>
    );
  };
  
  export default TitleSection;
  