const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Talim Learning Management System",
    "description": "Transform your educational institution with Talim's comprehensive LMS. Connect schools, teachers, parents, and students worldwide with our secure, data-driven platform for transparent, modern education management.",
    "url": "https://www.mytalim.com",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free 30-day trial"
    },
    "provider": {
      "@type": "Organization",
      "name": "Talim Education Technology",
      "url": "https://www.mytalim.com"
    },
    "featureList": [
      "Student Information Management",
      "Parent-Teacher Communication",
      "Learning Resource Management",
      "Attendance Tracking",
      "Grade Management",
      "Real-time Notifications",
      "Data Analytics and Reporting",
      "Mobile Access",
      "Multi-language Support",
      "GDPR Compliance"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Sarah Mitchell"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Talim has transformed how we manage our school operations. The transparency and communication between teachers, parents, and administration has never been better."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
