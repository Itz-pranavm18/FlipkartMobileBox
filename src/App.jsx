import Mobile from './components/temp'

function App() {
  // Step 1: Store mobile data in an array
  const mobiles = [
    {
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/y/-original-imahexhjqbbh4zn2.jpeg?q=70",
      name: "REDMI Note 14 SE 5G (Mystique White, 128 GB) (6 GB RAM)",
      f1: "6 GB RAM | 128 GB ROM",
      f2: "16.94 cm (6.67 inch) Full HD+ Display",
      f3: "50MP + 8MP + 2MP | 20MP Front Camera",
      f4: "5110 mAh Battery",
      f5: "Dimensity 7025 Ultra Processor",
      price: "₹14,999",
      old: "₹19,999"
    },
    {
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/u/8/z10x-5g-i2404-iqoo-original-imahbngms6vtzc9d.jpeg?q=70",
      name: "IQOO Z10X 5G (Ultramarine, 128 GB) (6 GB RAM)",
      f1: "6 GB RAM | 128 GB ROM",
      f2: "16.94 cm (6.67 inch) Full HD+ Display",
      f3: "50MP + 8MP + 2MP | 20MP Front Camera",
      f4: "5110 mAh Battery",
      f5: "Dimensity 7025 Ultra Processor",
      price: "₹13,669",
      old: "₹17,499"
    },
    {
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/5/z/-original-imahawgarmg5f8ff.jpeg?q=70",
      name: "POCO C71 (Cool Blue, 128 GB) (6 GB RAM)",
      f1: "6 GB RAM | 128 GB ROM",
      f2: "16.94 cm (6.67 inch) Full HD+ Display",
      f3: "32MP Rear Camera | 8MP Front Camera",
      f4: "5200 mAh Battery",
      f5: "Unisoc T7250 Max clock speed: 2 x A75@1.8GHz 6 x A55@1.6GHz Processor",
      price: "₹6,999",
      old: "₹11,499"
    }
  ];

  // Step 2: Render using map()
  return (
    <>
      {mobiles.map((mobile, index) => (
        <div key={index}>
          <Mobile {...mobile} />
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
