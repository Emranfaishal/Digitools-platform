import React from 'react';

const FooterOne = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-20">
                <aside className="grid-flow-col items-center">

                    <p>Copyright © {new Date().getFullYear()} -  Digitools . All rights reserved.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        Privacy Policy
                    </a>
                    <a>
                        Terms of Service
                    </a>
                    <a>
                        Cookies
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default FooterOne;