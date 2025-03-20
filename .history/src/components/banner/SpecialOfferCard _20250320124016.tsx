import { specialOffer, textOffer } from '@/app/assets';
import Image from 'next/image';

const SpecialOfferCard = () => {
  return (
    <div className=" md:-mt-6 flex  md:flex-row md:justify-between items-center bg-[#EBEBEB] rounded-lg shadow-lg overflow-hidden max-w-4xl  mx-auto p-4 transform hover:scale-105 transition-transform duration-300">
      {/* Card Content */}
      <div className="md:p-6 text-center md:text-left">
        {/* Special Offer Badge */}
        <div className="text-green-600  text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
          Special Offer
        </div>

        {/* Fresh Salad Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Fresh Salad</h2>

        {/* Discount */}
        <div className="flex justify-center md:justify-start items-center gap-2 text-green-600 text-[16px] font-semibold mb-4">
          Up to
          <Image src={textOffer} alt="Discount" width={47} height={47} />
        </div>

        {/* Promo Code */}
        <div className="flex justify-center md:justify-start items-center gap-1 bg-[#176D38] p-3 rounded-lg">
          <p className="text-white text-[12px] font-semibold">Code :</p>
          <p className="text-[#FAC714] text-[12px] font-semibold">FRESH25</p>
        </div>
      </div>

      {/* Product Image */}
      <div className="md:flex-shrink-0">
        <Image
          src={specialOffer}
          alt="Fresh Salad"
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SpecialOfferCard;