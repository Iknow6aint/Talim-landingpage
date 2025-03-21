import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string; // Now only accepts string paths
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ""}`}>
      <h3 className="text-lg font-semibold flex items-center">📚 {title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      
      {/* Display image */}
      <div className="mt-4">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={500} 
          height={300} 
          className="rounded-md w-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
