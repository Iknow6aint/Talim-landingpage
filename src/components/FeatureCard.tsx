import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData; // Allow both imported and string paths
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-[48%]">
      <h3 className="text-lg font-semibold flex items-center">
        📚 {title}
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Use next/image for imported images, regular <img> for string paths */}
      {typeof imageSrc === "string" ? (
        <img src={imageSrc} alt={title} className="mt-4 rounded-md w-full" />
      ) : (
        <Image src={imageSrc} alt={title} layout="responsive" className="mt-4 rounded-md" />
      )}
    </div>
  );
};

export default FeatureCard;
