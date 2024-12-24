"use client";
import React from "react";
import Logo2Dark from "@/public/simponia-logo2-dark.svg";
import Logo2 from "@/public/simponia-logo2.svg";
import Image from "next/image";
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 py-10 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto gap-8 mb-16">
        <div>
          <Image
            src={Logo2}
            alt="Simponia Logo"
            className="block dark:hidden mb-4"
          />
          <Image
            src={Logo2Dark}
            alt="Simponia Logo Dark"
            className="hidden dark:block mb-4"
          />
          {/* <p className="text-sm myleading-relaxed regular text-black dark:text-white/80">
            {language === "ge" ? (
              <>
                სიმფონია - შენი ექსკლუზიური არჩევანი, სადაც ბუნება და <br />
                კომფორტი ერთიანდება. აღმოაჩინე შენი ახალი
              </>
            ) : (
              "Get in touch with us"
            )}
          </p> */}
          {/* <div className="flex flex-col gap-[5px] mt-6">
            <input
              type="text"
              placeholder={language === "ge" ? "სახელი" : "Name"}
              className="w-full max-w-md h-[60px] px-6 duration-300 border dark:border-none border-black bg-whtie dark:bg-[#282828] placeholder-black/80 dark:placeholder-white/70 focus:outline-none hover:bg-none transition"
            />

            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder={language === "ge" ? "მეილი" : "Email"}
                className="w-full h-[60px] pl-6 pr-[120px] duration-300 border dark:border-none border-black bg-whtie dark:bg-[#282828] placeholder-black/80 dark:placeholder-white/70 focus:outline-none hover:bg-none transition"
              />
              <button className="absolute top-0 right-0 h-[60px] w-[140px] text-white bg-[#946D3F] duration-300 text-sm font-semibold  hover:bg-[#B38154] transition">
                {language === "ge" ? "გაგზავნა" : "SEND"}
              </button>
            </div>
          </div> */}
          <div className="flex justify-between sm:flex-row flex-col gap-12 items-center">
            <div className="flex gap-5 mt-6">
              <div>
                <p className="whitespace-nowrap text-lg">(+995) 557 07 30 00</p>
                <p className="whitespace-nowrap text-lg">(+995) 557 07 40 00</p>
              </div>
              <hr className="border-primary/40 border h-14" />
              <div>
                <a href="mailto:sales@simponia.ge">
                  <p className="whitespace-nowrap text-lg">sales@simponia.ge</p>
                </a>
                <a href="mailto:business@simponia.ge">
                  <p className="whitespace-nowrap text-lg">
                    business@simponia.ge
                  </p>
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=61568490037417"
                target="_blank"
              >
                <Image
                  src={FacebookIcon}
                  width={34}
                  height={34}
                  alt="facebook"
                />
              </Link>
              <Link
                href="https://www.instagram.com/simponia_world/"
                target="_blank"
              >
                <Image
                  src={InstagramIcon}
                  width={34}
                  height={34}
                  alt="instagram"
                />
              </Link>
              <Link href="https://www.facebook.com/simponia.ge">
                <Image
                  src={LinkedinIcon}
                  width={34}
                  height={34}
                  alt="linkedin"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        {/* <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-20 items-start justify-between">
          {(language === "ge" ? footerData.ge : footerData.en).map(
            (column, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]"
              >
                <h3 className="text-base font-semibold regular mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-sm duration-300 hover:text-[#D7A569] regular transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          <div>
            <div className="w-full text-left md:text-right">
              <h3 className="text-base font-semibold mb-4">
                {language === "ge" ? "დაგვიკავშირდით" : "Contact Us"}
              </h3>
              <ul className="space-y-3">
                <li className="whitespace-nowrap text-sm text-black/80 dark:text-white/60">
                  {language === "ge" ? "ტელეფონი" : "Phone"}
                </li>
                <li className="whitespace-nowrap">(+995) 557 07 30 00</li>
                <li className="whitespace-nowrap">(+995) 557 07 40 00</li>
                <li className="whitespace-nowrap text-sm text-black/80 dark:text-white/60">
                  {language === "ge" ? "იმეილი" : "Email"}
                </li>
                <li className="whitespace-nowrap"></li>
                <li className="whitespace-nowrap"></li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-6 text-center text-sm">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          <div className="">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">SIMPONIA GROUP</span>{" "}
            <span className="text-black/80 dark:text-white/80">
              ALL RIGHTS RESERVED
            </span>
          </div>
          <div className="flex gap-8 mt-4 sm:mt-0">
            <span className="uppercase text-black/80 dark:text-white/80">
              <a href="#">Transparency</a>
            </span>
            <span className="uppercase text-black/80 dark:text-white/80">
              <a href="#">Terms and Services</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
