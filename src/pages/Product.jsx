/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/

import Banner from "../components/Banner";

export default function Product()
{
    return(
        <div>
            <Banner/>
            <section>
                <h1 className="section-title">Studio Album Discography</h1>
                <div className="section-description">
                    <p>
                        Taylor Swift released her debut album at 2006. Due to her recent issues with her old record label, she is rerecording all her past albums that released before 2019. In this list of her studio album, we replaced these albums with the Taylor’s Version due to respect and support for artists to own their own musics.
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Taylor Swift</td>
                            <td>24 October 2006</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td><s>Fearless</s> Fearless (Taylor&rsquo;s Version)</td>
                            <td><s>11 November 2008</s> 9 April 2021</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Speak Now</td>
                            <td>25 Oktober 2010</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td><s>Red</s> Red (Taylor&rsquo;s Version)</td>
                            <td><s>22 October 2012</s> 12 November 2021</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>1989</td>
                            <td>27 October 2014</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>reputation</td>
                            <td>10 November 2017</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Lover</td>
                            <td>23 August 2019</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>folklore</td>
                            <td>24 July 2020</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>evermore</td>
                            <td>11 December 2020</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}