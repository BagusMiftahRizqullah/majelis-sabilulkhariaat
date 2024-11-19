import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap pb-12 pt-12 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Kitab Awrad Thariqah Fahamiyyah
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
            Dibaca setiap hari setelah shalat fardhu. Dzikir ini akan memberikan manfaat bagi orang yang tekun membacanya.
            Insya Allah kita semua akan diberkahi oleh Allah
            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.aurodtoriqotilfahamiyah&pcampaignid=web_share"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Download for Free
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.aurodtoriqotilfahamiyah&pcampaignid=web_share"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
               <svg
                role="img"
                width="24"
                height="24"
                className="w-5 h-5"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Google Play Store</title>
                <path d="M325.3 234.3L104.3 42.4C94.9 34.9 82 36.6 73.8 45.2 43.6 74.6 0 121.9 0 121.9S46.5 157.8 65.7 173.1L325.3 234.3zM15.2 389.3C15.2 389.3-20.8 435.3 15.2 466.6 28.8 477.8 50.7 472.8 66.4 460.8L324.5 277.4 65.7 338.6C46.5 353.9 0 389.9 0 389.9S43.6 437.3 73.8 466.6C82 475.2 94.9 476.9 104.3 469.4L325.3 277.5 15.2 389.3zM453.5 229.4L398.6 256 453.5 282.6C469.5 290.6 477.7 288.1 477.7 276.2 477.7 276.2 497.3 256 497.3 256S477.7 235.8 477.7 223.9C477.7 212 469.5 209.5 453.5 229.4zM382.7 256L65.7 338.6 65.7 173.1 382.7 256z" />
              </svg>
                <span> View on Playstore</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <div className="hidden lg:block justify-between">
            <Image
              src={heroImg}
              width="300"
              alt="Hero Illustration"
              placeholder="blur"
              layout="intrinsic"
              loading="eager"
              priority
              className="object-contain"
            />
          </div>
          </div>
        </div>
      </Container>

    </>
  );
}
