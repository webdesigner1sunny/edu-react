import FooterAbout from "./FooterAbout";

import FooterSocial from "./FooterSocial";
import FooterProjects from "./FooterProjects";
import FooterGallery from "./FooterGallery";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <div>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mr-auto">
              <FooterAbout />
              <FooterSocial />
            </div>

            <div className="col-lg-2 ml-auto">
              <FooterProjects />
            </div>

            <div className="col-lg-3">
              <FooterGallery />
            </div>

            <div className="col-lg-3">
              <FooterContact />
            </div>
          </div>

          <div className="row mt-5">
            <FooterCopyright />
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
