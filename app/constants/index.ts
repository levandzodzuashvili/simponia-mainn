export interface Feature {
  title: string;
  subtitle: string;
  features: string[];
}

export interface Translations {
  ge: Feature[];
  en: Feature[];
}

type HighlightItem = {
  id: number;
  image: string;
  title: string;
  value: string;
  unit?: string;
  prefix?: string;
};

type Highlights = {
  ge: HighlightItem[];
  en: HighlightItem[];
};

export const translations: Translations = {
  ge: [
    {
      title: "პროექტის შესახებ",
      subtitle: "სიმფონია - ბათუმის ბოტანიკური ბაღის მარგალიტი",
      features: [
        "გაიცანით სიმფონია – უნიკალური 16-სართულიანი სასტუმრო აპარტამენტები, რომელიც ბათუმის ბოტანიკური ბაღის შუაგულში, მწვანე კონცხზე მდებარეობს.",
        "სასტუმროს პროექტი იტალიური მოდერნიზმის დახვეწილ სტილს აერთიანებს ბოტანიკური ბაღის ველურ სილამაზესთან, ქმნის სივრცეს, სადაც ლანდშაფტის სიმწვანე ინტერიერშიც გრძელდება და ბუნებასთან კავშირის განსაკუთრებულ შეგრძნებას გთავაზობთ.",
        "დაცული რეკრეაციული ზონა და უძრავი ქონების შეზღუდული რაოდენობა მაქსიმალურად ზრდის „სიმფონია“-ს აპარტამენტების საინვესტიციო პოტენციალს",
        "20-წლიანი გამოცდილებისა და მაღალი სანდოობის გუნდი „სიმფონიას“ პროექტის უკან - ხარისხიანი სამშენებლო სამუშაოების გარანტიაა",
        "შეარჩიე სრულად კეთილმოწყობილი სასტუმროს ნომერი სიმფონიაში და გახდი ჩვენი სანდო ბიზნეს-პარტნიორი",
      ],
    },
    {
      title: "გაიგე მეტი",
      subtitle: "პროექტის დეტალები",
      features: [
        "აპარტამენტები სრული რემონტით, ავეჯითა და ტექნიკით",
        "პროექტის დასრულების დრო: 2027 წლის დასაწყისი",
      ],
    },
    {
      title: "მდებარეობა",
      subtitle: "უნიკალური მდებარეობა ბათუმის მწვანე კონცხის სანაპიროზე",
      features: [
        " განუმეორებელი მდებარეობა მწვანე კონცხის სანაპიროზე, ბათუმის ბოტანიკური ბაღის შუაგულში",
        "სიმფონია-ს თითოეული აპარტამენტიდან იშლება ულამაზესი ხედები მწვანე კონცხის სანაპიროსა და ბოტანიკურ ბაღზე",
        "მრავალფუნქციური ტერასები, ფართო ფანჯრები და მცენარეებით მორთული აივნები გიქმნით იდეალურ ატმოსფეროს სიმშვიდისა და ჰარმონიული დასვენებისათვის",
      ],
    },
    {
      title: "რას გთავაზობ?",
      subtitle: "რატომ სიმფონია ?",
      features: [
        "სიმფონია — შენი შანსი, გახდე პრემიუმ ხარისხის უძრავი ქონების მფლობელი დღეს",
        "გარანტირებული ხედები თითოეული აპარტამენტიდან მწვანე კონცხის სანაპიროსა და ბოტანიკური ბაღის სიმწვანეზე",
        "სიმფონია — გათვლა უნიკალურობაზე, ავთენტურობასა და მომავალზე, რომელიც მხოლოდ შენ გეკუთვნის",
      ],
    },
    {
      title: "ჩვენი ბლოგი",
      subtitle: "სიახლეები ჩვენზე",
      features: [
        "შეიგრძენი ბუნებისა და ქალაქის კომფორტის სიმფონიური ერთიანობა",
      ],
    },
  ],
  en: [
    {
      title: "Welcome to SIMPONIA",
      subtitle: "Simponia: The Gemstone of Batumi Botanical Garden",
      features: [
        "Introducing Simponia, a striking 16-floor hotel nestled in the heart of Batumi Botanical Garden on the scenic Green Cape.",
        "The architecture and living spaces are thoughtfully designed to blend style and comfort, reflecting modern elegance. This exceptional setting offers an unmatched lifestyle, making Simponia a rare gem in Batumi's vibrant landscape.",
        "As a limited-edition development in a protected area, Simponia provides a once-in-a-lifetime opportunity to own property in the iconic Botanical Garden, where new ownership is nearly impossible to find.",
        "Backed by a team with 20 years of experience and high reliability, the Simponia project guarantees top-quality construction.",
        "Choose turnkey apartments at Simponia and become our trusted business partner.",
      ],
    },
    {
      title: "Discover More",
      subtitle: "Project Details",
      features: [
        "Terms of condition: Fully furnished with techniques  and appliances",
        "Project Completion: Early 2027",
      ],
    },
    {
      title: "Location",
      subtitle: "Exclusive Location of Batumi Green Cape",
      features: [
        "Luxury Hotel-Style Apartments Offering Breathtaking Views",
        "The design of Symphony seamlessly integrates with the natural contours and distinctive scenery of the Green Cape",
        "Each apartment at Symphony offers breathtaking views of the Black Sea coastline and the Botanical Garden",
        "Experience the allure of multifunctional terraces, wide windows, and balconies adorned with vibrant greenery, all designed to harmoniously blend with the enchanting landscape of the Botanical Garden",
      ],
    },
    {
      title: "What we Offer",
      subtitle: "Why Simponia?",
      features: [
        "Simponia is your chance to own premium-quality real estate today",
        "Simponia is more than a residence; it’s a lifestyle offering the perfect harmony between nature and modernity",
        "A protected space promises not only comfort but also steadily increasing property value",
      ],
    },
    {
      title: "Blog",
      subtitle: "News About us",
      features: ["Check what they say!"],
    },
  ],
};

export const highlights: Highlights = {
  ge: [
    {
      id: 1,
      image: "/banner/service1.jpg",
      title: "სამშენებლო ტერიტორია",
      value: "1200",
      unit: "მ²",
    },
    {
      id: 2,
      image: "/banner/service2.jpg",
      title: "სართულების რაოდენობა",
      value: "16",
    },
    {
      id: 3,
      image: "/banner/service3.jpg",
      title: "სასტუმროს ნომრის ტიპის აპარტამენტები",
      value: "222",
    },
    {
      id: 4,
      image: "/banner/service4.jpg",
      title: "ნომრების ფართობი",
      value: "30",
      unit: "მ² - დან",
    },
    {
      id: 5,
      image: "/banner/service5.jpg",
      title: "პროექტის ჩაბარების დრო",
      value: "2027",
      unit: "წლის დასაწყისი",
    },
    // {
    //   id: 6,
    //   image: "/banner/service6.jpg",
    //   title: "ავტოსადგომის ფართობი",
    //   value: "2",
    //   unit: "დონე",
    // },
  ],
  en: [
    {
      id: 1,
      image: "/banner/service1.jpg",
      title: "Construction Area",
      value: "1200",
      unit: "M2",
    },
    {
      id: 2,
      image: "/banner/service2.jpg",
      title: "Number of Floors",
      value: "16",
    },
    {
      id: 3,
      image: "/banner/service3.jpg",
      title: "Hotel-Type Apartments",
      value: "222",
    },
    {
      id: 4,
      image: "/banner/service4.jpg",
      title: "Floor area of apartments",
      value: "30",
      unit: "M2",
      prefix: "Starting from",
    },
    {
      id: 5,
      image: "/banner/service5.jpg",
      title: "Project Completion",
      value: "2027",
      prefix: "Early",
    },
    {
      id: 6,
      image: "/banner/service6.jpg",
      title: "Parking Levels",
      value: "2",
      unit: "Floors",
    },
  ],
};
export const accordionItemsLocation = {
  ge: [
    {
      title: "1",
      content: "ბათუმის ბოტანიკური ბაღი შენი სასტუმრო ნომრის გარშემო",
    },
    {
      title: "2",
      content: "მწვანე კონცხის სანაპირო შენს ეზოში",
    },
    {
      title: "3",
      content: "ბათუმის ქალაქის ცენტრი 10 წუთში",
    },
  ],
  en: [
    {
      title: "1",
      content:
        "Apartments from 30 m² to 75 m², tailored to your preferences and budget.",
    },
    {
      title: "2",
      content:
        "Benefit from tailored payment options that align with your financial plans, making your investment effortless.",
    },
    {
      title: "3",
      content:
        "Expert Management: A dedicated team of international hospitality experts is committed to ensuring smooth operations.",
    },
  ],
};

export const accordionItems = {
  ge: [
    {
      title: "აპარტამენტების ფართო არჩევანი",
      content:
        "შენს სურვილსა და ბიუჯეტზე მორგებული ფართი - 30 კვ.მ.-დან 75 კვ.მ.-მდე",
    },
    {
      title: "მოქნილი გადახდის პირობები",
      content:
        "5-წლიანი შიდა უპროცენტო განვადება და განსაკუთრებული შეთავაზებები ერთიანი გადახდის შემთხვევაში",
    },
    {
      title: "პროფესიონალური მენეჯმენტი",
      content: "საერთაშორისო საოპერაციო ჯგუფი სასტუმროს მენეჯმენტში",
    },
    {
      title: "გარანტირებული მოგება",
      content: "ინვესტიცია, რომელიც შენი მომავლის უზრუნველსაყოფადაა შექმნილი",
    },
  ],
  en: [
    {
      title: "Wide variety of options",
      content:
        "Apartments from 30 m² to 75 m², tailored to your preferences and budget.",
    },
    {
      title: "Flexible Payment Plans",
      content:
        "Benefit from tailored payment options that align with your financial plans, making your investment effortless",
    },
    {
      title: "Professional Management",
      content:
        "Expert Management:  Dedicated team of international hospitality experts is committed to ensuring smooth operations",
    },
    {
      title: "Guaranteed Profit",
      content:
        "Simponia delivers unique investment opportunities with a robust ROI from the entire project, seamlessly combining luxury living in a prime location with diverse avenues for financial growth.",
    },
  ],
};

export const features = {
  ge: [
    {
      id: "01",
      title: "გარე აუზი",
      description: "",
      // description:
      //   "ღია საცურაო აუზი და ტერასა, კომფორტული დასვენების სივრცე მწვანე გარემოში, სასტუმროს პანორამული ხედებით.",
      imageUrl: "/banner/offer2.jpeg",
    },
    {
      id: "02",
      title: "რესტორანი",
      description: "",
      // description:
      //   "გემრიელი კერძებითა და შესანიშნავი ზღვის ხედებით, იდეალური ადგილი დროის გასატარებლად.",
      imageUrl: "/banner/offer4.jpeg",
    },
    {
      id: "03",
      title: "დასასვენებელი ზონა",
      description: "",
      // description:
      //   "საკუთარი სარეკრეაციო ზონა სასტუმროს ეზოში - კომფორტული სივრცე განტვირთვისთვის.",
      imageUrl: "/banner/offer3.jpeg",
    },
    {
      id: "04",
      title: "პარკინგი",
      description: "",
      // description: "ორთავიანი ავტოფარეხი კომფორტული პარკირებისთვის.",
      imageUrl: "/banner/offer1.jpeg",
    },
  ],

  en: [
    {
      id: "01",
      title: "Outdoor Pool",
      description: "",
      // description:
      //   "An open swimming pool and terrace provide a relaxing space surrounded by lush greenery and panoramic hotel views.",
      imageUrl: "/banner/offer2.jpeg",
    },
    {
      id: "02",
      title: "Restaurant",
      description: "",
      // description:
      //   "Savor delicious cuisine while enjoying breathtaking sea views.",
      imageUrl: "/banner/offer4.jpeg",
    },
    {
      id: "03",
      title: "Private Recreation Area",
      description: "",
      // description:
      //   "A dedicated recreational zone in the hotel's courtyard offers a comfortable space for relaxation.",
      imageUrl: "/banner/offer3.jpeg",
    },
    {
      id: "04",
      title: "Parking",
      description: "",
      // description: "A two-level garage provides convenient parking for guests.",
      imageUrl: "/banner/offer1.jpeg",
    },
  ],
};

export const blogData = {
  ge: [
    {
      id: 1,
      date: "November 19, 2024",
      title: "სიახლეები ჩვენზე",
      description:
        "ასტუმრო „სიმფონია“ - შავიზღვისპირეთის ნიკალური პროექტი, რომელიც გამოირჩევა პრესტიჟული მდებარეობით მწვანე კონცხის სანაპიროზე, ბათუმის ბოტანიკური ბაღის შუაგულში",
      link: "#",
      imageUrl: "/blog/blog-img1.jpg",
    },
    {
      id: 2,
      date: "November 19, 2024",
      title: "სიახლეები ჩვენზე",
      description:
        "ასტუმრო „სიმფონია“ - შავიზღვისპირეთის ნიკალური პროექტი, რომელიც გამოირჩევა პრესტიჟული მდებარეობით მწვანე კონცხის სანაპიროზე, ბათუმის ბოტანიკური ბაღის შუაგულში",
      link: "#",
      imageUrl: "/blog/blog-img2.jpg",
    },
    {
      id: 3,
      date: "November 19, 2024",
      title: "სიახლეები ჩვენზე",
      description:
        "ასტუმრო „სიმფონია“ - შავიზღვისპირეთის ნიკალური პროექტი, რომელიც გამოირჩევა პრესტიჟული მდებარეობით მწვანე კონცხის სანაპიროზე, ბათუმის ბოტანიკური ბაღის შუაგულში",
      link: "#",
      imageUrl: "/blog/blog-img3.jpg",
    },
  ],
  en: [
    {
      id: 1,
      date: "November 19, 2024",
      title:
        "Simponia Green Cape: Living in the Heart of Batumi’s Botanical Garden",
      description:
        "Experience the allure of multifunctional terraces, wide windows, and balconies adorned with vibrant greenery, all designed to harmoniously blend with the enchanting landscape of the Botanical Garden.",
      link: "#",
      imageUrl: "/blog/blog-img1.jpg",
    },
    {
      id: 2,
      date: "November 19, 2024",
      title:
        "Simponia Green Cape: Exclusive Turnkey Apartments with World-Class Amenities",
      description:
        "Experience the allure of multifunctional terraces, wide windows, and balconies adorned with vibrant greenery, all designed to harmoniously blend with the enchanting landscape of the Botanical Garden.",
      link: "#",
      imageUrl: "/blog/blog-img2.jpg",
    },
    {
      id: 3,
      date: "November 19, 2024",
      title:
        "Investment Potential at Simponia Green Cape: ROI up to 12% and Long-Term Value",
      description:
        "Experience the allure of multifunctional terraces, wide windows, and balconies adorned with vibrant greenery, all designed to harmoniously blend with the enchanting landscape of the Botanical Garden.",
      link: "#",
      imageUrl: "/blog/blog-img3.jpg",
    },
  ],
};

export const footerData = {
  ge: [
    {
      title: "მენიუ",
      links: [
        { label: "პროექტის შესახებ", href: "#" },
        { label: "მდებარეობა", href: "#" },
        { label: "ბლოგი", href: "#" },
        { label: "აირჩიე ბინა", href: "#" },
      ],
    },
    {
      title: "სოც-მედია",
      links: [
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  en: [
    {
      title: "Menu",
      links: [
        { label: "About the Project", href: "#" },
        { label: "Location", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Choose Apartment", href: "#" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
};

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface BlogReview {
  ge: BlogPost[];
  en: BlogPost[];
}

export const blogReview: BlogReview = {
  ge: [
    {
      id: 1,
      date: "November 19, 2024",
      title: "ბლოგი ნიშანის შესახებ",
      description: "sldkajklasd  ",
      imageUrl: "/blog/blog-img1.jpg",
    },
    {
      id: 2,
      date: "November 19, 2024",
      title: "ბლოგი ნიშანის შესახებ",
      description: "sldkajklasd  ",
      imageUrl: "/blog/blog-img2.jpg",
    },
    {
      id: 3,
      date: "November 19, 2024",
      title: "ბლოგი ნიშანის შესახებ",
      description: "sldkajklasd  ",
      imageUrl: "/blog/blog-img3.jpg",
    },
  ],
  en: [
    {
      id: 1,
      date: "November 19, 2024",
      title:
        "Simponia Green Cape: Living in the Heart of Batumi’s Botanical Garden",
      description: "jifsidf",
      imageUrl: "/blog/blog-img1.jpg",
    },
    {
      id: 2,
      date: "November 19, 2024",
      title:
        "Simponia Green Cape: Exclusive Turnkey Apartments with World-Class Amenities",
      description: "jifsidf",
      imageUrl: "/blog/blog-img2.jpg",
    },
    {
      id: 3,
      date: "November 19, 2024",
      title:
        "Investment Potential at Simponia Green Cape: ROI up to 12% and Long-Term Value",
      description: "jifsidf",
      imageUrl: "/blog/blog-img3.jpg",
    },
  ],
};
