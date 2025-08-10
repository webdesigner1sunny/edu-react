import React from "react";

export default function FooterGallery() {
  return (
    <div>
      <div className="widget">
        <h3>Gallery</h3>
        <ul className="instafeed instagram-gallery list-unstyled">
          <li>
            <a
              className="instagram-item"
              href="images/gal_1.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_1.jpg" alt="" width="72" height="72" />
            </a>
          </li>
          <li>
            <a
              className="instagram-item"
              href="images/gal_2.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_2.jpg" alt="" width="72" height="72" />
            </a>
          </li>
          <li>
            <a
              className="instagram-item"
              href="images/gal_3.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_3.jpg" alt="" width="72" height="72" />
            </a>
          </li>
          <li>
            <a
              className="instagram-item"
              href="images/gal_4.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_4.jpg" alt="" width="72" height="72" />
            </a>
          </li>
          <li>
            <a
              className="instagram-item"
              href="images/gal_5.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_5.jpg" alt="" width="72" height="72" />
            </a>
          </li>
          <li>
            <a
              className="instagram-item"
              href="images/gal_6.jpg"
              data-fancybox="gal"
            >
              <img src="images/gal_6.jpg" alt="" width="72" height="72" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
