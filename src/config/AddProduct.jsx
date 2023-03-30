import { db } from "./firebase"
import { addDoc, collection } from "@firebase/firestore"

let AddProduct = () => {

    let products = [
    {
        category: 'GPU',
        count: 12,
        description: `AMD Radeon RX 550 Chipset, Silver plated PCB & all solid capacitors provide lower temperature, 
        higher efficiency & stability 9CM unique fan provide low noise and huge airflow for your GPU GPU Boost Clock / Memory Speed : up to 1183 MHz / 4GB GDDR5 / 6000 MHz Memory, 
        Stream Processors 512, Perfect for 3D CAD/CAM working, video and photo editing, Video Games @1080p Support: DirectX 12, Shader Model 5.0, OpenGL 4.6/4.5, 4K Video Decode`,
        image: 'https://m.media-amazon.com/images/I/61-PIBx43BL._AC_SL1000_.jpg',
        price: 108.79,
        rate: 4,
        title: `maxsun AMD Radeon RX 550 4GB GDDR5 ITX Computer PC Gaming Video Graphics Card 
        GPU 128-Bit DirectX 12 PCI Express X16 3.0 DVI-D Dual Link, HDMI, DisplayPort`
    },
    {
        category: 'GPU',
        count: 18,
        description: `NVIDIA Ampere Streaming Multiprocessors: The building blocks for the world’s fastest, most efficient GPU, the all-new Ampere SM brings 2X the FP32 throughput and improved power efficiency
        2nd Generation RT Cores: Experience 2X the throughput of 1st gen RT Cores, plus concurrent RT and shading for a whole new level of ray tracing performance.
        3rd Generation Tensor Cores: Get up to 2X the throughput with structural sparsity and advanced AI algorithms such as DLSS. Now with support for up to 8K resolution, these cores deliver a massive boost in game performance and all-new AI capabilities.
        OC edition: Boost clock 1882 MHz (OC mode)/ 1852 MHz (Gaming mode).Avoid using unofficial software
        Axial-Tech Fan Design has been tuned up with more fan blades and a reversed rotational direction for the center fan.`,
        image: 'https://m.media-amazon.com/images/I/810QFGCFlnL._AC_SX679_.jpg',
        price: 458.79,
        rate: 4.5,
        title: `ASUS TUF Gaming NVIDIA GeForce RTX 3060 V2 OC Edition Graphics Card 
        (PCIe 4.0, 12GB GDDR6, HDMI 2.1, DisplayPort 1.4a, Dual Ball Fan Bearings, Military-Grade Certification, GPU Tweak II)`
    },
    {
        category: 'GPU',
        count: 50,
        description: `Memory Speed:12 Gbps.Digital Max Resolution:7680x4320
        Chipset: NVIDIA GeForce GTX 1650
        Boost Clock: 1620 MHz
        Video Memory: 4GB GDDR6
        Memory Interface: 128-bit
        Output: DL-DVI-D x 1 / DisplayPort x 1 (v1.4) / HDMI 2.0b x 1`,
        image: 'https://m.media-amazon.com/images/I/61AO4JQYb5L._AC_SX679_.jpg',
        price: 199.00,
        rate: 4.6,
        title: `MSI Gaming GeForce GTX 1650 128-Bit HDMI/DP/DVI 4GB GDRR6 HDCP Support DirectX 12 VR Ready OC Graphics Card (GTX 1650 D6 Ventus XS OC)`
    },
    {
        category: 'GPU',
        count: 65,
        description: `Chipset: NVIDIA GeForce RTX 3060
        Video Memory: 12GB GDDR6
        Memory Interface: 192-bit
        Output: DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1.Avoid using unofficial software
        Digital maximum resolution: 7680 x 4320`,
        image: 'https://m.media-amazon.com/images/I/71tduSp8ooL._AC_SX679_.jpg',
        price: 400.00,
        rate: 4.7,
        title: 'MSI Gaming GeForce RTX 3060 12GB 15 Gbps GDRR6 192-Bit HDMI/DP PCIe 4 Torx Twin Fan Ampere OC Graphics Card (Ventus 2X 12G OC)'
    },
    {
        category: 'GPU',
        count: 10,
        description: `Memory Speed:14 GBPS.Minimum Power Supply Requirement: 550 watt
        Chipset: AMD RX 6600
        Memory: 8GB GDDR6 AMD RDNA 2 architecture elevates and unifies the gaming
        Boost Clock: Up To 2491MHz.Avoid using unofficial software
        Cooling: XFX Speedster SWFT210 Dual Fan Cooling`,
        image: 'https://m.media-amazon.com/images/I/71gv2U3IPZL._AC_SX679_.jpg',
        price: 249.99,
        rate: 4.6,
        title: 'XFX Speedster SWFT 210 Radeon RX 6600 CORE Gaming Graphics Card with 8GB GDDR6 HDMI 3xDP, AMD RDNA 2 RX-66XL8LFDQ'
    },
    {
        category: 'GPU',
        count: 45,
        description: `【Arctic Islands architecture and Superior Gaminig Experience】AMD Radeon RX 580 8G is a mainstream gaming GPU built 
        on the 14 nm process and based on the Polaris 20 graphics processor, in its Polaris 20 XTX variant,the video card supports DirectX 12. 
        This ensures that all modern games will run on this Radeon RX 580. The gpu has equipped with 2048SP and 8GB GDDR5 memory with a 1750 MHz (8 GB), 
        features to deliver the fastest, smoothest, most power-efficient gaming experiences for computer users.`,
        image: 'https://m.media-amazon.com/images/I/61SEJC8RSfL._AC_SX679_.jpg',
        price: 119.98,
        rate: 4.3,
        title: `AISURIX Radeon RX 580 Graphic Cards, 2048SP, Real 8GB, GDDR5, 256 Bit, Pc Gaming Radeon Video Card for AMD, 2XDP, HDMI, 
        PCI Express 3.0 with Freeze Fan Stop for Desktop Computer Gaming Gpu`
    },
    {
        category: 'GPU',
        count: 44,
        description: `Memory Speed:19 Gbps.Digital Max Resolution:7680x4320
        NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores
        8GB 256-bit GDDR6X, 19 Gbps, PCIE 4.0; Boost Clock 1800 MHz
        SPECTRA 2.0 RGB Lighting, IceStorm 2.0 Advanced Cooling, FREEZE Fan Stop, Active Fan Control, Lighted Metal Backplate
        8K Ready, 4 Display Ready, HDCP 2.3, VR Ready
        3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6`,
        image: 'https://m.media-amazon.com/images/I/61duFTIyRVL._AC_SX679_.jpg',
        price: 699.99,
        rate: 4.6,
        title: `ZOTAC GeForce RTX™ 3070 Ti Trinity OC 8GB GDDR6X 256-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, 
        IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30710J-10P`
    },
    {
        category: 'GPU',
        count: 34,
        description: `Chipset: GeForce RTX 4090
        Video Memory: 24GB GDDR6X
        Memory Interface: 384-bit
        Output: DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1
        Digital maximum resolution: 7680 x 4320`,
        image: 'https://m.media-amazon.com/images/I/71tFK-c6ZML._AC_SX679_.jpg',
        price: 1.843,
        rate: 4.4,
        title: 'MSI Gaming GeForce RTX 4090 24GB GDRR6X 384-Bit HDMI/DP Nvlink Tri-Frozr 3 Ada Lovelace Architecture OC Graphics Card (RTX 4090 SUPRIM X 24G)'
    },
    {
        category: 'GPU',
        count: 45,
        description: `NVIDIA Ampere Streaming Multiprocessors
        2nd Generation RT Cores
        3rd Generation Tensor Cores
        Powered by GeForce RTX 3060.Avoid using unofficial software
        Integrated with 12GB GDDR6 192-bit memory interface`,
        image: 'https://m.media-amazon.com/images/I/715UuCH5OES._AC_SX679_.jpg',
        price: 389.99,
        rate: 4.8,
        title: 'GIGABYTE GeForce RTX 3060 Gaming OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060GAMING OC-12GD Video Card'
    },
    {
        category: 'GPU',
        count: 76,
        description: `NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores
        8GB 256-bit GDDR6X, 19 Gbps, PCIE 4.0; Boost Clock 1830 MHz
        HoloBlack, SPECTRA 2.0 RGB Lighting, IceStorm 2.0 Advanced Cooling, FREEZE Fan Stop, Active Fan Control, Lighted Metal Backplate
        8K Ready, 4 Display Ready, HDCP 2.3, VR Ready
        3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6`,
        image: 'https://m.media-amazon.com/images/I/81xRDDYTRsL._AC_SX679_.jpg',
        price: 529.00,
        rate: 4.5,
        title: 'ZOTAC GeForce RTX™ 3070 Ti AMP Holo 8GB GDDR6X 256-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, HoloBlack, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30710F-10P'
    },
    {
        category: 'CPU',
        count: 34,
        description: `Play some of the most popular games at 1080p with the fastest processor graphics in the world, no graphics card required
        8 Cores and 16 processing threads, bundled with the AMD Wraith Stealth cooler
        4.6 GHz Max Boost, unlocked for overclocking, 20 MB cache, DDR4-3200 support
        For the advanced Socket AM4 platform. Maximum Operating Temperature (Tjmax)-95°C"`,
        image: 'https://m.media-amazon.com/images/I/51D3DrDmwkL._AC_SX679_.jpg',
        price: 159.99,
        rate: 4.8,
        title: 'AMD Ryzen 7 5700G 8-Core, 16-Thread Unlocked Desktop Processor with Radeon Graphics'
    },
    {
        category: 'CPU',
        count: 34,
        description: `AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads
        Can deliver elite 100 plus FPS performance in the world's most popular games
        Bundled with the quiet, capable AMD Wraith Stealth cooler. System Memory Type: DDR4
        4.6 GHz Max Boost, unlocked for overclocking, 35 MB of cache, DDR-3200 support
        For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards`,
        image: 'https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SX679_.jpg',
        price: 154.00,
        rate: 4.8,
        title: 'AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'
    },
    {
        category: 'CPU',
        count: 22,
        description: `AMD's fastest 8 core processor for mainstream desktop, with 16 procesing threads. OS Support-Windows 10 64-Bit Edition
        Can deliver elite 100-plus FPS performance in the world's most popular games
        Cooler not included, high-performance cooler recommended
        4.7 GHz Max Boost, unlocked for overclocking, 36 MB of cache, DDR-3200 support
        For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards`,
        image: 'https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg',
        price: 219.00,
        rate: 4.8,
        title: 'AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processort'
    },
    {
        category: 'CPU',
        count: 18,
        description: `The world's best gaming desktop processor, with 12 cores and 24 processing threads
        Can deliver elite 100-plus FPS performance in the world's most popular games
        Cooler not included, high-performance cooler recommended. Max Temperature- 90°C
        4.8 GHz Max Boost, unlocked for overclocking, 70 MB of cache, DDR-3200 support
        For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards`,
        image: 'https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX679_.jpg',
        price: 319.99,
        rate: 4.8,
        title: 'AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor'
    },
    {
        category: 'CPU',
        count: 65,
        description: `Intel Core i7 3.60 GHz processor offers more cache space and the hyper-threading architecture delivers high performance for demanding applications with better onboard graphics and faster turbo boost
        The Socket LGA-1700 socket allows processor to be placed on the PCB without soldering
        11 MB L2 and 25 MB L3 cache offers supreme performance for computation intensive apps
        Intel 7 Architecture enables improved performance per watt and micro architecture makes it power-efficient`,
        image: 'https://m.media-amazon.com/images/I/51o+isnQxdL._AC_SX679_.jpg',
        price: 276.99,
        rate: 4.8,
        title: 'Intel Core i7-12700KF Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked  LGA1700 600 Series Chipset 125W'
    },
    {
        category: 'CPU',
        count: 33,
        description: `Can deliver fast 100 plus FPS performance in the world's most popular games, discrete graphics card required
        6 Cores and 12 processing threads, bundled with the AMD Wraith Stealth cooler
        4.2 GHz Max Boost, unlocked for overclocking, 19 MB cache, DDR4-3200 support
        For the advanced Socket AM4 platform`,
        image: 'https://m.media-amazon.com/images/I/51o1kx5YHkL._AC_SX679_.jpg',
        price: 114.00,
        rate: 4.7,
        title: 'AMD Ryzen™ 5 5500 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'
    },
    {
        category: 'CPU',
        count: 77,
        description: `The best for creators meets the best for gamers, can deliver ultra-fast 100+ FPS performance in the world's most popular games
        16 Cores and 32 processing threads, based on AMD "Zen 4" architecture
        5.7 GHz Max Boost, unlocked for overclocking, 80 MB cache, DDR5-5200 support
        For the state-of-the-art Socket AM5 platform, can support PCIe 5.0 on select 600 Series motherboards
        Cooler not included, liquid cooler recommended`,
        image: 'https://m.media-amazon.com/images/I/51nBGlyDOoL._AC_SX679_.jpg',
        price: 529.99,
        rate: 4.7,
        title: 'AMD Ryzen™ 9 7950X 16-Core, 32-Thread Unlocked Desktop Processor'
    },
    {
        category: 'CPU',
        count: 4,
        description: `Intel Core i7 3.60 GHz processor offers more cache space and the hyper-threading architecture delivers high performance for demanding applications with better onboard graphics and faster turbo boost
        The processor features Socket LGA-1700 socket for installation on the PCB
        25 MB of L3 cache to boost the instruction processing and system performance
        Intel 7 Architecture enables improved performance per watt and micro architecture makes it power-efficient
        To boost graphics and visual quality, the chipset has a built in Intel UHD Graphics controller`,
        image: 'https://m.media-amazon.com/images/I/51CVLuhri5L._AC_SX679_.jpg',
        price: 264.17,
        rate: 4.9,
        title: 'Intel Core i7-12700K Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked  LGA1700 600 Series Chipset 125W'
    },
    {
        category: 'CPU',
        count: 17,
        description: `Intel and reg; Core and reg; i5 processor offers hyper-threading architecture that delivers 
        high performance for demanding applications with improved onboard graphics and turbo boost
        The processor features Socket LGA-1700 socket for installation on the PCB
        16 MB of L3 cache rapidly retrieves the most used data available to improve system performance
        Intel 7 Architecture enables improved performance per watt and micro architecture makes it power-efficient`,
        image: 'https://m.media-amazon.com/images/I/51ZmpstxgEL._AC_SX679_.jpg',
        price: 203.04,
        rate: 4.9,
        title: 'Intel Core i5-12600KF Desktop Processor 10 (6P+4E) Cores up to 4.9 GHz Unlocked  LGA1700 600 Series Chipset 125W'
    },
    {
        category: 'CPU',
        count: 4,
        description: `Intel® Core® i5 Deca-core (10 Core) 3.70 GHz processor offers hyper-threading 
        architecture that delivers high performance for demanding applications with improved onboard graphics and turbo boost
        The Socket LGA-1700 socket allows processor to be placed on the PCB without soldering
        16 MB of L3 cache rapidly retrieves the most used data available to improve system performance
        Intel 7 Architecture enables improved performance per watt and micro architecture makes it power-efficient
        Built-in Intel UHD Graphics controller for great graphics and visual quality`,
        image: 'https://m.media-amazon.com/images/I/51hi4oumxiL._AC_SX679_.jpg',
        price: 246.00,
        rate: 4.8,
        title: 'Intel Core i5-12600K Desktop Processor 10 (6P+4E) Cores up to 4.9 GHz Unlocked  LGA1700 600 Series Chipset 125W'
    },
    {
        category: 'FAN',
        count: 22,
        description: `Four pieces 6mm nickel plated copper heat pipes for better performance
        220w TDP cooling efficiency with unique “chessboard” fins design of AK series
        Decorative board on fins top provides delicate and unique appearance for AK400 WH
        120mm PWM fan with 1850RPM offers 66.47CFM for faster heat dissipation
        Noise damping pads in fan corners avoid vibration and keep noise level under 29 dB(A)
        Standing 155mm tall suits ATX/ M-ATX case and 73mm width without blocking RAM slots
        CPU air cooler carries neither RGB nor ARGB lighting to match specific PC building style
        Supports the latest sockets on Intel LGA 1700/1200/1151/1150/1155 AMD AM5/AM4`,
        image: 'https://m.media-amazon.com/images/I/61RdAXIecdL._SX522_.jpg',
        price: 39.99,
        rate: 4.7,
        title: `DeepCool AK400 WH CPU Air Cooler 220w TDP 6mm x 4 Nickel Plated Copper Heat Pipes CPU Cooler with PWM 120mm FDB Fan 1850RPM 
        for Intel LGA 1700/1200/1151/1150/1155 AMD AM5/AM4, White`
    },
    {
        category: 'FAN',
        count: 70,
        description: `【Better Heat Dissipation】Extra-wide 120mm dual-tower design with 6 cuprum heatpipes and dual fans provides maximum quiet cooling efficiency on a par with many all-in-one watercoolers, ideal for overclockers and silent-enthusiasts!
        Includes high-end thermal paste for easy installation on Intel series
        【PWM Fan】The 120mm PWM fan fits most tower cases (158mm height), doesn’t overhang the RAM slots on LGA17xx, LGA1200, doesn’t block the PCIe on most ATX and Micro-ATX motherboards. Improved airflow for extreme CPU cooling performance. Max. Air Flow: 68CFM ; Noise : 28dB(A)
        【High-Performance Heat Pipes】Equipped with 6 X 6mm cuprum heat pipes that have aluminum caps. This is key to its great cooling performance, because they transport the heat to optimum locations on the cooling fins.
        [Any dissatisfaction] please contact us without any hesitation, we will reply in 24 hours and serve you.`,
        image: 'https://m.media-amazon.com/images/I/81XW6PaSDcL._SX466_.jpg',
        price: 29.99,
        rate: 3,
        title: `Runruii CPU Cooler witn Dual-Fan PWM 120MM Fans 6 Cuprum Heatpipes CPU Air Cooler`
    },
    {
        category: 'FAN',
        count: 43,
        description: `Sleek Finishing: Anodized gun-metal black with brushed aluminum surface finish to the top cover for a more refined look
        Nickle Black: The nickel plated jet black also enhances radiation cooling performance
        Direct contact technology: 4 Heat Pipe with exclusive direct contact technology effectively provides excellent heat dissipation; Air flow: 57.3 CFM; Noise level: 30.0 decibels
        Precise Air Flow: Stacked fin array ensures least airflow resistance which allows cooler air flow into the heat sink
        RGB LED controller: The wired RGB LED controller allows for customizable colors and effects with just the touch of a button`,
        image: '',
        price: 39.99,
        rate: 4.6,
        title: `Cooler Master Hyper 212 Black Edition RGB CPU Air Cooler, SF120R RGB Fan, Anodized Gun-Metal Black, Brushed Nickel Fins, 
        4 Copper Direct Contact Heat Pipes for AMD Ryzen/Intel LGA1700/1200/1151`
    },
    {
        category: 'FAN',
        count: 65,
        description: `A high 150W TDP cooling efficiency
        Four high-performance 6mm heat pipes with HDT technology
        Asymmetrical construction avoids blocking memory slots
        Pure Wings 2 120mm PWM fan for silent operation of max. 26. 8 dB(A)
        Elegant black surface.Easily installable installation kit can be mounted from atop the motherboard.Three-year manufacturer's`,
        image: 'https://m.media-amazon.com/images/I/71IVM3hEYTL._SX522_.jpg',
        price: 35.99,
        rate: 4.6,
        title: `be quiet! Pure Rock 2 Black (BK007), 150W TDP, CPU Cooler, Intel-1700/1200/2066/1150/1151/1155/2011(-3) Square ILM, AMD-AM4`
    },
    {
        category: 'FAN',
        count: 23,
        description: `Proven premium heatsink (more than 100 awards and recommendations from international hardware websites), now available in an all-black design that goes great with many colour schemes and RGB LEDs
        Top-tier performance in 120mm size for excellent compatibility: fits most tower cases (158mm height), doesn’t overhang the RAM slots, doesn’t block the PCIe on most ATX & Micro-ATX motherboards
        Dual state-of-the-art NF-A12x25 120mm fans with Low-Noise Adaptors and PWM for automatic speed control: full cooling performance under load, whisper quiet at idle!
        Includes high-end NT-H1 thermal paste and SecuFirm2 mounting system for easy installation on Intel LGA1700 (LGA17xx family) LGA1200, LGA115x, LGA2011, LGA2066 and AMD AM4 & AM5
        Renowned Noctua quality backed up by 6-year manufacturer’s warranty, deluxe choice for Intel Core i9, i7, i5, i3 (e.g. 13900, 13700, 13600) and AMD Ryzen (e.g. 7950X3D, 7900X3D, 7800X3D, 7700)`,
        image: 'https://m.media-amazon.com/images/I/81ZXpj5W7KL._AC_SY679_.jpg',
        price: 129.95,
        rate: 4.8,
        title: `Noctua NH-U12A chromax.Black, 120mm Single-Tower CPU Cooler (Black)`
    }
];

    let productsCollection = collection(db, "products");

    let createProduct = async (product) => {
        await addDoc(productsCollection, product)
    };
    
    let handleAddProducts = async () => {
        for (let product of products) {
            await createProduct(product);
            console.log(product);
        }
    };

    return (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddProducts}
        >
          Add Products
        </button>
      );

};

export default AddProduct;