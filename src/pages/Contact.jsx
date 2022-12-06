/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/

import Banner from "../components/Banner";

export default function Contact()
{
    return(
        <div>
            <Banner/>
            <section>
                <h1 className="section-title">Social Media</h1>
                <div className="section-description">
                    <p>
                        List of Taylor’s Social Media:
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Facebook</td>
                            <td>TaylorSwift</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Instagram</td>
                            <td>taylorswift</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Tumblr</td>
                            <td>taylorswift</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Twitter</td>
                            <td>@taylorswift13</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>TikTok</td>
                            <td>@taylorswift</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>YouTube</td>
                            <td>taylorswift</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Line</td>
                            <td>@taylorswift</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}