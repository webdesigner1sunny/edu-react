import React from "react";

export default function FooterCopyright() {
  return (
    <div>
      <div className="col-12 text-center">
        <p>
          Copyright &copy;
          <script>document.write(new Date().getFullYear());</script>. All Rights
          Reserved. &mdash; Designed with love by <a href="#">abc</a>{" "}
          Distributed By <a href="#">abc</a>{" "}
        </p>
      </div>
    </div>
  );
}
