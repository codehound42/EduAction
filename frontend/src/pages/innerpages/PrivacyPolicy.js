import React from 'react'
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const PrivacyPolicy = () => {
    return (
        <>
            <SEO title="Privacy Policy" />
            <Layout>
                <BreadcrumbOne 
                    title="Privacy Policy"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Privacy Policy"
                />
                <div className="edu-privacy-policy-area edu-privacy-policy edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="content">
                                <div className="thumbnail mb--50">
                                    <img className="radius-small w-100" src="/images/others/privacy-policy.jpg" alt="Privacy Policy" />
                                </div>
                                
                                <h4 className="title">Information We Collect</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio lorem, pulvinar vulputate diam eget, consectetur posuere massa. Suspendisse ornare in risus quis tempus. Vivamus ornare iaculis mi ut gravida. Integer convallis erat id dapibus pharetra. Nulla sagittis ligula eros, quis posuere massa auctor ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent facilisis, ante quis accumsan ultricies</p>
            
                                <h4 className="title">Log Data</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio lorem, pulvinar vulputate diam eget, consectetur posuere massa. Suspendisse ornare in risus quis tempus. Vivamus ornare iaculis mi ut gravida. Integer convallis erat id dapibus pharetra. Nulla sagittis ligula eros, quis posuere massa auctor ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent facilisis, ante quis accumsan ultricies. Duis nec tempor diam. Donec ut sapien pulvinar, fringilla odio in, tristique libero.</p>

                                <h4 className="title">Device Data</h4>
                                <p>Pellentesque ut varius leo. Quisque dignissim, orci in iaculis facilisis, tortor ipsum laoreet ligula, sed aliquam dolor nisl non ligula. Aenean dignissim ligula aliquam sem auctor, eu laoreet nibh pharetra. Phasellus nec lectus purus. Sed vitae lectus libero. Pellentesque vel lorem ligula. Maecenas eu orci non felis placerat malesuada. Aliquam erat volutpat. Fusce et nisl non justo viverra tincidunt. Ut cursus enim vitae facilisis ornare. Nullam auctor, mi ac tempor mollis, justo sem pretium magna, at elementum purus nulla facilisis eros. Sed posuere felis ut ipsum faucibus, a sagittis quam sodales. Donec in dui diam.</p>

                                <h4 className="title">How to Purchase a Course? </h4>
                                <p>Duis vitae vehicula risus. Morbi justo mauris, accumsan sed purus ac, varius viverra orci. Donec ut nunc sodales, posuere enim at, egestas erat.</p>
                                <ol>
                                    <li> Morbi justo mauris, accumsan.</li>
                                    <li>Donec ut nunc sodales.</li>
                                    <li>Nunc et enim eu risus mattis egestas.</li>
                                    <li>Nulla nisl purus, placerat ut nulla.</li>
                                </ol>
                    
                                <h4 className="title">Accepted Credit Cards</h4>
                                <p>Pellentesque ut varius leo. Quisque dignissim, orci in iaculis facilisis, tortor ipsum laoreet ligula, sed aliquam dolor nisl non ligula. Aenean dignissim ligula aliquam sem auctor, eu laoreet nibh pharetra. Phasellus nec lectus purus. Sed vitae lectus libero. Pellentesque vel lorem ligula. Maecenas eu orci non felis placerat malesuada. Aliquam erat volutpat. Fusce et nisl non justo viverra tincidunt. Ut cursus enim vitae facilisis ornare. Nullam auctor, mi ac tempor mollis, justo sem pretium magna, at elementum purus nulla facilisis eros. Sed posuere felis ut ipsum faucibus, a sagittis quam sodales. Donec in dui diam.</p>

                                <h4 className="title">Cookies</h4>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent facilisis, ante quis accumsan ultricies, nunc felis fermentum lorem, at lobortis mi erat non ligula. Nulla nisl purus, placerat ut nulla nec, convallis cursus arcu. Sed volutpat ullamcorper diam, at porta mi feugiat sit amet. Maecenas et leo ac tellus aliquet dapibus. Sed rutrum metus eget arcu commodo, non rutrum sem elementum.</p>

                                <h4 className="title">Changes to This Policy</h4>
                                <p>Morbi justo mauris, accumsan sed purus ac, varius viverra orci. Donec ut nunc sodales, posuere enim at, egestas erat. Mauris ultricies mauris non nunc malesuada rutrum. Vestibulum auctor venenatis tellus, ac accumsan est molestie vitae. Donec venenatis sapien finibus, dictum tellus at, ultrices enim. Cras dictum odio in nulla auctor, sed commodo augue sodales. Maecenas felis lorem, sagittis ac ipsum eget, porta sollicitudin diam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PrivacyPolicy;