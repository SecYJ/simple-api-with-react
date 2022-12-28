import { uuid } from "../utils/utils";
import banner from "../assets/banner.png";
import bannerLg from "../assets/banner-lg.png";

const advantages = [
    {
        id: uuid(),
        // TODO: TO BE CONTINUED
    },
];

const Banner = () => {
    return (
        <>
            <section className="relative mt-8">
                <picture>
                    <source srcSet={bannerLg} media="(min-width: 1526px)" />
                    <img src={banner} alt="" />
                </picture>
                <h1 className="absolute left-[3.25rem] bottom-12 text-3xl text-white">
                    窩窩家居 <br /> 跟您一起品味生活
                </h1>
            </section>
            <section className="mt-[3.75rem]">
                <h2 className="mb-7 text-center text-2xl">床墊優勢</h2>
                <ul className="grid grid-cols-3 gap-8"></ul>
            </section>
        </>
    );
};
export default Banner;
