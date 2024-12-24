import ConstactUs from "./ConstactUs";

export default function ContactForm() {
  return (
    <div
      className="bg-cover bg-center mt-20"
      style={{ backgroundImage: "url('/banner/background.jpg')" }}
    >
      <div className="w-full h-full bg-opacity-50 flex items-center flex-wrap justify-between pr-16 container mx-auto pt-32 px-8 md:px-40 py-12">
        <div className="text-white text-6xl font-bold space-y-4">
          <p className="text-[120px]">LIVE</p>
          <p className="text-[120px]">EARN</p>
          <p className="text-[120px]">RELAX</p>
        </div>
        <div className="text-white p-8 rounded-xl max-w-sm shadow-lg bg-[#181818]">
          <h2 className="text-lg font-semibold mb-4 text-[#946D3F]">
            Get in touch with us
          </h2>
          <ConstactUs />
        </div>
      </div>
    </div>
  );
}
