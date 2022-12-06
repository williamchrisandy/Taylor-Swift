import BannerImage from "../image/banner.png"

export default function Banner()
{
    return(
        <section>
            <article className="banner">
                <figure>
                    <img src={BannerImage} alt="About Banner" width="980px" height="200px" max-width="100%"/>
                </figure>
            </article>
        </section>
    );
}