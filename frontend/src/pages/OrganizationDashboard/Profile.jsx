import React from "react";

const OrganizationProfile = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-xl p-8">
      <div className="flex flex-col">

        <div className="flex items-center justify-start gap-5">
          <img
            className="w-24 h-24 rounded-full bg-white border-2 border-indigo-100 shadow-md shadow-black"
            src="https://source.unsplash.com/random/100x100"
            alt="Organization Logo"
          />
          <div>
            <h2 className="text-4xl font-semibold text-white">
              Acme Corporation
            </h2>
            <p className="text-purple-600 text-lg">
              info@acme.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-center gap-5">
        <h3 className="text-xl font-semibold text-white">
          About Us
        </h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
          sed, dolor.
        </p>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Address
          </h3>
          <p className="text-gray-400">
            1234 Main St, Anytown, USA
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-hite">
            Phone
          </h3>
          <p className="text-gray-400">
            (123) 456-7890
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Website
          </h3>
          <p className="text-gray-400">
            <a
              href="https://acme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-500"
            >
              acme.com
            </a>
          </p>
        </div>

        {/* <div>
          <h3 className="text-xl font-semibold text-white">
            Social Media
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/acme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter-icon.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://facebook.com/acme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook-icon.svg"
               alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://linkedin.com/acme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OrganizationProfile;