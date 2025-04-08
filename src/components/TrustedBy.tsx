
import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" },
    { name: "Cipla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cipla_Logo.svg/1200px-Cipla_Logo.svg.png" },
    { name: "Practo", logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Practo_new_logo.png" },
    { name: "Treebo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Treebo_Hotels_Logo.svg/2560px-Treebo_Hotels_Logo.svg.png" },
  ];
  
  const secondRowCompanies = [
    { name: "MyGate", logo: "https://play-lh.googleusercontent.com/MKgnMw7-vG5y62p-lKK6r9Yn3_bHiU0x4nM9DtR7j1FVrZ7JXjzwy-4nJfuUguWtCw" },
    { name: "ShadowFax", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Shadowfax_Technologies_company_logo.png" },
    { name: "Quest", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quest_Diagnostics_201x_logo.svg/1200px-Quest_Diagnostics_201x_logo.svg.png" },
    { name: "1Point", logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/83/99/f0/8399f0ce-ad66-7630-6447-ace4eb4f5bfd/AppIcon-0-0-1x_U007emarketing-0-5-0-0-sRGB-85-220.png/1200x600wa.png" },
    { name: "Snaptrude", logo: "https://www.snaptrude.com/wp-content/uploads/2021/10/Snaptrude-Complete-logo-Emblem-plus-Text-Dark.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600">Loved by these companies, and so many more</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-10 mb-10"
        >
          {companies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src={company.logo} alt={company.name} className="h-10 object-contain" />
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-10"
        >
          {secondRowCompanies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src={company.logo} alt={company.name} className="h-10 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
